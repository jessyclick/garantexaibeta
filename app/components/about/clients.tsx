"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Обязательные стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';

import CTAButton from '../CTAButton';
import styles from './clients.module.scss';

const clients = [
  {
    title: 'TECHSRO',
    description: 'Юридический провайдер для бизнеса. Комплексное сопровождение и вступление в СРО под ключ.',
    url: 'techsro.ru',
    image: '/assets/client-1.png',
  },
  {
    title: 'MONSTRO',
    description: 'Digital-агентство стратегического маркетинга и масштабирования брендов.',
    url: 'rk-monstro.ru',
    image: '/assets/client-2.png',
  },
  {
    title: 'ART GLÜCK',
    description: 'Онлайн-академия дизайна с фокусом на практику и коммерческий результат.',
    url: 'artgluck.ru',
    image: '/assets/client-3.png',
  },
  {
    title: 'BOBE',
    description: 'Технологическая крипто-платформа для работы с цифровыми активами.',
    url: 'bobe.app',
    image: '/assets/client-4.png',
  },
  {
    title: 'Pumpy',
    description: 'Сервис AI-крипто-агентов для автоматизированной торговли и аналитики.',
    url: 'pumpyagent.ai',
    image: '/assets/client-5.png',
  },
  {
    title: 'Duckdoc',
    description: 'Цифровой сервис медицинского страхования и управления здоровьем.',
    url: 'duckdoc.ru',
    image: '/assets/client-6.png',
  },
  {
    title: 'Flebo',
    description: 'Экспертная медицинская практика в области флебологии.',
    url: 'flebologkuzmichev.ru',
    image: '/assets/client-7.png',
  },
  {
    title: 'Mixit',
    description: 'Федеральный косметический бренд с собственным производством и R&D.',
    url: 'mixit.ru',
    image: '/assets/client-8.png',
  },
  {
    title: 'Благотворительный фонд Возрождение',
    description: 'Некоммерческий фонд, реализующий социально значимые благотворительные проекты.',
    url: 'fvozr.ru',
    image: '/assets/client-9.png',
  },
];


const Clients = () => {
  const nextBtnRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-12 pb-0 px-0 rounded-3xl relative text-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col gap-2 items-start">
            <p className="rounded-[29px] border-[1.1px] border-[#4DE7D3] bgBlueGradient shadow-[0_4.5px_27px_0_rgba(102,59,3,0.25)] p-[9px_12px_6px_12px] text-[#0E0E0E] font-['Bebas_Neue',_sans-serif] text-xl">
              Портфолио
            </p>
            <h2 className="text-4xl md:text-5xl font-['Bebas_Neue',_sans-serif]">Наши клиенты</h2>
          </div>
          
          <div 
            ref={nextBtnRef} 
            className="rounded-full bg-[linear-gradient(0deg,#4AECDC_0%,#00AC9B_100%)] shadow-[0_7px_21px_-7px_#00E0FF] h-14 w-14 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
          >
            <img src="/assets/next-arrow.svg" alt="Next" className="w-6 h-6" />
          </div>
        </div>

        {isLoaded && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{ nextEl: nextBtnRef.current }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.nextEl = nextBtnRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible mt-8"
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="grayGradient rounded-[20px] p-6 min-h-[420px] flex flex-col shadow-2xl h-full">
                  <div className="w-full h-[220px] relative rounded-b-[20px] overflow-hidden">
                    <Image src={client.image} alt={client.title} fill className="object-cover" />
                  </div>
                  <div className="mt-6 flex-1 flex flex-col">
                    <h3 className="font-['Bebas_Neue'] text-[35px] mb-2 leading-none">{client.title}</h3>
                    <p className="font-['Ubuntu'] text-[19px] leading-tight text-white/80 mb-4">{client.description}</p>
                    <a href={`https://${client.url}`} className="GradientBlack px-4 py-1 rounded-lg w-fit text-sm">
                      <span className="bg-[linear-gradient(102deg,#FF8C27,#FFC15D)] bg-clip-text text-transparent [-webkit-background-clip:text] font-bold">
                        {client.url}
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* NDA Block */}
        <div className="GradientBlack flex flex-col md:flex-row items-center gap-6 rounded-2xl p-6 md:p-8 mt-12 shadow-xl">
          <div className="flex items-center gap-4 flex-1">
            <Image src="/assets/icon_lock.png" alt="lock" width={32} height={32} />
            <span className="font-['Ubuntu'] text-lg md:text-xl leading-snug">
              Многие клиенты предпочитают оставаться за кадром — мы уважаем <b className="text-[#ffb84d]">NDA</b> и обеспечиваем полную конфиденциальность.
            </span>
          </div>
          <CTAButton href="#">Бесплатный демо-тест</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Clients;