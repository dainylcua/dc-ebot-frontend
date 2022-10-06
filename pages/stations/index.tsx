import Container from "../../components/Container"
import React, { useEffect, useState, useCallback } from "react"
import { DebounceInput } from "react-debounce-input"
import InfiniteScroll from "react-infinite-scroller"
import Link from "next/link"

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

  const showItems = useCallback((ids: string[]) => {
    let items = []
    let lowerNumber = activeIds > ids.length ? ids.length : activeIds
    for(let i=0; i<lowerNumber; i++) {
      items.push(
        <Link 
          href={`/stations/${ids[i]}`}
        >
        <div
          key={ids[i]}
          className="px-8 py-4 text-lg font-semibold transition-colors ease-in-out border rounded-md cursor-pointer hover:bg-zinc-300"
        >
            <a>{ids[i]}</a>
        </div>
          </Link>
      )
    }
    return items
  }, [activeIds])

  const loadMore = () => {
    if(activeIds > filteredStationIds.length) {
      setHasMore(false)
    } else {
      setHasMore(true)
      setTimeout(() => {
        setActiveIds(activeIds + itemCount)
      }, 2000)
    }
  }

  useEffect(() => {
      getData()
        .then((data) => {
          setStationIds(data.stations)
          setFilteredStationIds(data.stations)
        })
  }, [])

  useEffect(() => {
    let filteredStations = stationIds.filter((id)=> id.toLowerCase().includes(query.toLowerCase()))
    setFilteredStationIds(filteredStations)
  }, [query, stationIds])

  return (
    <Container>
      <h1 className="pb-8 text-4xl font-bold text-center">NOAA Station Data Lookup</h1>
      {
        stationIds.length ?
        <>
          <div>
            Data loaded! If not all stations are available, please shut off the frontend server and wait for the backend server to parse the .csv file.
          </div>
          <div className="m-4">
            Be sure to hit enter after entering the station ID.
          </div>
          
          <DebounceInput 
            type="text" 
            placeholder="Type part of a station ID. Hit Enter."
            onChange={(e) => {setQuery(e.target.value)}}
            className="h-8 pl-2 my-8 border border-gray-300 rounded w-72 active:bg-zinc-300 hover:bg-zinc-100 focus:ring-3 focus:ring-blue-300"
            debounceTimeout={-1}
            /> 
          <div className="mb-4">
            If no stations show, then the queried station ID is not in the loaded data.
          </div>
        </>
        :
        <div>
          Loading station data...
        </div>
      }
      {
        query ? 
          <>
            <InfiniteScroll
                pageStart = {0}
                loadMore = {loadMore}
                hasMore = {hasMore}
                loader = {<div key={0}>Loading more station IDs...</div>}
              >
                {showItems(filteredStationIds)}
              </InfiniteScroll>  
          </>
        :
          <div>
            Enter a query and hit enter once the data has loaded.
          </div>
      }
    </Container>
  )
}
