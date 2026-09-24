(() => {
  const updateRole = (company, role, patch) => {
    const item = window.APPLICATIONS.find(x => x.company === company && x.role === role);
    if (!item) {
      console.warn(`Override target not found: ${company} | ${role}`);
      return;
    }
    Object.assign(item, patch);
  };

  updateRole("Tailscale", "Commercial Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-16",
    stage: "Application / resume",
    signal: "Application-stage rejection. No candidate-specific qualification gap or actionable feedback was provided."
  });
  updateRole("Ashby", "Enterprise Solutions Architect - Americas", {
    status: "Rejected",
    rejectedDate: "2026-09-14",
    stage: "Application / resume",
    signal: "Application-stage rejection after review. Ashby stated there was not an ideal fit at this time and did not provide a specific qualification gap or actionable feedback."
  });

  updateRole("Microblink", "Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-14",
    stage: "Application / resume",
    signal: "Application-stage rejection. Microblink stated that other candidates' experience was currently a closer match for the role; no specific qualification gap or actionable feedback was provided."
  });

  // Eve's rejection was historically appended as a second record instead of updating the original application.
  // Remove the stale waiting copy so one application equals one tracked role.
  const staleEveIndex = window.APPLICATIONS.findIndex(
    x => x.company === "Eve" && x.role === "Enterprise Customer Success Manager" && x.status === "Applied / Waiting"
  );
  if (staleEveIndex !== -1) window.APPLICATIONS.splice(staleEveIndex, 1);

  updateRole("Ranger AI", "Customer Solutions Architect", {
    status: "Interview / Stalled",
    stage: "Interview process stalled - awaiting next steps",
    signal: "Two interviews completed, including the Sep 4 process deep-dive with Kyle. Kyle said he wanted to continue the conversation and would send next steps, but no further process movement has been received.",
    notes: "Applied Aug 27, 2026. Intro interview and process deep-dive completed. Follow-up was sent after the interview. Keep as a stalled interview rather than an active interview until Ranger re-engages."
  });

  updateRole("Uniguest", "Pre-Sales Solutions Engineer", {
    status: "Interview",
    stage: "Hiring manager interview completed - recruiter follow-up, update expected next week",
    signal: "Recruiter screen with Blair Johnson completed Sep 17 and hiring manager interview with Mark Cortina completed Sep 22. Blair proactively followed up Sep 23, saying the team is still working through interviews and gathering feedback and that she expects to have more information next week.",
    notes: "Applied Aug 27, 2026. Recruiter screen completed Sep 17 with Blair Johnson. Hiring manager interview completed Sep 22 with Mark Cortina, VP, Technical Enterprise Solutions. Blair sent a holding update Sep 23 confirming the process is still active and that more information is expected next week. No follow-up needed this week. Role travel is approximately 40% and remains a point to clarify as the process advances."
  });


  updateRole("Indeed", "Senior Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-22",
    stage: "Application / resume",
    signal: "Application-stage rejection. Indeed cited high applicant interest and did not provide a candidate-specific qualification gap or actionable feedback."
  });


  updateRole("Nightingale Education Group", "Solutions Architect I/II", {
    status: "Rejected",
    rejectedDate: "2026-09-23",
    stage: "Application / resume",
    signal: "Application-stage rejection. Nightingale stated it is moving forward with other candidates and provided no candidate-specific qualification gap or actionable feedback.",
    notes: "Applied Aug 30, 2026. Rejection received Sep 23, 2026 from the Nightingale College Talent Acquisition Team."
  });

})();