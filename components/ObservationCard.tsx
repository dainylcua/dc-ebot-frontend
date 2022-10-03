import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters, } from "../data/parameters"
import { StationCollection } from "../types/main"

export default function ObservationRow(observationData: StationCollection) {
  // TODO: Add observation information and layout
  return(
    <div>
      <h2>
        Parameter Element
      </h2>
      <div>
        <div>
          Value
        </div>
        <div>
          Flags - expect 2 max for now
        </div>
      </div>
    </div>
  )
}