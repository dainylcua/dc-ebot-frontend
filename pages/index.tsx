import Container from "../components/Container"

export default function Home() {
  return (
    <Container>
      <h2 className="text-4xl font-bold">Welcome to the NOAA Station Data Lookup App, by Dainyl Cua</h2>
      <div className="m-8">
        <p>Click the Stations item in the menu bar to look at the main application.</p>
        <p>Click the Notes item in the menu bar to look at the challenges I encountered while developing this application.</p>
      </div>
    </Container>
  )
}
