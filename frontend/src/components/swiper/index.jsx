import clsx from "clsx"
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation } from 'swiper/modules';


export const SwiperSilder = ({
  pagination,
  navigation,
  className,
  children,
  spaceBetween,
  slidesPerView,
  autoplay,
  centeredSlides,
  direction,
  loop,
  breakpoints,
  grabCursor,
  ...rest
}) => {
  return (
    <Swiper
      pagination={pagination}
      navigation={navigation}
      modules={[Navigation]}
      spaceBetween={spaceBetween}
      className={clsx(className, 'mySwiper')}
      slidesPerView={slidesPerView}
      autoplay={autoplay}
      centeredSlides={centeredSlides}
      grabCursor={grabCursor}
      breakpoints={breakpoints}
      direction={direction}
      loop={loop}
      {...rest}
    >
      {children}
    </Swiper >
  )
}
