# Profile Atlas: MBA profile building for long-term CAT batches

This is one Cloudflare Worker plus one Durable Object, which acts as the built-in database. It needs no other services.
**Scope:** profile building only. CAT syllabus preparation is separate. The app links out to your practice platform (sectionaltest by default) and only uses a student's CAT-study hours to work out how much time is left for profile work.

## Deploy (GitHub → Cloudflare)
1. Put **index.js** and **wrangler.toml** at the root of a GitHub repo.
2. In Cloudflare, go to Workers & Pages → Create → **Import a repository**.
   - Set the project name to **profile-atlas**. It must match `name` in wrangler.toml.
   - Set the deploy command to `npx wrangler deploy`.
3. Add a **Secret** named `ADMIN_PASSWORD`. Until you do, the admin password is `atlas-admin`.

## Batches
- At sign-up, a student enters the cohort code (default `ATLAS`) and picks their CAT year: CAT27, CAT28, CAT29 and so on.
- Admin → Settings controls which years are open, e.g. `2027, 2028, 2029, 2030, 2031`.
- Each student's CAT date is calculated automatically as the last Sunday of November of their year.
- A countdown and phase timeline runs for every student. The phases are Build (>540 days), Proof (540–270), Package (270–90), CAT season (90–0) and Interview season (after CAT).
- Students see milestone banners at 1000, 730, 545, 365, 270, 180, 120, 90, 60, 30, 14, 7 and 1 days.
- Mentors get an alert each time a student enters a new phase.
- The admin and mentor views can filter by batch.

## For students
- **Profile mapping:** seven territories (Academics, Work & internships, Leadership, Extra-curriculars, Awareness, Narrative, Skills & certifications). Students mark what is true, rate themselves and add their best proof.
- **Auto-insights from basics:** 10th, 12th and graduation marks (percent or CGPA), degree, an optional gender field, work experience and CAT year. These produce academic bands, dips to explain, diversity notes and work experience at CAT time. Items that follow from the details are ticked automatically on the map.
- **No college cut-offs:** the app never shows a percentile or cut-off for any school group. Goals are described in plain words.
- **Time budget:** students enter their weekday and weekend routine (sleep, college or work, commute, CAT study, other). The app works out their free hours, they set the weekly hours they will give to profile building, and it warns them when they take on more than that.
- **Quests:** ranked by gaps, phase and free hours. Each has a 5-step guide, interview questions, a progress log with proof links, and a board view.
- **Also:** a mentor tab with slot booking and calendar links, a resource hub of 41 profile-building links (no coaching or test-prep providers; admin can edit it), weekly check-ins and XP ranks.

## For mentors
- An alert queue that fires on:
  - the first review being due
  - a phase change
  - no activity for 10+ days
  - a blocked quest
  - low mood in two check-ins
  - a narrative gap close to interviews
  - 3+ critical territories
  - over-commitment
  - very little free time
  - a help request
- A roster with batch filters and per-territory colour cells.
- A page per student with their atlas, road to CAT, weekly routine, auto-insights, quests, notes and sessions.
- Published slots, booking and session outcomes.

## For admins
- Cards for each batch and a cohort chart of gaps by territory.
- Student and mentor management.
- The resource library and settings, including years, cohort code and the CAT practice platform link.
- CSV export with batch, days to CAT, phase and hours.
