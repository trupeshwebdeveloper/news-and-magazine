import { useParams } from "react-router-dom";
import { Breadcrumb, Container } from "../../components";
import { NotFound } from "../NotFound";
export const Categories = () => {
  const myArray = [
    {
      key: 1,
      name: "sport",
    },
    {
      key: 2,
      name: "sport",
    },
  ];
  const { subcategories } = useParams();

  if (subcategories == "sport") {
    return (
      <>
        <Breadcrumb NavLinkContent={subcategories} />
        <section>
          <Container>
            {myArray.map((content) => (
              <>
                <h3 key={content.key}>{content.name}</h3>
                {subcategories == content.name ? <h2>Hello</h2> : <h2>No</h2>}
              </>
            ))}
          </Container>
        </section>
      </>
    );
  } else {
    return <NotFound />;
  }
};
