# Job Search Dashboard

Public web dashboard for tracking a technical job-search pipeline.

## Dashboard
The site has no framework or build step and includes:
- application / waiting / interview / rejection KPIs
- rejection rate and average known response time
- status distribution
- application volume by day
- searchable and filterable role log
- CSV export

## Data
The tracked dataset is stored in `data/part1.js` through `data/part4.js`.

For the large tailored-resume batch, the resume timestamp is used as the application-date proxy because the tailored resume was downloaded and the application was submitted immediately afterward.

## Public-data note
This repository intentionally keeps the dashboard useful while avoiding recruiter names, personal contacts, detailed compensation targets, and other notes that are unnecessary to publish.

## Hosting
This repository is designed to publish directly with GitHub Pages from the `main` branch and repository root.
