"use client";

import { useState, useEffect } from "react";
import HeaderWrapper from "../headerWrapper";
import CTAButton from "../CTAButton"; // Если используется, оставьте

// Импорты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  id?: string;
};

export default function WhySiteDesignSection({ id }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    // КАРТОЧКА 1
    <article 
      className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-[50px] items-center rounded-[14px] relative overflow-hidden max-[640px]:flex max-[640px]:flex-col" 
      key="card-1"
    >
      <div className="flex-auto py-[25px] px-[40px] max-[640px]:py-[50px] max-[640px]:px-[20px] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[20px] h-full flex flex-col justify-center items-start max-[640px]:items-center">
        <p className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent font-['Bebas_Neue'] font-bold text-[24px] leading-none mb-[18px] max-[640px]:text-[18px]">
          Этап 1
        </p>
        <h3 className="mb-[6px] text-white font-['Bebas_Neue'] text-[37px] leading-[38px] max-[640px]:text-[24px]">
          Отправляете текст или голосовое нам или в Telegram-бот 
        </h3>
        {/* Мобильная картинка */}
        <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mix-blend-overlay max-[880px]:h-auto max-[880px]:order-4 block md:hidden">
          <img src="/assets/cam-1.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
      {/* Десктопная картинка */}
      <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mix-blend-overlay max-[880px]:h-auto max-[880px]:order-4 hidden md:block">
        <img src="/assets/cam-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>
    </article>,

    // КАРТОЧКА 2
    <article 
      className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-[50px] items-center rounded-[14px] relative overflow-hidden max-[640px]:flex max-[640px]:flex-col" 
      key="card-2"
    >
      {/* Десктопная картинка */}
      <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mix-blend-overlay max-[880px]:h-auto max-[880px]:order-4 hidden md:block">
        <img src="/assets/cam-2.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-auto py-[25px] px-[40px] max-[640px]:py-[50px] max-[640px]:px-[20px] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[20px] h-full flex flex-col justify-center items-start max-[640px]:items-center">
        <p className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent font-['Bebas_Neue'] font-bold text-[24px] leading-none mb-[18px] max-[640px]:text-[18px]">
          Этап 2
        </p>
        <h3 className="mb-[6px] text-white font-['Bebas_Neue'] text-[37px] leading-[38px] max-[640px]:text-[24px]">
          Выбираете голос, эмоцию, скорость
        </h3>
        {/* Мобильная картинка */}
        <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mix-blend-overlay max-[880px]:h-auto max-[880px]:order-4 block md:hidden">
          <img src="/assets/cam-2.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
    </article>,

    // КАРТОЧКА 3
    <article 
      className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-[50px] items-center rounded-[14px] relative overflow-hidden max-[640px]:flex max-[640px]:flex-col" 
      key="card-3"
    >
      <div className="flex-auto py-[25px] px-[40px] max-[640px]:py-[50px] max-[640px]:px-[20px] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[20px] h-full flex flex-col justify-center items-start max-[640px]:items-center">
        <p className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent font-['Bebas_Neue'] font-bold text-[24px] leading-none mb-[18px] max-[640px]:text-[18px]">
          Этап 3
        </p>
        <h3 className="mb-[6px] text-white font-['Bebas_Neue'] text-[37px] leading-[38px] max-[640px]:text-[24px]">
          ИИ очищает звук, моделирует тембр и синтезирует речь
        </h3>
        {/* Мобильная картинка */}
        <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)]  max-[880px]:h-auto max-[880px]:order-4 block md:hidden">
          <img src="/assets/cam-3.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
      {/* Десктопная картинка */}
      <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] max-[880px]:h-auto max-[880px]:order-4 hidden md:block">
        <img src="/assets/cam-3.jpg" alt="" className="w-full h-full object-cover" />
      </div>
    </article>,

    // КАРТОЧКА 4
    <article 
      className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-[50px] items-center rounded-[14px] relative overflow-hidden max-[640px]:flex max-[640px]:flex-col" 
      key="card-4"
    >
      {/* Десктопная картинка */}
      <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)]  max-[880px]:h-auto max-[880px]:order-4 hidden md:block">
        <img src="/assets/cam-4.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-auto py-[25px] px-[40px] max-[640px]:py-[50px] max-[640px]:px-[20px] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[20px] h-full flex flex-col justify-center items-start max-[640px]:items-center">
        <p className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent font-['Bebas_Neue'] font-bold text-[24px] leading-none mb-[18px] max-[640px]:text-[18px]">
          Этап 4
        </p>
        <h3 className="mb-[6px] text-white font-['Bebas_Neue'] text-[37px] leading-[38px] max-[640px]:text-[24px]">
          Получаете готовый файл через минуту
        </h3>
        {/* Мобильная картинка */}
        <div className="w-full h-full rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)]  max-[880px]:h-auto max-[880px]:order-4 block md:hidden">
          <img src="/assets/cam-4.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
    </article>
  ];

  if (!isMounted) {
    return (
      <section id={id} className="py-[72px] px-[20px] max-md:py-[48px] max-md:px-0 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[50px] mt-[36px]">{cards}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-[72px] px-[20px] max-md:py-[48px] max-md:px-0 text-white">
      <div className="max-w-[1200px] mx-auto">
        <HeaderWrapper
          kicker={<span>#Как это работает?</span>}
          title={<span> От текста до MP3 — </span>}
          titleAccent={<span className="text-white">всего за 60 секунд</span>}
          align="center"
          withBr={false}
        />

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="mt-[36px]"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={`slide-${index}`}>
                {card}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-col gap-[50px] mt-[36px]">
            {cards}
          </div>
        )}
      </div>
    </section>
  );
}