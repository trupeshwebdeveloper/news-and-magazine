import { CardSwiper } from "../../../components";
import { NewPostData } from "../../../utility";

export const TrendyPosts = () => {
  return (
    <CardSwiper
      SectionTitle={"popular posts"}
      CardSwiperContent={NewPostData}
      slidesPerView={4}
      spaceBetween={24}
      isVertical
      subContent
    />
  );
};
