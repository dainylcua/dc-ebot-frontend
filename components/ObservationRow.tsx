import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters, } from "../data/parameters"
import { GroupedParameters, Parameters, GroupedData, DayData } from "../types/main"

export default function ObservationRow({date, elements}) {
  // const element = Object.keys(observationData)[0]
  // const properties = observationData[element]
  // const flags = [properties["mFlag"], properties["qFlag"], properties["sFlag"]]
  // const observationTime = observationData["observationTime"]
  
  const onHover = () => {
    
  }

  // TODO: Add observation information and layout
  return(
    <div className="flex flex-row w-full">
      <h2 className="justify-start">
        {
        `${date}`
        // onHover, show description
        }
      </h2>
      <div className="flex flex-row sm:flex-col items-end align-end w-3/4 h-32">
        {
          elements ?
          Object.keys(elements).map((element) => (
            <div key={`${date}-${element}`}>
              {
                elements[element]["average"] ?
                <>
                  {element}, {Math.round(elements[element]["average"])}
                </>
                :
                <>
                  {element}, {Math.round(elements[element]["data"])}
                </>
              }
            </div>
          ))
          :
          <div>Loading elements...</div>
        }
        <div>
        </div>
      </div>
    </div>
  )
}