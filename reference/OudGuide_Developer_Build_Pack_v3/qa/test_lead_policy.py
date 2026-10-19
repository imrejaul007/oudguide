import sys,unittest
from pathlib import Path
from dataclasses import replace
from datetime import datetime,timezone,timedelta
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'engineering'))
from lead_policy import ReleaseContext,can_release

class ReleasePolicyTest(unittest.TestCase):
 def setUp(self):
  now=datetime(2026,10,19,tzinfo=timezone.utc)
  self.c=ReleaseContext('request-1','supplier-1','supplier-1','request-1','matching',None,
    'authorized',True,True,False,True,True,False,now+timedelta(days=1),now+timedelta(days=2),now,
    frozenset({'email','requirements'}),frozenset({'email','requirements'}),'email',frozenset({'email'}),
    'requested_quotation','requested_quotation',frozenset(),3,True,False)
 def assertBlocked(self,reason,**changes):self.assertEqual(can_release(replace(self.c,**changes)),(False,reason))
 def test_allowed(self):self.assertEqual(can_release(self.c),(True,'allowed'))
 def test_wrong_recipient(self):self.assertBlocked('recipient_or_request_mismatch',grant_business_id='supplier-2')
 def test_wrong_request(self):self.assertBlocked('recipient_or_request_mismatch',grant_inquiry_id='request-2')
 def test_profile_substitution(self):self.assertBlocked('supplier_substitution',mode='selected_supplier',selected_business_id='supplier-2')
 def test_not_verified(self):self.assertBlocked('contact_not_verified',channel_verified=False)
 def test_withdrawn(self):self.assertBlocked('permission_missing',consent_withdrawn=True)
 def test_expired(self):self.assertBlocked('expired',consent_expires_at=self.c.now)
 def test_extra_field(self):self.assertBlocked('field_scope',requested_fields=frozenset({'email','phone'}))
 def test_extra_channel(self):self.assertBlocked('channel_scope',requested_channel='whatsapp')
 def test_marketing(self):self.assertBlocked('purpose_scope',purpose='newsletter')
 def test_suspended(self):self.assertBlocked('partner_ineligible',partner_suspended=True)
 def test_jurisdiction(self):self.assertBlocked('policy_hold',jurisdiction_allowed=False)
 def test_duplicate(self):self.assertBlocked('duplicate_release',released_business_ids=frozenset({'supplier-1'}))
 def test_cap(self):self.assertBlocked('recipient_cap',recipient_cap=1,released_business_ids=frozenset({'supplier-2'}))
 def test_affiliate_counts_for_exclusive(self):self.assertBlocked('not_exclusive',exclusive=True,released_business_ids=frozenset({'affiliate-supplier'}))
 def test_unpaid(self):self.assertBlocked('no_commercial_entitlement',commercial_entitlement=False)
 def test_closed(self):self.assertBlocked('request_not_authorized',inquiry_state='closed')
 def test_naive_time(self):self.assertBlocked('timezone_required',now=self.c.now.replace(tzinfo=None))
if __name__=='__main__':unittest.main(verbosity=2)
