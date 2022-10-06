import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters } from "../data/parameters"
import { monthNames, dayNames, ordinalIndicators } from "../data/monthDays"
import React from "react"

export default function ObservationRow({date, elements, period}) {    
  const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
  
  const onHover = (type, value) => {
    
  }

  // TODO: Add observation information and layout
  return(
    <>
    {
      elements ?
      Object.keys(elements).map((element) => (
        <tr key={`${date}-${element}`}>
          <td className="px-8 py-4 border">
            {
              period === "month" ? monthNames[date]
                : period === "week" ?
                    date
                :
                  new Date(formattedDate).toLocaleDateString('en-US', {timeZone: 'UTC', timeZoneName: 'short'})
            }
          </td>
              <React.Fragment>
                {
                  elements[element]["average"] ?
                    period === "month" ?
                      <>
                        <td className="px-8 py-4 border">
                          {element}
                        </td>
                        <td className="px-8 py-4 border">
                          {elements[element]["average"].toString()}
                        </td>
                        <td className="px-8 py-4 border">
                          <div>
                            {elements[element]["peak"][0].toString()}
                          </div>
                          <div>
                            On: {elements[element]["peak"][1]}{ordinalIndicators[elements[element]["peak"]] ? ordinalIndicators[elements[element]["peak"]] : 'th'}
                          </div>
                        </td>
                        <td className="px-8 py-4 border">
                          <div>
                            {elements[element]["lowest"][0].toString()}
                          </div>
                          <div>
                            On: {elements[element]["lowest"][1]}{ordinalIndicators[elements[element]["peak"]] ? ordinalIndicators[elements[element]["peak"]] : 'th'}
                          </div>
                        </td>
                      </>
                    :
                      <>
                        <td className="px-8 py-4 border">
                          {element}
                        </td>
                        <td className="px-8 py-4 border">
                          {elements[element]["average"].toString()}
                        </td>
                        <td className="px-8 py-4 border">
                          <div>
                            {elements[element]["peak"][0].toString()}
                          </div>
                          <div>
                            On: {dayNames[elements[element]["peak"][1]]}
                          </div>
                        </td>
                        <td className="px-8 py-4 border">
                          <div>
                            {elements[element]["lowest"][0].toString()}
                          </div>
                          <div>
                            On: {dayNames[elements[element]["lowest"][1]]}
                          </div>
                        </td>
                      </>
                  :
                  <>
                    <td className="px-8 py-4 border">
                      {element}
                    </td>
                    <td className="px-8 py-4 border">
                      {Math.round(elements[element]["data"])}
                    </td>
                    <td className="px-8 py-4 border">
                      {elements[element]["mFlag"] ? <div>M: {elements[element]["mFlag"]}</div> : <></>}
                      {elements[element]["qFlag"] ? <div>Q: {elements[element]["qFlag"]}</div> : <></>} 
                      {elements[element]["sFlag"] ? <div>S: {elements[element]["sFlag"]}</div> : <></>} 
                    </td>
                  </>
                }
              </React.Fragment>
        </tr>
      ))
    :
      <></>
    }
    </>
  )
}