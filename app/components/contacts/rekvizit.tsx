"use client";

import React, { useState } from "react";

const Rekvizit: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-6">
      {/* Встроенный стиль для анимации раскрытия */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInRekv {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInRekv {
          animation: fadeInRekv 0.3s ease forwards;
        }
      `,
        }}
      />

      <div className="border border-transparent rounded-[24px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] max-w-[1300px] mx-auto text-white overflow-hidden">
        
        {/* Header */}
        <div
          className="flex items-center justify-between bg-[#18120d] p-[24px_20px_16px_20px] sm:p-[32px_32px_16px_32px] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="font-['Bebas_Neue',_sans-serif] text-[32px] sm:text-[55px] font-normal leading-normal bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent tracking-[1px] m-0">
            РЕКВИЗИТЫ КОМПАНИИ
          </span>
          <button
            className="shrink-0 ml-4 bg-[linear-gradient(128deg,#FF9C1C_35.08%,#FFCB78_92.5%,#FF9C1C_111.8%)] border-none rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-[#ffb84d]"
            aria-label="Показать/скрыть реквизиты"
          >
            <span
              className={`inline-block w-[24px] h-[24px] mt-[4px] transition-transform duration-300 ${
                open ? "-rotate-180" : "rotate-0"
              }`}
            >
              <img
                src="/assets/icon_plus.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
          </button>
        </div>

        {/* Content */}
        {open && (
          <div className="flex flex-wrap gap-[32px] p-[0_20px_24px_20px] sm:p-[0_32px_32px_32px] bg-[#18120d] border-t-[2px] border-[#ff9900] relative animate-fadeInRekv">
            <img
              className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover opacity-50 sm:opacity-100"
              src="/assets/rekv.png"
              alt=""
            />

            <div className="flex-[1_1_320px] min-w-[280px] mt-[24px] relative z-10">
              <h3 className="text-[1.2rem] font-bold mb-[12px] text-white tracking-[0.5px]">
                ОСНОВНАЯ ИНФОРМАЦИЯ:
              </h3>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>НАЗВАНИЕ:</b>
                <br />
                Индивидуальный предприниматель
                <br />
                Афанасьев Владимир Алексеевич
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>ЮРИДИЧЕСКИЙ АДРЕС:</b>
                <br />
                198205, Россия, Санкт-Петербург,
                <br />
                ул. Партизана Германа, д. 10, корп. 1, кв. 159
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>ИНН:</b>
                <br />
                780732984377
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>ОГРНИП:</b>
                <br />
                323784700302365
              </div>
            </div>

            <div className="flex-[1_1_320px] min-w-[280px] mt-[24px] relative z-10">
              <h3 className="text-[1.2rem] font-bold mb-[12px] text-white tracking-[0.5px]">
                БАНКОВСКИЕ РЕКВИЗИТЫ
              </h3>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>РАСЧЕТНЫЙ СЧЕТ:</b>
                <br />
                40802810800008118744
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>БАНК:</b>
                <br />
                АО «ТБанк»
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>БИК:</b>
                <br />
                044525974
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>КОРР. СЧЕТ:</b>
                <br />
                30101810145250000974
              </div>
              <div className="mb-[16px] text-[1rem] leading-[1.5]">
                <b>АДРЕС БАНКА:</b>
                <br />
                127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26
              </div>
            </div>

            <div className="w-full flex justify-center sm:justify-end items-center mt-[24px] relative z-10">
              <a
                href="#"
                className="inline-block bg-[linear-gradient(106deg,#FF9C1C_5.27%,#FFCB78_22.82%,#FF9C1C_75.97%,#FFCB78_93.14%,#FF9C1C_108.83%)] text-[#0E0807] text-center font-['Ubuntu',_sans-serif] text-[18px] sm:text-[22.055px] font-medium leading-[1.5] tracking-[-0.243px] border-none rounded-[24px] p-[14px_32px] no-underline shadow-[0_2px_8px_#ff990055] transition-all duration-200 hover:bg-[linear-gradient(90deg,#ffb84d_0%,#ff9900_100%)] hover:text-white"
              >
                Скачать реквизиты (PDF)
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rekvizit;