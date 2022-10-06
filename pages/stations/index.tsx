import Container from "../../components/Container"
import React, { useEffect, useState, useCallback } from "react"
import { DebounceInput } from "react-debounce-input"
import { InfiniteShower } from "../../components/InfiniteShower"

export default function Stations() {
  // TODO: Improve layout
  // TODO: Complete filterStations function
  const getData = async () => {
    const res = await fetch(`http://localhost:3001/stations`)
    const data = await res.json();
    return data
  }

  const [stationIds, setStationIds] = useState<string[]>([])
  const [filteredStationIds, setFilteredStationIds] = useState<string[]>([])
  const [query, setQuery] = useState("")
  const [activeIds, setActiveIds] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const itemCount = 50;

  const showItems = useCallback((stationIds: string[]) => {
    let items = []
    let lowerNumber = activeIds > stationIds.length ? stationIds.length : activeIds
    if(lowerNumber == stationIds.length) {
      setHasMore(false)
      setActiveIds(itemCount)
    } else {
      setHasMore(true)
    }
    for(let i=0; i<lowerNumber; i++) {
      items.push(
        <div key={stationIds[i]}>
          Id: {stationIds[i]}
        </div>
      )
    }
    if(items.length) return items
    return ["Nothing to show"]
  }, [activeIds])

  const loadMore = () => {
    setTimeout(() => {
      setActiveIds(activeIds + itemCount)
    }, 2000)
  }

  const debounceHandler = (q) => {
    if(q !== "") {
      setQuery("")
      setQuery(q)
      setFilteredStationIds(stationIds.filter((
        id => id.toLowerCase().includes(q.toLowerCase())
      )
      ))
    }
  }

  useEffect(() => {
      getData()
        .then((data) => {
          setStationIds(data.stations)
          setFilteredStationIds(data.stations)
        })
  }, [])

  return (
    <Container>
      <h1 className="pb-8 text-4xl font-bold text-center">NOAA Station Data Lookup</h1>
      <DebounceInput 
        type="text" 
        placeholder="Type part of a station ID. Hit Enter."
        onChange={(e) => debounceHandler(e.target.value)}
        className="h-8 pl-2 my-8 border border-gray-300 rounded w-72 active:bg-zinc-300 hover:bg-zinc-100 focus:ring-3 focus:ring-blue-300"
        debounceTimeout={-1}
      />
      {
        stationIds ?
          query ? 
            <InfiniteShower loadMore={loadMore} hasMore={hasMore} showItems={showItems} filteredStationIds={filteredStationIds} query={query} />
          :
          <>
            <div>
              Data loaded! If not all stations are available, please shut off the frontend server and wait for the backend server to parse the .csv file.
            </div>
            <div className="p-8">
              Be sure to hit enter after entering the station ID.
            </div>
          </>
        :
        <div>
          Loading data from server...
        </div>
      }
    </Container>
  )
}
