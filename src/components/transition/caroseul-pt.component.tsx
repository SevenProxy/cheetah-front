import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { CardMapsPops } from './types';

const cardMaps: CardMapsPops[] = [
  {
    image: "/images/data-samp.jpg",
    name: "Datas pra SAMP",
    description: "Faço datas Para SA-MP.",
    link: "https://discord.gg/bTxUSkysqG",
    linkDescription: "Servidor Discord",
  },
  {
    image: "/images/divulgation.jpeg",
    name: "Divulgações",
    description: "Faço divulgação de redes sociais, servidores de Discord & Servidores de GTA SAMP.",
    link: "https://www.youtube.com/@TalissonSouza",
    linkDescription: "YouTube",
  },
  {
    image: "/images/discord-guild.jpeg",
    name: "Servidor de Discord",
    description: "Fazemos Servidores do Discord 100% configurado, organizado e personalizado.",
    link: "https://www.youtube.com/@TalissonSouza",
    linkDescription: "Servidor Discord",
  },
  {
    image: "/images/discord-guild.jpeg",
    name: "Bots de Discord",
    description: "F aço bots privados para seu servidor do Discord.",
    link: "https://www.youtube.com/@TalissonSouza",
    linkDescription: "Servidor Discord",
  },
];

const CaroseulTrasitionPt = (): JSX.Element => {
  return (
    <div className="lg:w-[40%] w-[80%] sm:w-[70%]">
      <section className="w-full h-[600px] md:h-full">
        <div className="relative mx-auto w-full h-full">
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

export default CaroseulTrasitionPt;
