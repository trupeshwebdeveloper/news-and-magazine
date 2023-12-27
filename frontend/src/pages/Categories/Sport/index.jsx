import { useParams } from "react-router-dom";
import { Breadcrumb, Container } from "../../../components";
export const Sport = () => {
  const { subcategories } = useParams();
  return (
    <section>
      <Container>
        <Breadcrumb NavLinkContent={subcategories} />
      </Container>
    </section>
  );
};
