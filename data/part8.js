(() => {
  const updateRole = (company, role, patch) => {
    const item = window.APPLICATIONS.find(x => x.company === company && x.role === role);
    if (item) Object.assign(item, patch);
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
})();
