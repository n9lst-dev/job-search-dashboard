(() => {
  const v = Date.now();
  const load = src => new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `${src}?v=${v}`;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });

  async function boot() {
    try {
      window.APPLICATIONS = [];
      await load("data/manifest.js");

      const manifest = window.JOB_DATA_MANIFEST || {};
      const applicationFiles = [
        ...(manifest.legacy || []),
        ...(manifest.applications || [])
      ];

      for (const file of applicationFiles) await load(file);
      for (const file of manifest.overrides || []) await load(file);
      await load(manifest.app || "app.js");
    } catch (err) {
      console.error(err);
      const updated = document.getElementById("updated");
      if (updated) updated.textContent = "Data load error - check repository files";
    }
  }

  boot();
})();
