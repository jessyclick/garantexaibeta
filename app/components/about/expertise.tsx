import React from 'react';
import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';

const expertiseData = [
  {
    icon: '/assets/icon_ab-1.png',
    title: 'СПИКЕРСТВО',
    description: 'Мы регулярно представляем индустрию на профильных конференциях (офлайн и онлайн). Делимся не сухой теорией, а реальными кейсами, которые наша команда реализует «в полях».',
    button: null,
  },
  {
    icon: '/assets/icon_ab-2.png',
    title: 'YOUTUBE И МЕДИА',
    description: 'Мы создаем качественный образовательный контент. Снимаем обзоры инструментов и обучающие ролики, чтобы вы могли бесплатно повышать свою квалификацию.',
    button: null,
  },
  {
    icon: '/assets/icon_ab-3.png',
    title: 'ПАРТНЕРЫ НАЦПРОЕКТА «МОЙ БИЗНЕС»',
    description: 'Мы помогаем предпринимателям переходить на «цифровые рельсы» на федеральном уровне. Команда Garantex AI подготавливала методические материалы для государственных образовательных программ.',
    button: 'Подробнее',
  },
  {
    icon: '/assets/icon_ab-4.png',
    title: 'ОБУЧЕНИЕ',
    description: 'Мы разработали техническую систему и контент для трехдневного интенсива по нейросетям для новичков, где выступили в роли ведущих экспертов, проведя участников от теории к результату.',
    button: 'Подробнее',
  },
];

const Expertise = () => (
  <section className="rounded-[24px] py-[40px] px-[24px] my-[32px] text-white shadow-[0_0_24px_#000a]">
    <div className="max-w-[1300px] mx-auto">
      <HeaderWrapper
        href=""
        withBr={false}
        kicker="#Экспертиза"
        title="Мы формируем стандарты "
        titleAccent="рынка ИИ "
      />
      
      <div className="text-center mt-[16px] mb-[32px] text-white font-['Ubuntu'] text-[20.402px] font-normal leading-[21.476px]">
        <span className="text-[#ffb84d] font-bold">Garantex AI</span> — это не “ноунейм” разработчики-фрилансеры. Мы — публичные эксперты, которые формируют культуру использования ИИ в бизнесе. Наша цель — создать среду, где доступ к сложным знаниям становится <span className="text-[#ffb84d] font-bold">простым и понятным</span>.
      </div>
      
      {/* Примечание: В исходном SCSS не было медиазапросов, поэтому здесь строго grid-cols-2 */}
      <div className="grid grid-cols-2 gap-[32px] justify-center">
        {expertiseData.map((item, idx) => (
          <div 
            className="bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[16px] p-[24px] flex flex-col items-start shadow-[0_0_12px_#ffb84d22] min-h-[260px]" 
            key={idx}
          >
            <div className="flex items-center gap-4">
              <Image 
                src={item.icon} 
                alt={item.title} 
                width={40} 
                height={40} 
                className="drop-shadow-[0_0_8px_#ffb84d88]"
              />
              <h3 className="pt-[3px] text-white font-['Bebas_Neue'] text-[35px]">{item.title}</h3>
            </div>
          
            <p className="text-white font-['Ubuntu'] text-[19px] font-normal leading-[22.004px] mt-[32px] mb-[16px]">
              {item.description}
            </p>
            
            {item.button && (
              <button className="bg-transparent text-[#181818] border-[0.757px] border-[#FF8C27] rounded-[8px] py-[8px] px-[20px] text-[1rem] cursor-pointer mt-auto transition-colors duration-200">
                <p className="text-center font-['Ubuntu'] text-[18.437px] font-normal leading-[1.5] tracking-[-0.203px] bg-[linear-gradient(102deg,#FF8C27_3.95%,#FFC15D_18.11%,#FF8C27_31.33%,#FFC15D_47.04%,#FF8C27_61.02%,#FFC15D_74.88%,#FF8C27_87.55%)] bg-clip-text text-transparent m-0">
                  {item.button}
                </p> 
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;