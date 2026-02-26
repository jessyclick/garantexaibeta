import React from 'react';
import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';

const stats = [
  {
    icon: '/assets/icon_about-1.png',
    title: 'ИЗУЧАЕМ ИИ С 2023 ГОДА',
    description: 'Начали с экспериментов, в 2024 выросли в полноценное AI-агентство, которое решает задачи “Под ключ”.',
  },
  {
    icon: '/assets/icon_about-2.png',
    title: '50+ КЕЙСОВ',
    description: 'Реализовали проекты разной сложности — от генерации креативов до построения бизнес-автоматизаций под ключ.',
  },
  {
    icon: '/assets/icon_about-3.png',
    title: '15+ НАПРАВЛЕНИЙ',
    description: 'Видео-продакшн, SEO, авто-SMM, CRM-интеграции, Чат-боты, ИИ-Ассистенты, ИИ-Аватары, Озвучка, Перевод видео.',
  },
  {
    icon: '/assets/icon_about-4.png',
    title: '8 ЭКСПЕРТОВ',
    description: 'У нас большая команда, каждый профессионал своего направления, мы работаем быстро и четко.',
  },
  {
    icon: '/assets/icon_about-5.png',
    title: '750+ УЧАСТНИКОВ',
    description: 'В нашем Telegram-комьюнити (органический рост без вложений в рекламу).',
  },
];

const InNumbers = () => (
  <section className="rounded-[24px] py-[40px] px-[24px] my-[32px] text-white shadow-[0_0_24px_#000a]">
    <div className="max-w-[1300px] mx-auto">
      <HeaderWrapper
        href=""
        withBr={false}
        kicker="#Цифры"
        title="о нас"
        titleAccent="в цифрах"
      />
      
      <div className="grid grid-cols-3 justify-center gap-[16px] mt-[32px]">
        {stats.map((stat, idx) => {
          // Определяем, является ли карточка 1-й или 5-й (индексы 0 и 4)
          const isWide = idx === 0 || idx === 4;
          
          return (
            <div 
              key={idx} 
              className={`bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] [background-origin:border-box] [background-clip:padding-box,border-box] border border-transparent rounded-[16px] p-[24px] min-w-[220px] flex gap-[100px] shadow-[0_0_12px_#ffb84d22] ${
                isWide 
                  ? 'col-span-3 flex-row justify-between items-center text-left self-center' 
                  : 'flex-col items-start'
              }`}
            >
              <div className="flex items-center gap-4">
                <Image 
                  src={stat.icon} 
                  alt={stat.title} 
                  width={48} 
                  height={48} 
                  className="drop-shadow-[0_0_8px_#ffb84d88]"
                />
                <h3 className="text-white leading-none font-['Bebas_Neue'] text-[35px]">
                  {stat.title}
                </h3>
              </div>
              
              <p className={`text-white font-['Ubuntu'] text-[19px] font-normal leading-[22.004px] ${
                isWide ? 'max-w-[400px]' : ''
              }`}>
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default InNumbers;