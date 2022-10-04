import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters, } from "../data/parameters"
import { Observation } from "../types/main"

export default function ObservationCard(observationData: Observation) {
  const element = Object.keys(observationData)[0]
  const properties = observationData[element]
  const flags = [properties["mFlag"], properties["qFlag"], properties["sFlag"]]
  const observationTime = observationData["observationTime"]
  
  const onHover = () => {
    
  }

  // TODO: Add observation information and layout
  return(
    <div className="flex flex-row w-full">
      <h2 className="justify-start">
        {
        `${element}`
        // onHover, show description
        }
      </h2>
      <div className="flex items-end justify-end w-3/4">
        <div>
          {
            `${properties.data}`
          }
        </div>
        {
          
        }
        <div>
        </div>
      </div>
    </div>
  )
}