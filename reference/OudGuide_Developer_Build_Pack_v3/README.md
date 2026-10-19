# OudGuide — Developer Build Pack v3

Research date: 19 October 2026.

## Start here

1. Open `OudGuide_Developer_Playbook_v3.html` in a browser (self-contained; no external assets required). The matching Markdown file is editable.
2. Open `OudGuide_Audit_and_Page_Map_v3.xlsx`: 19 sheets. Read Start Here before interpreting counts.
3. Use `data/route_manifest.csv` and `data/page_templates.csv` to implement candidate routes and page formation. JSON mirrors are provided.
4. Use `data/proposed_internal_links.csv` for the proposed graph; do not confuse it with `data/observed_internal_edges.csv`, which records a partial graph of the reference site.
5. Review `data/decisions.csv` before enabling the affected feature or market.

## Latest wholesale requirement

The public acquisition brand is OudGuide, not an Al Mutalib sales headline. OudGuide receives the initial requirement. Al Mutalib or another eligible business may fulfil or pay for an introduction. Buyer approval of actual named recipients precedes release of contact information. Profile membership, verification, lead payment and recipient permission are separate controls.

## Inventory

68 reference URL records, including every one of the 48 guides linked by the reference guide index. 403 recorded reference edges from 49 source pages; not a complete raw/rendered crawl. 772 named English route candidates, 45 templates including 7 dynamic entity templates, 1,553 proposed internal links, 249 country/territory seeds, 67 conditional form fields, 45 unmeasured keyword-research patterns, 4 observed owned-site image references, and 20 decisions.

`engineering/schema.sql`: 50-table PostgreSQL reference design; not executed or certified as a production migration.
`engineering/openapi.reference.json`: 25-operation API reference; generic action payloads are explicitly contracts to finalize, not complete generated server code.
`engineering/lead_policy.py`: pure release-policy helper. It requires real server-side authority, jurisdiction checks, database locking and dispatch controls around it.
`qa/acceptance_tests.csv`: 110 application acceptance requirements, all NOT RUN because no portal was deployed.
`qa/policy_test_results.txt`: 18 helper unit tests passed.
`qa/pack_validation_results.json`: 12 offline structural checks passed.

## Run the included checks

From the extracted pack root:

```sh
python engineering/validate_pack.py
python -m unittest discover -s qa -p 'test_lead_policy.py' -v
```

These commands do not crawl websites, execute SQL, contact real buyers, charge suppliers or deploy anything.

## Working boundaries

Route records are planning briefs, not finished articles. Dynamic entity counts are unknown until real records are researched. Country seeds are an ISO-derived snapshot, not a current official synchronization and not a list of producing countries. Keyword volume and difficulty were not measured. Image URLs are observed references only: full-resolution image bytes and per-image rights approvals are not supplied. Worldwide suppliers were not exhaustively enumerated.

The HTML, Markdown, workbook and CSV/JSON registers are the v3 handoff. They supersede previous v2 wholesale headline-routing assumptions. Keep authority and affiliation transparent even though initial matching is neutral-branded.

## Sources and licensing

Primary documentation and merchant reference URLs are in `data/sources.csv`. Competitor observation URLs and limits are in each audit row. Competitor prose, images and supplier descriptions have not been copied into a deployable catalog. Use owned-site media only after checking asset rights, original resolution and correct subject attribution.

## Operations to approve

Legal operator, jurisdiction/channel rules, retention, privacy and partner contracts, lead pricing/refunds, annual billing implementation, editorial staffing, image rights, stack versions and hosting must be finalized by their owners. The decision register prevents developers from inventing those answers.
