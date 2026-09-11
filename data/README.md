# Data architecture

The dashboard is manifest-driven.

- `part1.js` through `part7.js` are frozen legacy data. Do not rewrite them for normal updates.
- New applications go under `data/applications/` in chunks of no more than 5 records.
- Status/stage changes go under `data/overrides/` in chunks of no more than 5 updates.
- Add new chunk paths to `data/manifest.js`.
- Prefer one atomic commit that adds the chunk and updates the manifest.
- Use company + role as the current record key.
- Keep private screening answers, private recruiter correspondence, and private compensation expectations off the public dashboard.
