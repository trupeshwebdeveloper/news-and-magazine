import { Container } from "../../components"

export const NotFound = () => {
  return (
    <section>
      <Container>
        <h1 className="text-[192px] text-center text-secondary my-8 drop-shadow-[0px_0px_44px_rgba(252,_67,_8,_0.35)] font-medium">404</h1>
        <h5 className="text-center">OOPS! Page you're looking for doesn't exist. Please use search for help</h5>
      </Container>
    </section>
  )
}
