import React from 'react';
import HeaderWrapper from '../headerWrapper';
import { style } from 'motion/react-client';

const educationData = [
  {
    icon: '/assets/ed-1.png',
    title: 'РЕГУЛЯРНЫЙ НЕТВОРКИНГ',
    description: (
      <>
        Мы организуем <b>открытые онлайн-встречи</b> для общения, знакомств и обмена опытом между участниками. А так же отвечаем на ваши вопросы и наглядно демонстрируем процессы работы с ИИ инструментами
      </>
    ),
  },
  {
    icon: '/assets/ed-2.png',
    title: 'ДОСТУПНАЯ БАЗА ЗНАНИЙ',
    description: (
      <>
        Мы ведем <b>открытый архив знаний и инструментов</b> в Telegram (подробнее о нем расскажем в блоке ниже), чтобы любой мог начать погружение в тему ИИ бесплатно и продуктивно.
      </>
    ),
  },
];

const Education = () => (
  <section className="pt-[64px] pb-[32px] text-white text-center">
    <div className="max-w-[1300px] mx-auto">
      <HeaderWrapper
        href=""
        withBr={false}
        kicker="#Education"
        title="Образовательная  "
        titleAccent="деятельность"
      />
      
      <div className="mt-[16px] mx-auto mb-[40px] max-w-[700px] text-white text-center font-['Ubuntu'] text-[20.402px] font-normal leading-[1.5]">
        Мы придерживаемся принципа <b>радикальной открытости</b>.<br />
        Мы не прячем свои методы — мы делимся и транслируем эту идею{' '}
        <span className="text-[#FFA726]">в нашем комьюнити</span>.
      </div>
      
      <div className="flex flex-col items-center min-[900px]:grid min-[900px]:grid-cols-2 justify-center gap-[32px] mt-[32px] w-full">
        {educationData.map((item, idx) => (
          <div
            className="w-[90vw] min-[900px]:w-full bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[18px] shadow-[0_0_24px_0_#ffa72633] py-[32px] px-[24px] min-h-[320px] flex flex-col items-start relative text-left"
            key={idx}
          >
            <div className="flex items-center gap-4 mb-[16px]">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-[40px] h-[40px] mb-[18px] drop-shadow-[0_0_8px_#ffa72688]" 
              />
              <div className="text-white font-['Bebas_Neue'] text-[35px] flex items-center gap-[10px]">
                {item.title}
              </div>
            </div>
          
            <div className="mt-auto text-white font-['Ubuntu'] text-[19px] font-normal leading-[22.004px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;