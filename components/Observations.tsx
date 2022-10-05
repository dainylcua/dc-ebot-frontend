import ObservationRow from "./ObservationRow"
import { DayData, GroupedData, GroupedObservation, GroupedParameters, Observation } from "../types/main"
import { daysInMonths } from "../data/monthDays"
import { useEffect, useState } from "react"

export default function Observations(data: DayData) {
  // TODO: Add observation container styling
  // TODO: Add filter by day, week, or month capability
  // TODO: Infinite scroll if day?

  const [monthlyData, setMonthlyData] = useState<GroupedData>({} as GroupedData)
  const [weeklyData, setWeeklyData] = useState<GroupedData>({} as GroupedData)
  const [selectedData, setSelectedData] = useState(data["data"])
  const [period, setPeriod] = useState("day")

  const getMonthlyAverages = () => {
    for(let i=1; i<=12; i++) {
      let month = i.toString()
      let monthlyTotal = []
      if(month.length === 1) month = '0' + month
  
      const days = daysInMonths[month as keyof typeof daysInMonths]
      for(let i=1; i<=days; i++) {
        let day = i.toString().length === 1 ? '0' + i.toString() : i.toString()
        let date = `2017${month}${day}`
        monthlyTotal.push(data["data"][date])
      }
  
      const formattedMonthlyTotal: GroupedObservation = monthlyTotal.reduce((total, day) => {
        for(let element in day) {
          let dayValue = day[element]["data"]
          if(total.hasOwnProperty(element)) {
            let totalValue = total[element]
            if(totalValue["peak"][0] < dayValue) totalValue["peak"] = [dayValue, Object.keys(day)[0]]
            if(totalValue["lowest"][0] > dayValue) totalValue["lowest"] = [dayValue, Object.keys(day)[0]]
            totalValue["average"] += dayValue
          } else {
            total[element] = {
              average: dayValue,
              peak: [dayValue, Object.keys(day)[0]],
              lowest: [dayValue, Object.keys(day)[0]],
            }
          }
        }
        return total
      }, {} as GroupedObservation)

      for(let element in formattedMonthlyTotal) {
        let elementProperties = formattedMonthlyTotal[element]
        elementProperties["average"] = elementProperties["average"]/daysInMonths[month]
      }
  
      setMonthlyData((prevState) => ({
        ...prevState,
        [month]: formattedMonthlyTotal
      }))
    }
  }

  const getWeeklyAverages = () => {
    let week = 1
    let daysPassed = 1
    let weeklyTotal: GroupedData = {}
    let weekValues: GroupedObservation = {} as GroupedObservation
    for(let day in data["data"]) {
      let dayOfTheWeek = (daysPassed) % 7
      let elements = data["data"][day]
      for(let element in elements) {
        let value = elements[element]["data"]
        if(weekValues[element]) {
          if(weekValues[element]["peak"][0] < value) weekValues[element]["peak"] = [value, day]
          if(weekValues[element]["lowest"][0] > value) weekValues[element]["lowest"] = [value, day]
          weekValues[element]["average"] += value
        } else {
          weekValues[element] = {
            average: value,
            peak: [value, day],
            lowest: [value, day],
          }
        }
      }
      if(dayOfTheWeek === 0) {
        weeklyTotal[week] = weekValues
        weekValues = {}
        week += 1
      }
      daysPassed += 1
    }
    for(let day in weeklyTotal) {
      for(let element in weeklyTotal[day]) {
        let elementProperties = weeklyTotal[day][element]
        console.log(elementProperties)
        elementProperties["average"] = elementProperties["average"]/7
      }
    }
    setWeeklyData(weeklyTotal)
  }

  useEffect(() => {
    if(data["data"]) {
      if(data["data"]["20171231"]) {
        getMonthlyAverages()
        getWeeklyAverages()
        console.log(`monthly`, monthlyData)
        console.log(weeklyData)
      }
    }
  }, [data])

  return(
    <div>
      <div>Include date selection here</div>
      <div>Header with column labels</div>
      <div>
        {
          Object.entries(selectedData).map(([date, observations]) => (
            <div key={date}>
              <ObservationRow date={date.toString()} elements={observations}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}