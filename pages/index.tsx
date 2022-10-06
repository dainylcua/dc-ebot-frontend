import Container from "../components/Container"
import Head from "next/head"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Landing Page</title>
      </Head>
      <h2 className="text-4xl font-bold">Welcome to the NOAA Station Data Lookup App, by Dainyl Cua</h2>
      <div className="m-8">
        <p>Click the Stations item in the menu bar to look at the main application.</p>
        <p>Click the Parameters item in the menu bar to look at the parameter information for the data.</p>
      </div>
    </Container>
  )
}
