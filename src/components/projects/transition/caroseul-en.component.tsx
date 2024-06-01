import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
} from 'swiper/modules';
import { CardMapsPops } from './types';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { DISCORD, YOUTUBE } from '@/env/cheetah-links';

const cardMaps: CardMapsPops[] = [
  {
    image: "/images/data-samp.jpg",
    name: "Dates for SAMP",
    description: "I create dates for SA-MP.",
    link: DISCORD,
    linkDescription: "Discord Server",
  },
  {
    image: "/images/divulgation.jpeg",
    name: "Promotions",
    description: "I promote social networks, Discord servers & GTA SAMP servers.",
    link: YOUTUBE,
    linkDescription: "YouTube",
  },
  {
    image: "/images/discord-guild.jpeg",
    name: "Discord Server",
    description: "We create 100% configured, organized, and personalized Discord servers.",
    link: DISCORD,
    linkDescription: "Discord Server",
  },
  {
    image: "/images/discord-guild.jpeg",
    name: "Discord Bots",
    description: "I create private bots for your Discord server.",
    link: DISCORD,
    linkDescription: "Discord Server",
  },
];


const CaroseulTrasitionEn = (): JSX.Element => {
  return (
    <div className="lg:w-[40%] w-[80%] sm:w-[70%]">
      <section className="w-full h-full">
        <div className="relative mx-auto w-full m-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
            watchSlidesProgress
            spaceBetween={500}
            slidesPerView={1}
            effect={"cards"}
          >
            {cardMaps.map((card: CardMapsPops) => (
              <SwiperSlide key={card.name}>
                <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                  <div className="max-h-[50%] h-[50%] w-full">
                    <Image
                      className="w-full h-full rounded-tl-md rounded-tr-md"
                      width={1000}
                      height={1000}
                      src={card.image}
                      alt="data samp"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                    <div>
                      <h3>{card.name}</h3>
                      <p>{card.description}</p>
                    </div>
                    <div>
                      <a href={card.link} className="border-b border-b-[#7289da] pb-2">
                        {card.linkDescription}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CaroseulTrasitionEn;
