import Container from "../components/Container"
import { elementParameters, mFlagParameters, sFlagParameters, qFlagParameters } from "../data/parameters"

export default function Parameters() {
  return (
    <Container>
      <h2 className="mb-8 text-4xl font-bold">Data Parameters</h2>
      <div>
        <h3 className="text-3xl font-semibold">Element Parameters:</h3>
        <ul className="my-10 list-disc text-start">
          {
            Object.keys(elementParameters).map((element) => (
              <li key={element}>{element} ({elementParameters[element][2] != 1 ? `${elementParameters[element][2]} ` : "" }{elementParameters[element][0]}): {elementParameters[element][1]} </li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">mFlag Parameters:</h3>
        <ul className="my-10 list-disc text-start">
          {
            Object.keys(mFlagParameters).map((element) => (
              <li key={element}>{element ? element: "none"}: {mFlagParameters[element]}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">qFlag Parameters:</h3>
        <ul className="my-10 list-disc text-start">
          {
            Object.keys(qFlagParameters).map((element) => (
              <li key={element}>{element ? element: "none"}: {qFlagParameters[element]}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">sFlag Parameters:</h3>
        <ul className="my-10 list-disc text-start">
          {
            Object.keys(sFlagParameters).map((element) => (
              <li key={element}>{element ? element: "none"}: {sFlagParameters[element]}</li>
            ))
          }
        </ul>
      </div>

    </Container>
  )
}
