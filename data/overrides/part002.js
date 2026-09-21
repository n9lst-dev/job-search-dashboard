(() => {
  const updateRole = (company, role, patch) => {
    const item = window.APPLICATIONS.find(x => x.company === company && x.role === role);
    if (!item) {
      console.warn(`Override target not found: ${company} | ${role}`);
      return;
    }
    Object.assign(item, patch);
  };

  updateRole("Matillion", "Senior Solution Architect", {
    status: "Rejected",
    rejectedDate: "2026-09-15",
    stage: "Application / resume",
    signal: "Application-stage rejection after Talent Acquisition reviewed the background against the role requirements and chose to move forward with other candidates. No specific qualification gap or actionable feedback was provided."
  });

  updateRole("Salsify", "Solutions Consultant II", {
    status: "Rejected",
    rejectedDate: "2026-09-16",
    stage: "Application / resume",
    signal: "Application-stage rejection after Salsify reviewed a high volume of applications and chose to proceed with other candidates. No candidate-specific qualification gap or actionable feedback was provided."
  });

  updateRole("RapDev", "Solutions Engineer, ServiceNow", {
    status: "Rejected",
    rejectedDate: "2026-09-17",
    stage: "Application / resume",
    signal: "Application-stage rejection. RapDev said it moved forward with candidates whose backgrounds aligned more closely with its current needs. No candidate-specific qualification gap or actionable feedback was provided."
  });

  updateRole("Wiz", "Solutions Engineer, Growth - East", {
    status: "Closed",
    rejectedDate: "2026-09-16",
    stage: "Position filled",
    signal: "Wiz notified applicants that the position had been filled and was no longer moving forward with additional applications."
  });

  updateRole("Unily", "Solutions Engineer", {
    status: "Rejected",
    rejectedDate: "2026-09-21",
    stage: "Application / resume",
    signal: "Application-stage rejection after a competitive search with many applicants. Unily said it was impressed with Justin's qualifications but chose not to proceed. No candidate-specific gap or actionable feedback was provided.",
    notes: "Applied Sep 9, 2026. Rejection received Sep 21 from Sarah Hillier. Treat as low diagnostic value because no specific qualification, experience, location, or compensation issue was identified."
  });
  updateRole("Schneider Electric", "Software Solution Architect", {
    status: "Rejected",
    rejectedDate: "2026-09-21",
    stage: "Application / resume",
    signal: "Application-stage rejection after Schneider Electric reviewed the application. The company described the application as impressive but did not select Justin to continue in the process. No candidate-specific qualification gap or actionable feedback was provided.",
    notes: "Applied Sep 17, 2026. Rejection received Sep 21. Schneider Electric said it would retain the resume and share future opportunities that fit Justin's skills and experience."
  });

})();