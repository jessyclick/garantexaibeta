"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeaderWrapper from '../headerWrapper';

const team = [
  { name: 'Вадим Тихонов', role: 'CEO, стратегия и архитектура.' },
  { name: 'Сева', role: 'Ассистент и редактор.' },
  { name: 'Екатерина', role: 'Главный технический специалист (реализация сложных сценариев).' },
  { name: 'Владимир Афанасьев', role: 'Нейро-дизайнер (визуальная упаковка).' },
  { name: 'Александр', role: 'Программист, разработчик, вайб-кодер' },
  { name: 'Дмитрий', role: 'Маркетолог, чат-боты, ии-ассистенты продавцы' },
  { name: 'Семен', role: 'Работа с видео и монтажом.' },
  { name: 'Алиса', role: 'Работа с креативами.' },
];

const Team = () => {
  return (
    <section className="py-[60px] pb-[40px] text-white rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.25)] my-[40px] overflow-hidden font-ubuntu">
      <HeaderWrapper
        href=""
        withBr={false}
        kicker="#Люди за алгоритмами"
        title="Команда"
        titleAccent="Garantex AI"
      />
      
      <p className="mb-[32px] text-white text-center text-[20.4px] font-normal leading-[21.5px]">
        За каждым успешным кейсом стоят конкретные люди, <span className="text-[#ffb300] font-semibold">фанаты своего дела</span>:
      </p>

      <div className="w-full flex flex-col items-center relative px-4 max-w-[1300px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          // Стили для пагинации Swiper (точки)
          className="w-full pb-12 [&_.swiper-pagination-bullet]:bg-[#ffb300] [&_.swiper-button-next]:text-[#ffb300] [&_.swiper-button-prev]:text-[#ffb300]"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index} className="h-full min-h-[stretch]">
              <div 
                className="h-full min-h-[180px] min-w-[220px] p-[28px_20px_20px_20px] rounded-[18px] flex flex-col justify-between items-start shadow-[0_2px_12px_rgba(0,0,0,0.18)] transition-all duration-200  hover:shadow-[0_8px_32px_rgba(255,179,0,0.12)] hover:z-10 border border-transparent"
                style={{
                  backgroundImage: 'linear-gradient(#0F0C09, #0F0C09), linear-gradient(124.35deg, #fe7905 3.69%, #2a0c00 45.84%, #a93301 98.89%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                <div className="w-full h-[260px] bg-gray-800 rounded-[12px] mb-[24px]">

              </div>
                <h3 className="text-[#FFB662] text-[25px] font-bold leading-[21.5px] mb-[8px] text-left tracking-[0.01em] w-full">
                  {member.name}
                </h3>
                <p className="text-white text-[20.4px] font-normal leading-[21.5px]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;