export type Parameters = {
  data: number;
  mFlag: string;
  qFlag: string;
  sFlag: string;
  observedTime: string;
}

export type Observation = {
  [element: string]: Parameters
}

export type DayData = {
  [date: string]: Observation;
}

export type StationCollection = {
  [id: string]: DayData
}


export type GroupedData = {
  [date: string]: GroupedObservation;
}

export type GroupedObservation = {
  [element: string]: GroupedParameters
}

export type GroupedParameters = {
  average: number;
  peak: [number, string];
  lowest: [number, string];
}