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

const Partner = () => (
  <section className="pt-[64px] pb-[80px] text-white">
    <HeaderWrapper
      href=""
      withBr={false}
      kicker="#Философия нашей работы"
      title="Как мы строим "
      titleAccent="партнерство"
    />
    <div className="flex flex-col gap-[40px] max-w-[1200px] mx-auto max-[900px]:gap-[24px]">
      
      {/* Карточка 01 */}
      <div className={`rounded-[18px] p-[32px] relative flex flex-row items-start gap-[32px] max-[900px]:flex-col max-[900px]:gap-[16px] max-[900px]:p-[20px_12px] ${cardBg}`}>
        <div className={`text-[32px] font-bold text-[#ffb02e] mr-[32px] min-w-[60px] text-center w-[72px] h-[72px] flex items-center justify-center rounded-[8px] max-[900px]:mr-0 max-[900px]:mb-[8px] ${cardBg}`}>
          01
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[64px] max-[900px]:grid-cols-1 max-[900px]:gap-[32px]">
          <div>
            <h3 className="text-white font-['Bebas_Neue'] text-[35px] mb-[8px]">КАЧЕСТВО ВАЖНЕЕ КОЛИЧЕСТВА</h3>
            <p className="text-white font-['Ubuntu'] text-[20.402px] font-normal leading-[21.476px]">
              Мы не работаем по принципу конвейера. Для нас важен каждый заказ, и мы подходим к нему с максимальной вовлечённостью и трепетом. Мы сознательно не набираем десятки проектов одновременно, чтобы сохранить фокус.
            </p>
          </div>
          <div>
            <h3 className="text-white font-['Bebas_Neue'] text-[35px] mb-[8px]">ГЛУБОКОЕ ПОГРУЖЕНИЕ</h3>
            <p className="text-white font-['Ubuntu'] text-[20.402px] font-normal leading-[21.476px]">
              Мы не используем шаблонные решения. Мы изучаем ваш бизнес изнутри, разбираем процессы на атомы и предлагаем архитектуру, которая нужна именно вам, как если бы строили её для себя.
            </p>
          </div>
        </div>
      </div>

      {/* Карточка 02 */}
      <div className={`rounded-[18px] p-[32px] relative flex flex-row items-start gap-[32px] max-[900px]:flex-col max-[900px]:gap-[16px] max-[900px]:p-[20px_12px] ${cardBg}`}>
        <div className={`text-[32px] font-bold text-[#ffb02e] mr-[32px] min-w-[60px] text-center w-[72px] h-[72px] flex items-center justify-center rounded-[8px] max-[900px]:mr-0 max-[900px]:mb-[8px] ${cardBg}`}>
          02
        </div>
        <div className="flex-1 flex flex-col gap-[16px]">
          <h3 className="text-white font-['Bebas_Neue'] text-[35px] mb-[8px]">ЗАКРЫВАЕМ ЗАДАЧИ «ПОД КЛЮЧ»</h3>
          <p className="max-w-[600px] text-white font-['Ubuntu'] text-[20.402px] font-normal leading-[21.476px]">
            Мы строим агентство, с которым вам больше не придётся искать других подрядчиков, дизайнеров или программистов. Обратившись в Garantex AI, вы получаете полноценный технический департамент на аутсорсе.
          </p>
        </div>
      </div>

      

      {/* Карточка 03 */}
      <div className={`rounded-[18px] p-[32px] relative flex flex-row items-start gap-[32px] max-[900px]:flex-col max-[900px]:gap-[16px] max-[900px]:p-[20px_12px] ${cardBg}`}>
        <div className={`text-[32px] font-bold text-[#ffb02e] mr-[32px] min-w-[60px] text-center w-[72px] h-[72px] flex items-center justify-center rounded-[8px] max-[900px]:mr-0 max-[900px]:mb-[8px] ${cardBg}`}>
          03
        </div>
        <div className="flex-1 flex flex-col gap-[16px]">
          <h3 className="text-white font-['Bebas_Neue'] text-[35px] mb-[8px]">АБСОЛЮТНАЯ ПРОЗРАЧНОСТЬ</h3>
          <p className="text-white font-['Ubuntu'] text-[20.402px] font-normal leading-[21.476px]">
            Вы всегда видите процесс работы. Никаких «чёрных ящиков» — вы понимаете, за что платите, на каком этапе находится проект и как именно алгоритмы приносят вам пользу.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default Partner;