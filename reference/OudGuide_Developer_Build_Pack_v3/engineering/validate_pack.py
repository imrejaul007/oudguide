"""Offline structural checks. Does not crawl or execute PostgreSQL/OpenAPI."""
from pathlib import Path
import json,sys,re
P=Path(__file__).resolve().parents[1];D=P/'data'
load=lambda n:json.loads((D/f'{n}.json').read_text())
r=load('route_manifest');paths={x['path'] for x in r};ids={x['route_id'] for x in r}
checks=[]
def check(label,condition):
 checks.append({'check':label,'passed':bool(condition)})
 if not condition:print('FAIL',label)
check('Unique route paths',len(paths)==len(r));check('Unique route IDs',len(ids)==len(r))
check('All semantic parents exist',all(x['parent_route'] in paths for x in r))
check('No merchant-headline wholesale policy remains',all('named al mutalib sourcing rfq' not in x['wholesale_referral'].lower() for x in r))
check('All proposed internal links resolve',all(x['source_path'] in paths and x['target_path'] in paths for x in load('proposed_internal_links')))
check('Every named family has a template',set(x['family'] for x in r)<=set(x['family'] for x in load('page_templates')))
check('Exactly 48 reference guides recorded',sum(x['family']=='Guide article' for x in load('competitor_page_audit'))==48)
check('Country IDs unique',len({x['iso2'] for x in load('country_registry')})==249)
check('All app acceptance tests explicitly not run',all('NOT RUN' in x['execution_status'] for x in json.loads((P/'qa/acceptance_tests.json').read_text())))
api=json.loads((P/'engineering/openapi.reference.json').read_text());schemas=api['components']['schemas']
refs=re.findall(r'"\$ref":\s*"#/components/schemas/([^"/]+)"',json.dumps(api))
check('OpenAPI schema references resolve',all(x in schemas for x in refs))
operation_ids=[op['operationId'] for path in api['paths'].values() for op in path.values()]
check('OpenAPI operation IDs unique',len(set(operation_ids))==len(operation_ids))
sql=(P/'engineering/schema.sql').read_text();tables=re.findall(r'CREATE TABLE\s+(\w+\.\w+)',sql)
check('SQL declared table names unique',len(tables)==len(set(tables)))
report={'scope':'Offline file/register checks only; no SQL execution, live HTTP crawl or portal E2E run','checks':checks,'all_passed':all(x['passed'] for x in checks),'named_routes':len(r),'sql_tables':len(tables),'api_operations':len(operation_ids)}
(P/'qa/pack_validation_results.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
sys.exit(0 if report['all_passed'] else 1)
