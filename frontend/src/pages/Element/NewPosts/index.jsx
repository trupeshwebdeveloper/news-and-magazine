import { Link, useNavigate } from "react-router-dom";
import { Button, Container, PostCard, Title } from "../../../components";
import { Icons, NewPostData } from "../../../utility";

export const NewPost = () => {
  const navigate = useNavigate();
  return (
    <section className="section-mb">
      <Container>
        <div className="flex justify-between gap-3 mb-7 items-center">
          <Title className="mb-0">new posts</Title>
          <Button variant="third" handleChange={() => navigate("/")}>
            Show all{Icons.arrowIcon}
          </Button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-6">
          {NewPostData.map((content) => (
            <Link key={content.key} className="flex">
              <PostCard
                subContent
                src={content.src}
                AvatarSrc={content.avatarSrc}
                title={content.title}
                paragraph={content.paragraph}
                subContentTitle={content.subContentTitle}
                subContentSubTitle={content.subContentSubTitle}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
// padding-bottom: 70%;
