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

      // Script onload fires even when a JavaScript syntax error prevents execution.
      // Verify each data chunk actually appended records before trusting dashboard counts.
      const failedFiles = [];
      for (const file of applicationFiles) {
        const before = window.APPLICATIONS.length;
        try {
          await load(file);
          if (window.APPLICATIONS.length === before) failedFiles.push(file);
        } catch (error) {
          console.error(error);
          failedFiles.push(file);
        }
      }
      for (const file of manifest.overrides || []) await load(file);
      if (manifest.weekly) await load(manifest.weekly);
      if (manifest.pipeline) await load(manifest.pipeline);
      await load(manifest.app || "app.js");
      if (failedFiles.length) {
        const notice = document.createElement("div");
        notice.setAttribute("role", "alert");
        notice.style.cssText = "background:#521f24;color:#fff;border:2px solid #ff7b8b;border-radius:10px;padding:14px;margin:12px 0;font-weight:700";
        notice.textContent = `WARNING: Application data is incomplete. ${failedFiles.length} file(s) failed to load: ${failedFiles.join(", ")}. Dashboard counts are incorrect.`;
        document.querySelector(".shell")?.prepend(notice);
        console.error("Application data files failed:", failedFiles);
      }
    } catch (err) {
      console.error(err);
      const updated = document.getElementById("updated");
      if (updated) updated.textContent = "Data load error - check repository files";
    }
  }

  boot();
})();
