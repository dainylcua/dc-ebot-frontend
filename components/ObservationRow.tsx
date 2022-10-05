import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters, } from "../data/parameters"
import { GroupedParameters, Parameters, GroupedData, DayData } from "../types/main"
import React from "react"

export default function ObservationRow({date, elements}) {  
  const onHover = () => {
    
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
            `${date}`
            // onHover, show description
            }
          </td>
              <React.Fragment >
                {
                  elements[element]["average"] ?
                  <>
                    <td className="px-8 py-4 border">
                      <span>
                        {element}:
                      </span>
                      <span>
                        {elements[element]["average"]}
                      </span>
                    </td>
                    <td className="px-8 py-4 border">
                      <span>
                        {elements[element]["peak"][0]}:
                      </span>
                      <span>
                        {elements[element]["peak"][1]}
                      </span>
                    </td>
                    <td className="px-8 py-4 border">
                      <span>
                        {elements[element]["lowest"][0]}:
                      </span>
                      <span>
                        {elements[element]["lowest"][1]}
                      </span>
                    </td>
                  </>
                  :
                  <>
                    <td className="px-8 py-4 border">
                      {element}: {Math.round(elements[element]["data"])}
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