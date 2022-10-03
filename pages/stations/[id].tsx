import { useRouter } from "next/router"
import Container from "../../components/Container"

export default function StationPage() {
  // TODO: Get all information and display it well
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      Hello world! Station id: {id}
    </Container>
  )
}
