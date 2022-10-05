export type ReceivedStationData = {
  id: string;
  days: DayData;
}

export type DayData = {
  [date: string]: Observation;
}

export type Observation = {
  [element: string]: Parameters
}

export type Parameters = {
  data: number;
  mFlag: string;
  qFlag: string;
  sFlag: string;
  observedTime: string;
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