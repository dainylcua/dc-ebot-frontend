import ObservationRow from "./ObservationRow"
import { DayData, GroupedData, GroupedObservation, GroupedParameters, Observation } from "../types/main"
import { daysInMonths } from "../data/monthDays"
import React, { useEffect, useState } from "react"

export default function Observations(data) {
  // TODO: Add observation container styling
  // TODO: Infinite scroll if day?

  const [monthlyData, setMonthlyData] = useState<GroupedData>({} as GroupedData)
  const [weeklyData, setWeeklyData] = useState<GroupedData>({} as GroupedData)
  const [selectedData, setSelectedData] = useState<GroupedData | DayData>(data["data"])
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
  
      const formattedMonthlyTotal: GroupedObservation = monthlyTotal.reduce((total, day, idx) => {
        for(let element in day) {
          let dayValue = day[element]["data"]
          if(total.hasOwnProperty(element)) {
            let totalValue = total[element]
            if(totalValue["peak"][0] < dayValue) totalValue["peak"] = [dayValue, idx]
            if(totalValue["lowest"][0] > dayValue) totalValue["lowest"] = [dayValue, idx]
            totalValue["average"] += dayValue
          } else {
            total[element] = {
              average: dayValue,
              peak: [dayValue, idx],
              lowest: [dayValue, idx],
            }
          }
        }
        return total
      }, {} as GroupedObservation)

      for(let element in formattedMonthlyTotal) {
        let elementProperties = formattedMonthlyTotal[element]
        elementProperties["average"] = Math.round(elementProperties["average"]/daysInMonths[month])
      }
  
      setMonthlyData((prevState) => ({
        ...prevState,
        [parseInt(month)]: formattedMonthlyTotal
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
          if(weekValues[element]["peak"][0] < value) weekValues[element]["peak"] = [value, dayOfTheWeek.toString()]
          if(weekValues[element]["lowest"][0] > value) weekValues[element]["lowest"] = [value, dayOfTheWeek.toString()]
          weekValues[element]["average"] += value
        } else {
          weekValues[element] = {
            average: value,
            peak: [value, dayOfTheWeek.toString()],
            lowest: [value, dayOfTheWeek.toString()],
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
    for(let week in weeklyTotal) {
      for(let element in weeklyTotal[week]) {
        let elementProperties = weeklyTotal[week][element]
        if(week == "52") {
          elementProperties["average"] = Math.round(elementProperties["average"]/2)
        } else {
          elementProperties["average"] = Math.round(elementProperties["average"]/7)
        }
      }
    }
    setWeeklyData(weeklyTotal)
  }

  useEffect(() => {
    if(data["data"]) {
      if(data["data"]["20171231"]) {
        getMonthlyAverages()
        getWeeklyAverages()
      }
    }
  }, [data])

  useEffect(() => {
    switch(period) {
      case "day":
        setSelectedData(data["data"])
        break
      case "week":
        setSelectedData(weeklyData)
        break
      case "month":
        setSelectedData(monthlyData)
        break
    }
  }, [period])

  return(
    <div>
      <div className="flex flex-row items-center w-full h-12 mb-8 justify-evenly">
        <label htmlFor="day" className="text-lg font-semibold">
          <input defaultChecked={true} className="mr-2" type="radio" id="day" name="date" value="day" onClick={() => setPeriod("day")}/>
          Day
        </label>
        <label htmlFor="week" className="text-lg font-semibold">
          <input className="mr-2" type="radio" id="week" name="date" value="week" onClick={() => setPeriod("week")}/>
          Week
        </label>
        <label htmlFor="month" className="text-lg font-semibold">
          <input className="mr-2" type="radio" id="month" name="date" value="month" onClick={() => setPeriod("month")}/>
          Month
        </label>
      </div>
      <table className="w-full">
        <thead>
          {
            period === "day" ?
            <tr>
              <th className="px-8 py-4 border">Date</th>
              <th className="px-8 py-4 border">Observation</th>
              <th className="px-8 py-4 border">Value</th>
              <th className="px-8 py-4 border">Flags</th>
            </tr>
            :
            <tr>
              {
                period === "week" ?
                <th className="px-8 py-4 border">Week</th>
                :
                <th className="px-8 py-4 border">Month</th>
              }
              <th className="px-8 py-4 border">Observation</th>
              <th className="px-8 py-4 border">Averages</th>
              <th className="px-8 py-4 border">Peaks</th>
              <th className="px-8 py-4 border">Lows</th>
            </tr>
          }
        </thead>
        <tbody>
          {
            selectedData ? 
            Object.keys(selectedData).map((key) => (
              <React.Fragment key={key}>
                <ObservationRow date={key.toString()} elements={selectedData[key]} period={period}/>
              </React.Fragment>
            ))
            :
            <></>
          }
        </tbody>
      </table>
    </div>
  )
}