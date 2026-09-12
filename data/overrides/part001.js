(() => {
  const updateRole = (company, role, patch) => {
    const item = window.APPLICATIONS.find(x => x.company === company && x.role === role);
    if (!item) {
      console.warn(`Override target not found: ${company} | ${role}`);
      return;
    }
    Object.assign(item, patch);
  };

  updateRole("Aderant", "Senior Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-11",
    stage: "Application / resume",
    signal: "Standard rejection after application review; employer moved forward with other candidates. No specific actionable feedback provided.",
    notes: "Tailored resume submitted. Rejection did not identify a specific qualification or experience gap."
  });

  updateRole("Samsara", "Specialist Sales Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-11",
    stage: "Application / resume",
    signal: "Standard rejection after application review; hiring team moved forward with other candidates. No additional feedback provided.",
    notes: "Tailored application submitted. Rejection did not identify a specific qualification or experience gap."
  });

  updateRole("Netskope", "Digital Experience Management (DEM) Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-12",
    stage: "Application / resume",
    signal: "Standard rejection after application review; Netskope declined to move forward. No specific qualification gap or actionable feedback was provided.",
    notes: "Applied Sep 11 using the experimental highly condensed resume format, not the validated V3.1 resume structure. Rejection received Sep 12. Keep this outcome in the condensed-resume cohort when comparing application results; it should not be treated as evidence about V3.1 performance."
  });
})();
