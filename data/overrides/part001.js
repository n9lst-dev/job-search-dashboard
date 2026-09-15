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

  updateRole("Workday", "Presales- Enterprise Architect", {
    status: "Rejected",
    rejectedDate: "2026-09-13",
    stage: "Application / resume",
    signal: "Standard rejection after hiring-team review; Workday moved forward with other candidates. No specific qualification gap or actionable feedback was provided.",
    notes: "Tailored Presales Enterprise Architect resume and matching cover letter were prepared Sep 9. Rejection received Sep 13. Employer provided no role-specific feedback."
  });

  updateRole("BorgWarner", "PDS Site IT Manager", {
    status: "Active",
    stage: "HR review - resume requested",
    signal: "Human Resources manually reviewed the application and contacted Justin to request the missing resume rather than closing the application.",
    notes: "Applied Sep 11, 2026 for the onsite Kokomo PDS Site IT Manager role. On Sep 14, HR Generalist Coralyn Cregar emailed after reviewing candidates and asked Justin to provide the resume because it had not attached to the application. This is meaningful human review but not yet an interview. Employer-published salary range: $125,600-$172,700."
  });

  // Uniguest was accidentally duplicated when the recruiter-screen update was recorded.
  // Keep the original application record and remove the later duplicate before rendering/metrics.
  const duplicateUniguestIndex = window.APPLICATIONS.findIndex(
    x => x.company === "Uniguest" && x.role === "Pre-Sales Engineer"
  );
  if (duplicateUniguestIndex !== -1) window.APPLICATIONS.splice(duplicateUniguestIndex, 1);

  updateRole("Uniguest", "Pre-Sales Solutions Engineer", {
    status: "Recruiter Screen",
    stage: "Recruiter screen scheduled - Sep 17, 12:00 PM ET",
    signal: "Talent Acquisition reviewed the application and advanced Justin to a 30-minute Microsoft Teams screening call with Blair Johnson.",
    notes: "Applied Aug 27, 2026. Recruiter screen confirmed for Thursday, Sep 17, 2026 from 12:00 PM to 12:30 PM Indiana Eastern time via Microsoft Teams with Blair Johnson. Initial and replacement Microsoft Bookings links returned invalid-link errors before scheduling was successfully completed. Application predates the locked V3.3 master and belongs to the early post-Sencore active-search cohort."
  });
})();
