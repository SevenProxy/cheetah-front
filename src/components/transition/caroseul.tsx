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

const CaroseulTrasition = (): JSX.Element => {
  return (
    <div className="lg:w-[40%] w-[80%]">
      <section className="w-full h-full">
        <div className="relative mx-auto w-full m-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
            watchSlidesProgress
            spaceBetween={500}
            slidesPerView={1}
            effect={"cards"}
          >
            <SwiperSlide>
              <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                <div className="max-h-[50%] h-[50%] w-full">
                  <Image className="w-full h-full rounded-tl-md rounded-tr-md" width={1000} height={1000} src="/images/data-samp.jpg" alt="data samp"/>
                </div>
                <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                  <div>
                    <h3>Datas para SAMP</h3>
                    <p>Faço datas Para SA-MP.</p>
                  </div>
                  <div>
                    <a href="#" className="border-b border-b-[#7289da] pb-2">Servidor do Discord</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                <div className="max-h-[50%] h-[50%] w-full">
                  <Image className="w-full h-full rounded-tl-md rounded-tr-md" width={1000} height={1000} src="/images/data-samp.jpg" alt="data samp"/>
                </div>
                <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                  <div>
                    <h3>Datas para SAMP</h3>
                    <p>Faço datas Para SA-MP.</p>
                  </div>
                  <div>
                    <a href="#" className="border-b border-b-[#7289da] pb-2">Servidor do Discord</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                <div className="max-h-[50%] h-[50%] w-full">
                  <Image className="w-full h-full rounded-tl-md rounded-tr-md" width={1000} height={1000} src="/images/data-samp.jpg" alt="data samp"/>
                </div>
                <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                  <div>
                    <h3>Datas para SAMP</h3>
                    <p>Faço datas Para SA-MP.</p>
                  </div>
                  <div>
                    <a href="#" className="border-b border-b-[#7289da] pb-2">Servidor do Discord</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                <div className="max-h-[50%] h-[50%] w-full">
                  <Image className="w-full h-full rounded-tl-md rounded-tr-md" width={1000} height={1000} src="/images/data-samp.jpg" alt="data samp"/>
                </div>
                <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                  <div>
                    <h3>Datas para SAMP</h3>
                    <p>Faço datas Para SA-MP.</p>
                  </div>
                  <div>
                    <a href="#" className="border-b border-b-[#7289da] pb-2">Servidor do Discord</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[500px] h-[500px] rounded-md w-full bg-[--secondaryColor]">
                <div className="max-h-[50%] h-[50%] w-full">
                  <Image className="w-full h-full rounded-tl-md rounded-tr-md" width={1000} height={1000} src="/images/data-samp.jpg" alt="data samp"/>
                </div>
                <div className="flex flex-col items-start justify-between py-6 px-8 text-white w-full h-[50%] rounded-bl-md rounded-br-md">
                  <div>
                    <h3>Datas para SAMP</h3>
                    <p>Faço datas Para SA-MP.</p>
                  </div>
                  <div>
                    <a href="#" className="border-b border-b-[#7289da] pb-2">Servidor do Discord</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CaroseulTrasition;
