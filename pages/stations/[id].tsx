import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Container from "../../components/Container"
import Observations from "../../components/Observations"
import { DayData, ReceivedStationData } from "../../types/main"

export default function StationPage() {
  // TODO: Get all information and display it well
  const router = useRouter()
  const { id } = router.query

  const [stationData, setStationData] = useState<ReceivedStationData>({} as ReceivedStationData)

  const getData = async (id: string | string[]) => {
    const res = await fetch(`http://localhost:3001/stations/${id}`)
    const data = await res.json();
    return data
  }

  useEffect(() => {
    getData(id).then((data) => setStationData(data))
  }, [id])

  return (
    <Container>
      {
        stationData["days"] ?
        <>
          <h1>
            Station id: {id}
          </h1>
          <Observations data={stationData["days"]} />
        </>
        :
        <div>Loading station data...</div>
      }
    </Container>
  )
}
