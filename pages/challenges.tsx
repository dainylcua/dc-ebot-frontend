import Container from "../components/Container"

export default function Challenges() {
  return (
    <Container>
      <h2 className="text-4xl font-bold">Challenges:</h2>
      <ul className="m-8 list-disc text-start">
        <li>Long query times (solved by making the .csv file parse into a global variable)</li>
        <li>Unable to utilize static site generation and server-side rendering to improve performance due to loading from a .csv file instead of a Headless CMS/database</li>
      </ul>
    </Container>
  )
}
