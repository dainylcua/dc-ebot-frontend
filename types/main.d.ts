export type Properties = {
  data: number;
  mFlag: string;
  qFlag: string;
  sFlag: string;
  observedTime: string;
}

export type Observation = {
  [element: string]: Properties
}

export type MonthData = {
  "01": Observation,
  "02": Observation,
  "03": Observation,
  "04": Observation,
  "05": Observation,
  "06": Observation,
  "07": Observation,
  "08": Observation,
  "09": Observation,
  "10": Observation,
  "11": Observation,
  "12": Observation
}

export type DayData = {
  [date: string]: Observation;
}

export type StationCollection = {
  [id: string]: DayData
}
