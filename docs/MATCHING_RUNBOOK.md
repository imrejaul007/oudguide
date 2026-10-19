# OudGuide.com — Wholesale Lead Matching & Qualification Runbook

## 1. Overview of the Matching Model
OudGuide operates as a neutral wholesale fragrance matchmaker. The public acquisition brand is OudGuide.com.

## 2. Step-by-Step Operator Procedure
1. **Intake Review:** Operator reviews incoming inquiry in Admin Workspace (`/admin/inquiries`). Verify that the inquiry represents a genuine B2B requirement (bulk oil, wood chips, private label, attar production, packaging).
2. **Channel Verification:** Ensure buyer has confirmed email/phone via token before advancing status.
3. **Brief Redaction:** Generate anonymous brief:
   - Included: Material category, quantity, destination country, target specs, target timeline, sample requirements.
   - Strictly Redacted: Company name, buyer name, contact numbers, email addresses, exact address.
4. **Partner Discovery:** System presents eligible partners who match the category and destination jurisdiction.
5. **Buyer Selection / Approval:** Buyer logs into Buyer Status page (`/inquiries/{id}/approvals`) and reviews anonymized/named candidate profiles. Buyer clicks "Approve Introduction" for up to 3 chosen businesses.
6. **Release Execution:** System verifies `can_release()` constraints:
   - Partner approved & not suspended
   - Jurisdiction permitted
   - Consent not expired or withdrawn
   - Recipient cap not exceeded
   - Commercial entitlement / credit verified
7. **Outbox Notification:** Contact release notification sent simultaneously to both parties.
