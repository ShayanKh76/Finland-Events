import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Conferences } from "./events.graphql";
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
      style={{ width: "85%", height: "500px" }}
    >
      {bgImages?.map((image: { src: string; alt: string }, index) => (
        <SwiperSlide
          className="justify-center"
          style={{ display: "flex !important", width: "90%" }}
          key={index}
        >
          <button
            onClick={() => navigateToAnotherPage(index)}
            className="text-left"
          >
            <div
              className="rounded-xl bg-black overflow-hidden"
              style={{ height: "500px" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                layout="responsive"
                style={{ width: "90%" }}
                className="rounded-xl opacity-30 "
              />
              <div
                className=" absolute top-1/3 text-white text-4xl"
                style={{ left: "15%" }}
              >
                <div className="p-4">
                  {conferences && conferences[index].name}
                </div>
                <div className="p-4">
                  {conferences && conferences[index].slogan}
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
