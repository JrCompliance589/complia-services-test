You are inside the `complia-services-test` project for Complia Regulatory Services.

Before making changes, read `context.md` first. Treat it as the compact project briefing so you do not need to re-scan the whole repository unless the task specifically requires deeper source or legacy WordPress context.

Project intent:

- Maintain a premium, static-export Next.js website for Complia.
- Keep the active app in the repository root.
- Keep `public_html/` as the old WordPress archive and migration reference; do not edit it unless explicitly asked.
- Use existing content, claims, design language, and data structures from the current Next.js app.
- When adding or changing content, prefer `lib/site-data.ts` and the existing generated page patterns.
- Preserve the current regulatory wording unless new source evidence is provided. In particular, Complia is NABCB-accredited to ISO/IEC 17065:2012 under PC 050, while SASO-notified status remains in progress.

Working instructions:

1. Read `context.md`.
2. Inspect only the files directly relevant to the requested change.
3. Follow the existing component, CSS, metadata, and static-export patterns.
4. Keep the UI premium, clear, responsive, and practical.
5. Run the relevant validation command after code changes when feasible.
6. Summarize what changed and mention any validation that could not be run.

Prompt:-

i want the bellow given exact section in Fees and funding section after payment and refunds:-

13.Cost of Services
13.1. Actual costs are calculated for the certification service not limited to; receiving and studying
the application document(s) submitted by the Organization.
13.2. The actual cost for the certification services shall be made clear to the applicant in the form
of financial offer (e.g. quotation), and shall be agreed by the applicant.
13.3. In the case of a deposit request, the non-payment thereof within a period of 1 months may
lead to revision in the financial offer.
13.4. If the result of the examination on the product(s) is not satisfactory, the costs resulting of the
certification review and decision are still to be settled by the applicant.
13.5. The costs defined above (13.1) are invoiced to the applicant. Payment will be made upon
presentation of invoices, no later than the certification decision to grant the certification
document to the applicant or settle the payment(s) per the defined term.

and in this 
See the scheme’s cost-of-services provisions and Certification Agreement for the full terms.

only i want the Certification Agreement. now apart from this don't do anything else.
