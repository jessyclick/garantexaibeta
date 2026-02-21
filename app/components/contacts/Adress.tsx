"use client";
import React from "react";
import dynamic from "next/dynamic";

// Динамически импортируем карту, чтобы она не ломала Next.js при сборке
const MapCustom = dynamic(() => import("../map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-white/50">
      Загрузка карты...
    </div>
  ),
});

export default function Adress() {
  return (
    <section className="my-[24px] px-5">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-[28px] items-stretch">
        
        {/* Левая карточка (Контакты) */}
        <div className="w-full lg:w-[420px] min-h-[420px] p-[36px] flex flex-col text-white rounded-[20px] shadow-[inset_0_0_0_2px_rgba(255,150,0,0.06),0_0_0_1px_rgba(255,150,0,0.05)] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]">
          <h2 className="mt-[6px] mb-[28px] font-['Bebas_Neue',_sans-serif] text-[55px] font-normal leading-normal tracking-[1px] bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFC466_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            ОФИС И ВРЕМЯ РАБОТЫ
          </h2>

          <div className="flex gap-[18px] mb-[28px] items-start">
            <div className="shrink-0">
              <img
                src="/assets/icon_address.png"
                alt="location"
                className="w-[44px] h-[44px] block"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal m-0 mb-2">
                АДРЕС
              </h3>
              <p className="text-white font-['Ubuntu',_sans-serif] text-[20.402px] font-normal leading-[1.6] m-0">
                198205, Россия, Санкт-Петербург,
                <br /> ул. Партизана Германа, д. 10, корп. 1, кв. 159
              </p>
            </div>
          </div>

          <div className="flex gap-[18px] mb-[28px] items-start">
            <div className="shrink-0">
              <img
                src="/assets/icon_time1.png"
                alt="clock"
                className="w-[44px] h-[44px] block"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal m-0 mb-2">
                ВРЕМЯ РАБОТЫ
              </h3>
              <p className="text-white font-['Ubuntu',_sans-serif] text-[20.402px] font-normal leading-[1.6] m-0">
                <strong>Пн–Пт:</strong> 9:00 – 18:00 (МСК)
                <br />
                <strong>Сб–Вс:</strong> выходной
              </p>
            </div>
          </div>
        </div>

        {/* Правая карточка (Карта) */}
        <div className="flex-1 flex">
          <div className="flex-1 bg-[#e6e6e6] rounded-[24px] flex items-center justify-center text-[#222] text-[14px] min-h-[240px] lg:min-h-[420px] overflow-hidden">
            {/* Отрисовываем нашу карту вместо текста */}
            <MapCustom />
          </div>
        </div>

      </div>
    </section>
  );
}