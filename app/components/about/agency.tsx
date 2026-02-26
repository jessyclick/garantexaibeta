import React from 'react';
import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';
import CTAButton from '../CTAButton';

const Agency = () => {
  return (
    <section className="py-[48px] px-0 text-white font-['Inter',_sans-serif]">
      {/* Header */}
      <div className="max-w-[800px] mx-auto mb-[32px] px-4">
        <HeaderWrapper
          href=""
          withBr={false}
          kicker="#Нейро-комьюнити"
          title="Больше,  "
          titleAccent="  чем агентство  "
        />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[24px] max-w-[1200px] mx-auto px-4">
        
        {/* Card 1: 100% Бесплатно (Left Top) */}
        <div className="rounded-[18px] p-[28px_24px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_2px_16px_0_#000a] flex flex-col gap-[16px]">
          <div className="flex items-center gap-2">
            <div className="w-[64px] shrink-0">
              <Image src="/assets/icon_top1.png" alt="thumb" width={32} height={32} className="w-full" />
            </div>
            <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-none uppercase">
              ПРИНЦИПИАЛЬНАЯ ПОЗИЦИЯ: <br /> <span className="text-white">100% БЕСПЛАТНО</span>
            </h3>
          </div>
          <p className="font-['Ubuntu',_sans-serif] text-[19px] leading-[22.004px] font-normal m-0 text-white">
            Мы идем против рынка инфобизнеса: у нас нет платных групп, «приваток» или скрытых тарифов. <br />
            <b>Вся информация доступна каждому.</b><br /><br />
            <b>Наша главная цель</b> — построить мощное комьюнити, нацеленное на взаимоподдержку и совместное развитие, а не на монетизацию доступа к знаниям.
          </p>
        </div>

        {/* Logo Placeholder (Центральный блок или правый в ряду) */}
        <div className="bg-[#ffffff1a] border-radius-[18px] rounded-[18px] flex items-center justify-center text-[#bbb] text-[1.1rem] italic min-h-[140px]">
          <span>место под логотип</span>
        </div>

        {/* Image Block 1 */}
        <div className="bg-[#181818] rounded-[18px] flex items-center justify-center min-h-[320px] overflow-hidden">
          <Image src="/assets/h1.png" alt="AI Human" width={400} height={300} className="w-full h-auto object-cover" />
        </div>

        {/* Card 2: Что получают участники (Right Top / Right Side) */}
        <div className="rounded-[18px] p-[28px_24px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_2px_16px_0_#000a] flex flex-col gap-[16px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-none uppercase">
            ЧТО ПОЛУЧАЮТ УЧАСТНИКИ: <span className="text-white">ВСЕ В 1 МЕСТЕ</span>
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-[24px]">
            <li className="flex items-start gap-[12px] font-['Ubuntu',_sans-serif] text-[17px] leading-[22.004px] text-white">
              <Image src="/assets/icon_s1.png" alt="news" width={40} height={40} className="shrink-0" />
              <div><span className="text-[#ffc700] font-semibold">Будьте вкурсе:</span> Каждый день публикуем свежие новости индустрии, проверенные промпты и подборки полезных нейросетей для работы, бизнеса и жизни.</div>
            </li>
            <li className="flex items-start gap-[12px] font-['Ubuntu',_sans-serif] text-[17px] leading-[22.004px] text-white">
              <Image src="/assets/icon_s2.png" alt="library" width={40} height={40} className="shrink-0" />
              <div><span className="text-[#ffc700] font-semibold">Библиотека решений:</span> Делимся готовыми шаблонами автоматизаций (Make/N8N) и списком из 200+ проверенных AI-ресурсов.</div>
            </li>
            <li className="flex items-start gap-[12px] font-['Ubuntu',_sans-serif] text-[17px] leading-[22.004px] text-white">
              <Image src="/assets/icon_s3.png" alt="chat" width={40} height={40} className="shrink-0" />
              <div><span className="text-[#ffc700] font-semibold">Живой чат поддержки:</span> Пространство, где участники комьюнити и мы лично отвечаем на вопросы и помогаем решать технические задачи.</div>
            </li>
            <li className="flex items-start gap-[12px] font-['Ubuntu',_sans-serif] text-[17px] leading-[22.004px] text-white">
              <Image src="/assets/icon_s4.png" alt="network" width={40} height={40} className="shrink-0" />
              <div><span className="text-[#ffc700] font-semibold">Еженедельный нетворкинг:</span> Каждый четверг в 19:30 проводим открытые онлайн-встречи. Разбираем кейсы, обсуждаем тренды и знакомимся (вход свободный для всех).</div>
            </li>
          </ul>
        </div>

        {/* Card 3: Геймификация (Left Bottom) */}
        <div className="rounded-[18px] p-[28px_24px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_2px_16px_0_#000a] flex flex-col gap-[16px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-none uppercase">ГЕЙМИФИКАЦИЯ И ВОЗНАГРАЖДЕНИЯ</h3>
          <p className="font-['Ubuntu',_sans-serif] text-[19px] leading-[22.004px] m-0 text-white">
            Мы внедрили <b className="text-[#FFB662]">уникальную систему</b> мотивации через нашего Telegram-бота:<br /><br />
            <b>Цифровой профиль:</b> Вы настраиваете аватар и информацию о себе через бота — ваша анкета попадает в общую базу резидентов, упрощая нетворкинг.<br /><br />
            <b>Репутация = Деньги:</b> За помощь другим участникам вам начисляют очки репутации.<br /><br />
            <span className="block mt-[12px] text-[#C3FFEE] p-[16px] font-['Inter',_sans-serif] text-[17.307px] leading-[23.8px] rounded-[12.98px] border border-[#007568] bg-[#003E37]">
              Бонус: За каждые набранные 100 очков мы дарим подписку на любую нейросеть (эквивалент до 20$).
            </span>
          </p>
        </div>

        {/* Image Block 2 */}
        <div className="bg-[#181818] rounded-[18px] flex items-center justify-center min-h-[320px] overflow-hidden">
          <Image src="/assets/h2.png" alt="AI Human 2" width={400} height={300} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Button Wrapper */}
      <div className="flex justify-center mt-[36px]">
        <CTAButton href="#">
          Вступить в комьюнити
        </CTAButton>
      </div>
    </section>
  );
};

export default Agency;