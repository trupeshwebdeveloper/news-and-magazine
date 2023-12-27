import { SwiperSlide } from "swiper/react";
import { Container, PostCard, SwiperSilder, Title } from "../";

export const CardSwiper = ({
  slidesPerView,
  spaceBetween,
  navigation,
  CardSwiperContent,
  subContent,
  isVertical,
  SectionTitle,
}) => {
  return (
    <section className="">
      <Container>
        <div>{SectionTitle && <Title>{SectionTitle}</Title>}</div>
        <SwiperSilder
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          navigation={navigation}
        >
          {CardSwiperContent &&
            CardSwiperContent.map((content, index) => (
              <SwiperSlide key={index}>
                <PostCard
                  isVertical={isVertical}
                  subContent={subContent}
                  title={content.title}
                  paragraph={content.paragraph}
                  ParentClass={content.ParentClass}
                  src={content.src}
                  rating={content.rating}
                  AvatarSrc={content.avatarSrc}
                  subContentTitle={content.subContentTitle}
                  subContentSubTitle={content.subContentSubTitle}
                />
              </SwiperSlide>
            ))}
        </SwiperSilder>
      </Container>
    </section>
  );
};
