import Container from "../../components/Container"
import { useEffect, useState, useCallback } from "react"
import InfiniteScroll from "react-infinite-scroller"

export default function Stations() {
  // TODO: Improve layout
  const getData = async () => {
    const res = await fetch(`http://localhost:3001/stations`)
    const data = await res.json();
    return data
  }

  const [stationIds, setStationIds] = useState<number[]>([])
  const [filteredStationIds, setFilteredStationIds] = useState<number[]>([])
  const [activeIds, setActiveIds] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const itemCount = 50;

  const showItems = useCallback((stationIds: number[]) => {
    let items = []
    for(let i=0; i<activeIds; i++) {
      items.push(
        <div key={stationIds[i]}>
          Id: {stationIds[i]}
        </div>
      )
    }
    return items
  }, [activeIds])

  const loadMore = () => {
    if (activeIds >= stationIds.length) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        setActiveIds(activeIds + itemCount)
      }, 2000)
    }
  }

  useEffect(() => {
      getData().then((data) => {
        setStationIds(data.stations)
      })
  }, [])

  return (
    <Container>
      Brief intro about the plant, location, information, etc.
      {
        stationIds.length ? 
      <InfiniteScroll
        pageStart = {0}
        loadMore = {loadMore}
        hasMore = {hasMore}
        loader = {<div>Loading more station IDs...</div>}
      >
        {showItems(stationIds)}
      </InfiniteScroll>
        :
      <div>
        Loading data from server
      </div>
      }
    </Container>
  )
}
