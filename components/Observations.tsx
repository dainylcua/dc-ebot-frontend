import ObservationCard from "./ObservationCard"
import { DayData, MonthData } from "../types/main"
import { daysInMonths } from "../data/monthDays"
import { useState } from "react"

export default function Observations(data: DayData) {
  // TODO: Add observation container styling
  // TODO: Add filter by day, week, or month capability
  // TODO: Infinite scroll if day?

  const [monthlyData, setMonthlyData] = useState<MonthData>({
    "01": {},
    "02": {},
    "03": {},
    "04": {},
    "05": {},
    "06": {},
    "07": {},
    "08": {},
    "09": {},
    "10": {},
    "11": {},
    "12": {},
  })



  const getMonthlyAverages = (month: string) => {
    let monthStationData: DayData = {};
    if(month.length === 1) month = '0' + month; 

    if(daysInMonths.hasOwnProperty(month)) {
      const days = daysInMonths[month as keyof typeof daysInMonths]
      for(let i=1; i<=days; i++) {
        let day = i.toString().length === 1 ? '0' + i.toString() : i.toString();
        let date = `2017${month}${day}`;
        monthStationData[date] = data[date]
      }
    }
    setMonthlyData((prevState) => ({
      ...prevState,
      [month]: monthStationData
    }))
  }

  const getWeeklyAverages = (data: DayData) => {

  }

  const showItems = () => {

  }

  const loadMore = () => {

  }
  
  return(
    <div>
      Observations go here
      <div>
        <ObservationCard observationData={data} />
      </div>
    </div>
  )
}