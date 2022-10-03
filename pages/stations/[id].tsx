import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Container from "../../components/Container"

export default function StationPage() {
  // TODO: Get all information and display it well
  const router = useRouter()
  const { id } = router.query

  

  const [stationData, setStationData] = useState({})

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
      Hello world! Station id: {id}
      {
        stationData ?
        <div>

        </div>
        :
        <div>Loading station data...</div>
      }
    </Container>
  )
}
