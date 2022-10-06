import React from "react"
import InfiniteScroll from "react-infinite-scroller"
export const InfiniteShower = ({loadMore, hasMore, showItems, filteredStationIds, query}) => {
  return(
  <React.Fragment key={query}>
    <InfiniteScroll
      pageStart = {0}
      loadMore = {loadMore}
      hasMore = {hasMore}
      loader = {<div key={0}>Loading more station IDs...</div>}
    >
      {showItems(filteredStationIds)}
    </InfiniteScroll>
  </React.Fragment>
  )
}