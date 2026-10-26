import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { buildJsonLd, jsonLdScript } from '../apps/web/src/lib/jsonld.ts';
import { getArticle } from '../apps/web/src/lib/articles.ts';


const SITE = 'https://www.oudguide.com';

/**
 * ==========================================================================
   Structured data.

   The audit found that no page emitted any JSON-LD at all. The article
   records carry everything the schema needs — a reviewer, a review date,
   a review method, the source registry — and the schema was not built
   from it.

   These tests check that the schema is built from the same record the
   page renders from, so it cannot describe something the page does not
   say.
   ========================================================================== */

const article = getArticle('oud-basics/what-is-agarwood')!;

describe('Article JSON-LD', () => {
  test('a reviewed article produces an Article schema', () => {
    const graph = buildJsonLd(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );

    const schema = graph.find((g) => g['@type'] === 'Article');
    assert.ok(schema, 'an Article schema must be produced');

    assert.equal(schema.headline, article.title);
    assert.equal(schema.description, article.summary);
    assert.equal(schema.datePublished, article.reviewedOn);
    assert.equal(schema.dateModified, article.reviewedOn);
    // The author is the OudGuide organization, not the record's reviewer
    // string. The reviewer is a descriptor ("OudGuide editorial review"),
    // not an entity, and a named reviewer surface is added only when the
    // editorial register actually carries a person.
    assert.equal((schema.author as any)['@type'], 'Organization');
    assert.equal((schema.author as any).name, 'OudGuide');
    assert.equal((schema.publisher as any).name, 'OudGuide');
    assert.equal((schema.publisher as any).url, `${SITE}/en/about`);
    assert.equal((schema.publisher as any).logo, `${SITE}/icon.png`);
    // The schema must name the page it describes.
    assert.equal((schema.mainEntityOfPage as any).url, `${SITE}/en/guides/oud-basics/what-is-agarwood`);
  });

  test('the review date is the only date claimed', () => {
    const graph = buildJsonLd(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );
    const schema = graph.find((g) => g['@type'] === 'Article') as any;

    // A schema that claimed a more recent modification than the page
    // shows would be the same defect the audit found in the copy.
    assert.equal(schema.dateModified, schema.datePublished);
    assert.equal(schema.dateModified, article.reviewedOn);
  });

  test('the citations come from the source registry, with the scope-bearing fields', () => {
    const graph = buildJsonLd(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );
    const schema = graph.find((g) => g['@type'] === 'Article') as any;

    assert.ok(Array.isArray(schema.citation), 'the Article schema must carry citations');
    assert.equal(schema.citation.length, article.sourceIds.length);

    for (const citation of schema.citation) {
      assert.ok(citation.name, 'a citation must be named');
      assert.ok(citation.url?.startsWith('https://'), 'a citation must have an https URL');
      assert.ok(citation.dateAccessed, 'a citation must record when it was retrieved');
    }
  });

  test('a page with no article produces no Article schema', () => {
    const graph = buildJsonLd(
      {
        path: '/en/membership',
        title: 'Annual Membership',
        description: 'A description of the membership page.',
      },
      SITE
    );

    assert.equal(
      graph.find((g) => g['@type'] === 'Article'),
      undefined,
      'a page that is not an article must not claim to be one'
    );
  });
});

describe('BreadcrumbList JSON-LD', () => {
  test('a page with a hierarchy produces a BreadcrumbList', () => {
    const graph = buildJsonLd(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Encyclopedia', href: '/en/guides' },
          { label: article.title, href: '/en/guides/oud-basics/what-is-agarwood' },
        ],
      },
      SITE
    );

    const schema = graph.find((g) => g['@type'] === 'BreadcrumbList') as any;
    assert.ok(schema, 'a BreadcrumbList must be produced');

    assert.equal(schema.itemListElement.length, 3);
    assert.equal(schema.itemListElement[0].position, 1);
    assert.equal(schema.itemListElement[0].item, `${SITE}/en`);
    assert.equal(
      schema.itemListElement[2].item,
      `${SITE}/en/guides/oud-basics/what-is-agarwood`
    );
  });

  test('a page with no hierarchy produces no BreadcrumbList', () => {
    const graph = buildJsonLd(
      { path: '/en/membership', title: 'Annual Membership', description: 'A description.' },
      SITE
    );

    assert.equal(graph.find((g) => g['@type'] === 'BreadcrumbList'), undefined);
  });
});

describe('The schema is rendered as a script tag', () => {
  test('a page with an article produces a JSON-LD payload', () => {
    const script = jsonLdScript(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );

    assert.ok(script, 'a JSON-LD payload must be produced');

    const parsed = JSON.parse(script);
    assert.ok(parsed['@type'] || parsed['@graph'], 'the payload must be a schema or a graph');
  });

  test('a page with nothing to describe produces no payload', () => {
    const script = jsonLdScript(
      { path: '/en/membership', title: 'Annual Membership', description: 'A description.' },
      SITE
    );

    assert.equal(script, null, 'no JSON-LD is emitted for a page with no schema');
  });

  test('the payload is valid JSON with no unescaped source data', () => {
    const script = jsonLdScript(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );

    // JSON.parse throws on anything unescaped, which is the point: a
    // source title containing a quote must not break the document.
    const parsed = JSON.parse(script!);
    assert.ok(parsed);
  });

  test('the payload carries no contact details', () => {
    // A locked profile shows no contact fields, and a schema that
    // published them to a crawler would defeat the contact projection.
    const script = jsonLdScript(
      {
        path: '/en/directory/al-mutalib-perfumes',
        title: 'Al Mutalib Perfumes',
        description: 'A producer profile.',
        business: {
          name: 'Al Mutalib Perfumes',
          description: 'A producer profile.',
        },
      },
      SITE
    );

    assert.ok(script);
    const lowered = script!.toLowerCase();
    for (const field of ['email', 'whatsapp', 'street_address', 'telephone']) {
      assert.ok(!lowered.includes(field), `the schema must not carry ${field}`);
    }
  });
});

describe('Dataset JSON-LD', () => {
  test('an original-data article declares a Dataset next to its Article', () => {
    const baseline = getArticle('quality/gulf-price-baseline')!;
    const graph = buildJsonLd(
      {
        path: '/en/guides/quality/gulf-price-baseline',
        article: baseline,
        dataset: {
          name: baseline.title,
          description: baseline.summary,
          variableMeasured: baseline.dataset!.variableMeasured,
          datePublished: baseline.reviewedOn,
          dateModified: baseline.reviewedOn,
        },
        title: baseline.title,
        description: baseline.summary,
      },
      SITE
    );

    const dataset = graph.find((g) => g['@type'] === 'Dataset') as any;
    assert.ok(dataset, 'the baseline must produce a Dataset schema');
    // The Article remains too: a dataset is an additive claim, not a
    // replacement for the reviewed article.
    assert.ok(graph.find((g) => g['@type'] === 'Article'), 'the Article schema remains');
    assert.equal(dataset.name, baseline.title);
    assert.deepEqual(
      dataset.variableMeasured,
      ['material', 'form', 'price band', 'currency', 'market', 'conditions recorded', 'date of observation'],
      'the Dataset records only the variables the article declares'
    );
    // The dates are the record's review dates, not invented freshness.
    assert.equal(dataset.datePublished, baseline.reviewedOn);
    assert.equal(dataset.dateModified, baseline.reviewedOn);
    assert.equal((dataset.publisher as any).name, 'OudGuide');
  });

  test('the grade-label dataset declares its own variables', () => {
    const labels = getArticle('quality/grade-label-dataset')!;
    assert.ok(labels.dataset, 'the grade-label catalogue must declare a dataset');
    assert.ok(
      labels.dataset.variableMeasured.includes('grade label (spelling)'),
      'the catalogue records each label as it is printed'
    );

    const graph = buildJsonLd(
      {
        path: '/en/guides/quality/grade-label-dataset',
        article: labels,
        dataset: {
          name: labels.title,
          description: labels.summary,
          variableMeasured: labels.dataset!.variableMeasured,
          datePublished: labels.reviewedOn,
          dateModified: labels.reviewedOn,
        },
        title: labels.title,
        description: labels.summary,
      },
      SITE
    );

    const dataset = graph.find((g) => g['@type'] === 'Dataset') as any;
    assert.ok(dataset, 'the grade-label catalogue must produce a Dataset schema');
  });

  test('a guide that declares no dataset produces no Dataset schema', () => {
    const graph = buildJsonLd(
      {
        path: '/en/guides/oud-basics/what-is-agarwood',
        article,
        title: article.title,
        description: article.summary,
      },
      SITE
    );

    assert.equal(
      graph.find((g) => g['@type'] === 'Dataset'),
      undefined,
      'an ordinary guide must not claim to be a dataset'
    );
  });
});

describe('FAQPage JSON-LD', () => {
  test('visible Q&As produce a FAQPage', () => {
    const graph = buildJsonLd(
      {
        path: '/en/directory/al-mutalib-perfumes',
        title: 'Al Mutalib Perfumes',
        description: 'A producer profile.',
        business: { name: 'Al Mutalib Perfumes' },
        faq: [
          { question: 'How do I verify this producer’s provenance?', answer: 'Supplier-declared unless verified.' },
          { question: 'What is the minimum order quantity?', answer: 'Set per producer.' },
        ],
      },
      SITE
    );

    const faq = graph.find((g) => g['@type'] === 'FAQPage') as any;
    assert.ok(faq, 'a page with visible Q&As must produce a FAQPage');
    assert.equal(faq.mainEntity.length, 2);
    assert.equal(faq.mainEntity[0]['@type'], 'Question');
    assert.equal(faq.mainEntity[0].name, 'How do I verify this producer’s provenance?');
    assert.equal((faq.mainEntity[0].acceptedAnswer as any).text, 'Supplier-declared unless verified.');
    // A directory FAQ must not leak contact fields either.
    const lowered = JSON.stringify(faq).toLowerCase();
    for (const field of ['email', 'whatsapp', 'telephone']) {
      assert.ok(!lowered.includes(field), `the FAQPage must not carry ${field}`);
    }
  });

  test('an empty FAQ produces no FAQPage', () => {
    const graph = buildJsonLd(
      {
        path: '/en/membership',
        title: 'Annual Membership',
        description: 'A description.',
        faq: [],
      },
      SITE
    );

    assert.equal(graph.find((g) => g['@type'] === 'FAQPage'), undefined);
  });
});
