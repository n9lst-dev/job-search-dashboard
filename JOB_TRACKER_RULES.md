# Job Tracker Rules

## Purpose
The tracker is the historical record of the job search. It should support accurate funnel analysis, resume-strategy comparisons, sourcing analysis, and outreach analysis without overstating activity or rewriting history.

## Record creation and updates
- A job is marked Applied only after Justin clearly confirms submission with language such as "applied," "done," or "submitted."
- Preparing a resume, cover letter, screening answers, or outreach does not by itself create an Applied record.
- One defined role/application equals one record. Multiple roles at the same company remain separate applications.
- Before adding a record, check for an existing company + exact or near-exact role to avoid duplicates.
- Outreach, interviews, follow-ups, and outcomes update the existing application record rather than creating duplicates.
- Preserve rejected, stalled, withdrawn, closed, and unsuccessful applications. They are historical data.
- Recruiter leads or networking opportunities are not applications until Justin enters consideration for a defined role.
- Spam and fraudulent outreach may be preserved for history but must be excluded from application and funnel metrics.

## Standard status values
Use the smallest practical controlled set for new records:
- Lead
- Applied
- Active
- Rejected
- Withdrawn
- Closed
- Offer
- Hired

Legacy status values may remain for historical compatibility until deliberately migrated. Do not rewrite historical meaning merely to make old data match the new schema.

## Stage values
Stage describes the current point in the process and can be more specific than Status. Examples include:
- Application submitted
- Hiring manager contacted
- Hiring manager responded
- Awaiting TA screen
- Recruiter screen
- Hiring manager interview
- Technical interview
- Presentation
- Final interview

Silence is not a rejection. A no-response application may be treated as stalled/inactive for analysis but must not be marked Rejected without evidence.

## Dates
- Applied date is the actual submission date when known.
- Rejected date is the actual rejection date when known.
- Interview and other milestone dates should reflect the actual event date when tracked.
- Do not substitute the GitHub update date when the true event date is known.

## Resume strategy
For new applications, record the resume strategy when practical:
- V3.3 Master
- V3.3 Light Tailor
- V3.3 Targeted Custom

Historical applications retain the resume version/strategy actually used. Never relabel an older application as V3.3 because the master changed later.

## Source
For new applications, record the source when practical:
- LinkedIn
- Dice
- Company careers
- Recruiter
- Referral
- Direct/speculative
- Other

## Compensation and privacy
- Publicly posted employer compensation may be tracked.
- Never publish Justin's private desired salary, submitted salary expectation, minimum, or negotiation strategy to the repository.

## Outcomes and evidence
- Record rejection reasons only when supported by employer communication.
- Generic rejections remain generic. Do not infer missing skills or other causes as facts.
- Preserve meaningful signals without overstating them. A profile view, connection acceptance, hiring-manager response, recruiter screen, and interview are different levels of signal.
- Track interview depth when known so application-stage rejections can be distinguished from later-stage outcomes.
- When Justin withdraws, record the reason when useful, such as travel, compensation, onsite requirement, role change, or loss of interest.

## Outreach
- Record meaningful outreach on the existing application when useful, including hiring-manager contact, recruiter contact, response, and follow-up.
- Do not create a duplicate application record for outreach activity.

## Maintenance
- Fetch the current repository file before every write.
- Update an existing record rather than adding an override when a direct update is practical.
- Append to the current applications part while it remains manageable; create a new part and update the manifest when needed.
- Never assume an old file SHA is still current.

## Analysis goals
The tracker should eventually answer:
- Which role types produce interviews?
- Which resume strategy converts best?
- Does hiring-manager outreach improve response?
- Which application sources produce conversations and interviews?
- Where in the funnel are opportunities being lost?
- Do stronger-fit applications convert better than stretch applications?
- How do video-domain opportunities compare with cross-industry opportunities?
