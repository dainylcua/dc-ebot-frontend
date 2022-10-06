# NOAA Station Data Lookup App, by Dainyl Cua

* Framework: Next.js
* Backend: Express
* Styling: TailwindCSS
* Language: TypeScript

This app requires its complementary backend server, [dc-ebot-backend](https://github.com/dainylcua/dc-ebot-backend), to be running in order to function properly.

## Getting Started

Navigate to the directory you wish to store this repository in and run the following command in your command prompt:

```bash
git clone https://github.com/dainylcua/dc-ebot-frontend.git
npm run dev
```

## Page Overview

* `/`: Landing page
* `/stations`: Station lookup by ID (partial or total) page
* `/stations/[id]`: Specific station data page
* `/parameters`: Data parameter page

## Challenges faced during development

* ~~Long query times, as per initial email~~ (solved by making the .csv file parse into a global variable)
* Data still takes a long time to load on startup (~1-2 minutes) due to local parsing of large rows of data, as opposed to a tradiitional databse or CMS.
* Unable to utilize static site generation and server-side rendering to improve performance due to loading from a .csv file instead of a traditional database or CMS
* Some function parameter types in Observations.tsx do not line up properly, the any type is used instead
* Columns shift around when changing time period in Observations.tsx and ObservationRow.tsx
* Right border of column in Observations.tsx is cut off when time period is set to day
* Datapoints that have a value of 0 show up as NaN in Observations.tsx when time period is set to week or month

## Potential Improvements

* Implement dynamic on-hover tooltips to show element parameters without needing to check the `/parameters` page.
* Overall UI/UX improvements
* Improve UI on mobile devices (though I'm not too sure how relevant this would be without database and site deployment)
