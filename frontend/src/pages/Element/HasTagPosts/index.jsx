import { SwiperSlide } from "swiper/react";
import { Container, HasTag, SwiperSilder } from "../../../components";
import { mainHasTag } from "../../../utility";

export const HasTagPosts = () => {
  return (
    <section className="HasTag-wrapper section-mb">
      <Container>
        <div className="bg-gray rounded-xl p-[10px] relative">
          <div className="overflow-auto no-scroll flex gap-6 flex-nowrap">
            <SwiperSilder slidesPerView={8} spaceBetween={20} navigation={true}>
              {mainHasTag.map((content, index) => (
                <SwiperSlide key={index}>
                  <HasTag
                    Image={content.image}
                    toLink={`categories/${content.children}`}
                    className="w-[170px] relative flex flex-grow-0 flex-shrink-0 capitalize"
                  >
                    #{content.children}
                  </HasTag>
                </SwiperSlide>
              ))}
            </SwiperSilder>
          </div>
        </div>
      </Container>
    </section>
  );
};
