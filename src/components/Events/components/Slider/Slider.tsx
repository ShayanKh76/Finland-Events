import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Conferences } from "../../Events.graphql";
import { useRouter } from "next/router";
export default function Slider({
  conferences,
}: {
  conferences: Conferences[];
}) {
  const router = useRouter();

  const navigateToAnotherPage = (index: number) => {
    router.push(`/event-details?eventId=${conferences[index].id}`);
  };
  const bgImages = [
    { src: "/assets/images/freezing-edge-2020.jpg", alt: "First Img" },
    { src: "/assets/images/future-frontend-2023.jpg", alt: "Second Img" },
    { src: "/assets/images/techmovienight.jpg", alt: "Third Img" },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      className="eventsSlider rounded-xl"
    >
      {bgImages?.map((image: { src: string; alt: string }, index) => (
        <SwiperSlide
          className="justify-center slides rounded-xl bg-black overflow-hidden  "
          key={index}
        >
          <button
            onClick={() => navigateToAnotherPage(index)}
            className="text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              layout="responsive"
              className="rounded-xl opacity-30 slideImage"
            />
            <div className=" absolute top-1/3 text-white text-4xl slideText">
              <div className="p-4">
                {conferences && conferences[index].name}
              </div>
              <div className="p-4">
                {conferences && conferences[index].slogan}
              </div>
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
