import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Prueba() {
  return (
    <section>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] bg-orange-comfisa">Slide 1</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
