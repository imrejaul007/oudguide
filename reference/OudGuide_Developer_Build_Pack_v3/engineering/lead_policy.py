"""OudGuide v3 reference release policy. Pure decision helper, not a dispatcher.
Production callers must use database locks, real identity/auth checks and trusted
inputs. Tests exercise this helper only, not a live portal or legal compliance.
"""
from dataclasses import dataclass
from datetime import datetime
from typing import FrozenSet, Optional

@dataclass(frozen=True)
class ReleaseContext:
    inquiry_id: str
    target_business_id: str
    grant_business_id: str
    grant_inquiry_id: str
    mode: str
    selected_business_id: Optional[str]
    inquiry_state: str
    channel_verified: bool
    partner_approved: bool
    partner_suspended: bool
    jurisdiction_allowed: bool
    consent_approved: bool
    consent_withdrawn: bool
    consent_expires_at: datetime
    inquiry_expires_at: datetime
    now: datetime
    requested_fields: FrozenSet[str]
    granted_fields: FrozenSet[str]
    requested_channel: str
    granted_channels: FrozenSet[str]
    purpose: str
    granted_purpose: str
    released_business_ids: FrozenSet[str]
    recipient_cap: int
    commercial_entitlement: bool
    exclusive: bool

def can_release(c: ReleaseContext) -> tuple[bool, str]:
    """Fail closed; the returned reason contains no contact information."""
    if any(t.tzinfo is None for t in (c.now,c.consent_expires_at,c.inquiry_expires_at)):
        return False, 'timezone_required'
    if not (c.inquiry_id and c.target_business_id):return False,'identity_required'
    if c.target_business_id!=c.grant_business_id or c.inquiry_id!=c.grant_inquiry_id:
        return False,'recipient_or_request_mismatch'
    if c.mode not in {'matching','selected_supplier'}:return False,'invalid_mode'
    if c.mode=='selected_supplier' and c.selected_business_id!=c.target_business_id:
        return False,'supplier_substitution'
    if c.inquiry_state not in {'authorized','dispatch_pending'}:return False,'request_not_authorized'
    if not c.channel_verified:return False,'contact_not_verified'
    if not c.partner_approved or c.partner_suspended:return False,'partner_ineligible'
    if not c.jurisdiction_allowed:return False,'policy_hold'
    if not c.consent_approved or c.consent_withdrawn:return False,'permission_missing'
    if c.now>=c.consent_expires_at or c.now>=c.inquiry_expires_at:return False,'expired'
    if not c.requested_fields or not c.requested_fields<=c.granted_fields:return False,'field_scope'
    if c.requested_channel not in c.granted_channels:return False,'channel_scope'
    if c.purpose!=c.granted_purpose or c.purpose!='requested_quotation':return False,'purpose_scope'
    if c.target_business_id in c.released_business_ids:return False,'duplicate_release'
    if c.recipient_cap<1 or len(c.released_business_ids)>=c.recipient_cap:return False,'recipient_cap'
    if c.exclusive and c.released_business_ids:return False,'not_exclusive'
    if not c.commercial_entitlement:return False,'no_commercial_entitlement'
    return True,'allowed'
