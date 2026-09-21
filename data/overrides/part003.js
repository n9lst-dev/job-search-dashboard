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

})();