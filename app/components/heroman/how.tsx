"use client"; // Обязательно для Next.js, так как используем хуки

import { useState, useEffect } from "react";
import HeaderWrapper from "../headerWrapper";
import CTAButton from "../CTAButton";

// Импорты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  id?: string;
};

export default function WhySiteDesignSection({ id }: Props) {
  // Состояние для проверки мобилки
  const [isMobile, setIsMobile] = useState(false);
  // Состояние для предотвращения ошибки гидратации (SSR)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Компонент смонтирован на клиенте
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Брейкпоинт 768px
    };
    
    handleResize(); // Проверяем при первой загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Иконка для кнопки
  const btnIcon = (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z" fill="#0E0807"/>
    </svg>
  );

  // Выносим общие классы для чистоты кода
  const cardClass = "relative flex flex-col md:grid md:grid-cols-2 items-center gap-[50px] overflow-hidden rounded-[14px]";
  const cardBodyClass = "relative firstGradient flex h-full flex-1 flex-col items-center justify-center rounded-[20px] border border-transparent p-[50px_20px] sm:items-start sm:p-[25px_40px]";
  const cardBadgeClass = "mb-[18px] bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text font-['Bebas_Neue'] text-[18px] sm:text-[24px] font-bold leading-none tracking-normal text-transparent";
  const cardTitleClass = "mb-1.5 font-['Bebas_Neue'] text-[24px] sm:text-[37px] font-normal leading-[38px] text-white";
  const previewBaseClass = "h-full w-full shrink-0 rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] bg-blend-overlay shadow-[0_8px_30px_rgba(0,0,0,0.6)]";

  // Стили для градиентной обводки (передаем через style)
  const cardBodyStyle = {
    backgroundClip: 'padding-box, border-box'
  };

  const cards = [
    <article className={cardClass} key="card-1">
      <div className={cardBodyClass} style={cardBodyStyle}>
        <p className={cardBadgeClass}>Этап 1</p>
        <h3 className={cardTitleClass}>Рождение (5-7 дней)</h3>
        <p className="font-inter font-normal text-[19px] leading-[22px] tracking-normal">
          Изучаем ваш бизнес и создаём эскизы. Строгий робот? Весёлый корги? Футуристичная девушка?
        </p>
        <div className="GradientBlack rounded-[14px] p-7 flex items-center gap-3 mt-6 max-w-[360px]">
          <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <img src="/assets/feauture-icon.png" alt="" />
                </span>
          <span className="font-inter font-bold text-[19px] leading-[22px] tracking-normal">Вы получаете: 3D-модель для сайта и баннеров</span>
        </div>
        {/* Мобильная картинка */}
        <div className={`${previewBaseClass} mt-6 block md:hidden`}>
          <img src="/assets/tt-1.png" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Десктопная картинка (справа) */}
      <div className={`${previewBaseClass} hidden md:block`}>
        <img src="/assets/tt-1.png" alt="" className="h-full w-full object-cover" />
      </div>
    </article>,

    <article className={cardClass} key="card-2">
      {/* Десктопная картинка (слева) */}
      <div className={`${previewBaseClass} hidden md:block`}>
        <img src="/assets/tt-2.png" alt="" className="h-full w-full object-cover" />
      </div>
      <div className={cardBodyClass} style={cardBodyStyle}>
        <p className={cardBadgeClass}>Этап 2</p>
        <h3 className={cardTitleClass}>Оживление (3-5 дней)</h3>
        <p className="font-inter font-normal text-[19px] leading-[22px] tracking-normal">
          Настраиваем анимацию и клонируем ваш голос (или подбираем AI-диктора).
        </p>
        <div className="GradientBlack rounded-[14px] p-7 flex items-center gap-3 mt-6 max-w-[360px]">
          <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <img src="/assets/feauture-icon.png" alt="" />
                </span>
          <span className="font-inter font-bold text-[19px] leading-[22px] tracking-normal">Вы получаете: Персонажа, который говорит и двигается</span>
        </div>
        {/* Мобильная картинка */}
        <div className={`${previewBaseClass} mt-6 block md:hidden`}>
          <img src="/assets/tt-2.png" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </article>,

    <article className={cardClass} key="card-3">
      <div className={cardBodyClass} style={cardBodyStyle}>
        <p className={cardBadgeClass}>Этап 3</p>
        <h3 className={cardTitleClass}>Автоматизация</h3>
        <p className="font-inter font-normal text-[19px] leading-[22px] tracking-normal">
          Подключаем систему: вы пишете тему → бот создаёт ролик.

        </p>
        <div className="GradientBlack rounded-[14px] p-7 flex items-center gap-3 mt-6 max-w-[360px]">
          <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <img src="/assets/feauture-icon.png" alt="" />
                </span>
          <span className="font-inter font-bold text-[19px] leading-[22px] tracking-normal">Вы получаете: Поток контента для Reels/TikTok/YouTube без съёмок
</span>
        </div>
        {/* Мобильная картинка */}
        <div className={`${previewBaseClass} mt-6 block md:hidden`}>
          <img src="/assets/tt-3.png" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Десктопная картинка (справа) */}
      <div className={`${previewBaseClass} hidden md:block`}>
        <img src="/assets/tt-3.png" alt="" className="h-full w-full object-cover" />
      </div>
    </article>,
  ];

  if (!isMounted) {
    return (
      <section id={id} className="px-0 py-12 text-white md:px-5 md:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mt-9 flex flex-col gap-[50px]">{cards}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="px-0 py-12 text-white md:px-5 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <HeaderWrapper
          kicker={<span>#Как это работает?</span>}
          title={<span className="text-white"> От идеи до контент-завода</span>}
          titleAccent={<span> за 3 шага</span>}
          align="center"
          withBr={false}
        />

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="mt-9 w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={`slide-${index}`}>
                {card}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="mt-9 flex flex-col gap-[50px]">
            {cards}
          </div>
        )}
      </div>
    </section>
  );
}