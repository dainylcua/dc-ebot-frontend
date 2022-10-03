import Container from "../../components/Container"
import { useEffect, useState, useMemo } from "react";

const getData = async () => {
  const res = await fetch(`http://localhost:3001/stations`)
  const data = await res.json();
  return data
}

export default function Home() {
  // TODO: Add information and improve layout

  const [stations, setStations] = useState([]);

  useEffect(() => {
      getData().then((stations) => {
        console.log(stations)
        setStations(stations)
      })
  }, [])
  
  return (
    <Container>
      Brief intro about the plant, location, information, etc.
    </Container>
  )
}
