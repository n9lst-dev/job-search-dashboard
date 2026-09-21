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
})();