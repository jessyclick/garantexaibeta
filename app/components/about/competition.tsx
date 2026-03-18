import React from 'react';
import HeaderWrapper from '../headerWrapper';

// Icon paths (update with actual asset paths)
const icons = {
  quality: '/assets/icons/quality.svg',
  immersion: '/assets/icons/immersion.svg',
  turnkey: '/assets/icons/turnkey.svg',
  visual: '/assets/icon_com1.png',
  automation: '/assets/icon_com2.png',
  dev: '/assets/icon_com3.png',
  video: '/assets/icon_com4.png',
  chatbot: '/assets/icon_com5.png',
  custom: '/assets/icons/custom.svg',
  transparency: '/assets/icons/transparency.svg',
};

// Выносим сложные двойные градиенты в константы для чистоты кода
const cardBg = "mainGradient";
const customCardBg = "bg-[linear-gradient(163deg,#001613_9.43%,#00302B_52.39%,#001613_87.36%),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent";

const Competition = () => (
  <section className="pt-[64px] pb-[80px] text-white">
    <div className="flex flex-col gap-[40px] max-w-[1200px] mx-auto max-[900px]:gap-[24px]">

      {/* Блок компетенций */}
      <div className="mt-[32px]">
        <h4 className="text-white text-center font-['Bebas_Neue'] text-[35px] leading-normal mb-[24px]">
          НАШИ КОМПЕТЕНЦИИ ЗАКРЫВАЮТ ВЕСЬ СПЕКТР ЦИФРОВЫХ ЗАДАЧ:
        </h4>
        <div className="grid grid-cols-3 gap-[24px] max-[900px]:grid-cols-1">
          
          <div className={`rounded-[14px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-start gap-[10px] min-h-[220px] ${cardBg}`}>
            <div className="flex items-center gap-2">
              <img src={icons.visual} alt="Визуал" className="min-w-[36px] w-[36px] mb-[8px]" />
              <span className="text-white font-['Bebas_Neue'] text-[29px]">РАБОТА С ВИЗУАЛОМ</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              Создание изображений, айдентики и креативов любой сложности с помощью нейросетей.
            </p>
          </div>

          <div className={`rounded-[14px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-start gap-[10px] min-h-[220px] ${cardBg}`}>
            <div className="flex items-center gap-2">
              <img src={icons.automation} alt="Автоматизация" className="min-w-[36px] w-[36px] mb-[8px]" />
              <span className="text-white font-['Bebas_Neue'] text-[29px]">СЛОЖНАЯ АВТОМАТИЗАЦИЯ</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              Внедрение автоматических сценариев любой глубины (Make, n8n, Python) для избавления от рутины.
            </p>
          </div>

          <div className={`rounded-[14px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-start gap-[10px] min-h-[220px] ${cardBg}`}>
            <div className="flex items-center gap-2">
              <img src={icons.dev} alt="Веб-разработка" className="min-w-[36px] w-[36px] mb-[8px]" />
              <span className="text-white font-['Bebas_Neue'] text-[29px]">ВАЙБ-КОДИНГ И РАЗРАБОТКА</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              Быстро создадим сайт, Telegram Mini App или онлайн-магазин, используя современные инструменты генерации и ИИ.
            </p>
          </div>

          <div className={`rounded-[14px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-start gap-[10px] min-h-[220px] ${cardBg}`}>
            <div className="flex items-center gap-2">
              <img src={icons.video} alt="Видео" className="min-w-[36px] w-[36px] mb-[8px]" />
              <span className="text-white font-['Bebas_Neue'] text-[29px]">ВИДЕО-ПРОДАКШН ПОЛНОГО ЦИКЛА</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              От рекламных роликов и видео под маркетплейсы, до мультфильмов и контента для YouTube/Reels.
            </p>
          </div>

          <div className={`rounded-[14px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-start gap-[10px] min-h-[220px] ${cardBg}`}>
            <div className="flex items-center gap-2">
              <img src={icons.chatbot} alt="Чат-боты" className="min-w-[36px] w-[36px] mb-[8px]" />
              <span className="text-white font-['Bebas_Neue'] text-[29px]">ЧАТ-БОТЫ И ИИ-АССИСТЕНТЫ</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              Умные сотрудники поддержки, продвинутые и личные цифровые помощники.
            </p>
          </div>

          <div className={`rounded-[20px] pt-[24px] px-[18px] pb-[18px] flex flex-col items-center justify-center gap-[10px] min-h-[220px] text-center ${customCardBg}`}>
            <div className="flex items-center gap-2">
              <span className="text-white font-['Bebas_Neue'] text-[29px]">НЕ НАШЛИ НУЖНОГО В СПИСКЕ?</span>
            </div>
            <p className="text-white font-['Ubuntu'] text-[17px] font-normal leading-[21.476px] m-0">
              Просто напишите нам, с чем вам требуется помощь. Если задача решаема цифровыми методами — мы её решим.
            </p>
          </div>

        </div>
      </div>

    

    </div>
  </section>
);

export default Competition;