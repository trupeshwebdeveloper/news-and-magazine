import { Button, Container, PostCard, Title } from "../../../components";
import { Icons } from "../../../utility";

export const NewPost = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between gap-3 items-center">
          <Title>new posts</Title>
          <Button variant="third">Show all{Icons.arrowIcon}</Button>
        </div>
        <div className="grid grid-cols-3">
          <PostCard
            isVertical
            title={"Hello"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          />
        </div>
      </Container>
    </section>
  );
};
// padding-bottom: 70%;
