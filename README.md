# NOAA Station Data Lookup App, by Dainyl Cua

This app requires 




## Page Overview

## Challenges faced during development

* Long query times, as per initial email (solved by making the .csv file parse into a global variable)
* Data still takes a long time to load on startup (~1-2 minutes) due to local parsing of large rows of data, as opposed to a tradiitional databse or CMS.
* Unable to utilize static site generation and server-side rendering to improve performance due to loading from a .csv file instead of a traditional database or CMS
* Some function parameter types in Observations.tsx do not line up properly, the any type is used instead
* Columns shift around when changing time period in Observations.tsx and ObservationRow.tsx
* Right border of column in Observations.tsx is cut off when time period is set to day
* Some data show up as NaN in data

## Potential Improvements

* Implement dynamic on-hover tooltips to show element parameters without needing to chekc the `/parameters` page.