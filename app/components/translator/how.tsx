"use client";

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

// Выносим данные в массив для чистоты кода
const cardsData = [
  {
    badge: "Этап 1",
    title: "Загрузка",
    text: "Вы присылаете ссылку или файл.",
    img: "/assets/local-1.png",
    reverse: false,
  },
  {
    badge: "Этап 2",
    title: "Адаптация",
    text: "Переводим текст, согласуем терминологию, клонируем голос.",
    img: "/assets/local-2.png",
    reverse: true, // Картинка слева на десктопе
  },
  {
    badge: "Этап 3",
    title: "Генерация",
    text: "ИИ создаёт новую аудиодорожку, заменяет мимику (LipSync) и синхронизирует речь.",
    img: "/assets/local-3.png",
    reverse: false,
  },
  {
    badge: "Этап 4",
    title: "Автопостинг",
    text: "Видео автоматически публикуются на ваши международные каналы.",
    img: "/assets/local-4.png",
    reverse: true,
  },
  {
    badge: "Этап 5",
    title: "Автоматизация",
    text: "Всё можно вынести в Telegram-бот: загрузка → локализация → готовый файл → публикация.",
    img: "/assets/local-5.png",
    reverse: false,
  },
];

export default function WhySiteDesignSection({ id }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Генерация карточек на основе данных
  const cards = cardsData.map((card, index) => (
    <article
      key={`card-${index}`}
      className="flex flex-col md:grid md:grid-cols-2 gap-[50px] items-center rounded-[14px] relative overflow-hidden"
    >
      {/* Десктопная картинка (слева), если reverse = true */}
      {card.reverse && (
        <div className="hidden md:block w-full h-full rounded-[10px]  shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-blend-overlay">
          <img
            src={card.img}
            alt=""
            className="w-full h-full object-cover rounded-[10px] block"
          />
        </div>
      )}

      {/* Основной контент (карточка с градиентной обводкой) */}
      <div className="flex-auto p-[50px_20px] sm:p-[25px_40px] border border-transparent rounded-[20px] h-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left firstGradient">
        <p className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent font-['Bebas_Neue',_sans-serif] font-bold text-[18px] sm:text-[24px] leading-none mb-[18px] m-0">
          {card.badge}
        </p>
        <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[24px] sm:text-[37px] leading-[1.02] m-0 mb-1.5">
          {card.title}
        </h3>
        
        {/* Описание. Также добавлены стили для тегов <li> на случай, если вы используете списки */}
        <div className="text-white font-['Inter',_sans-serif] font-normal text-[15px] sm:text-[19px] leading-[22px] m-0 mb-8 [&_li]:pl-6 [&_li]:relative [&_li]:transition-all [&_li::before]:content-['•'] [&_li::before]:text-white [&_li::before]:font-bold [&_li::before]:text-[18px] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-0">
          {card.text}
        </div>

        {/* Мобильная картинка (отображается внутри карточки только на мобильных) */}
        <div className="block md:hidden w-full h-auto rounded-[10px] bg-[linear-gradient(135deg,rgba(3,218,198,0.12),rgba(255,150,40,0.12))] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-blend-overlay mt-auto">
          <img
            src={card.img}
            alt=""
            className="w-full h-full object-cover rounded-[10px] block"
          />
        </div>
      </div>

      {/* Десктопная картинка (справа), если reverse = false */}
      {!card.reverse && (
        <div className="hidden md:block w-full h-full rounded-[10px]  bg-blend-overlay">
          <img
            src={card.img}
            alt=""
            className="w-full h-full object-cover rounded-[10px] block"
          />
        </div>
      )}
    </article>
  ));

  // Предотвращаем мерцание (hydration mismatch) в SSR
  if (!isMounted) {
    return (
      <section id={id} className="py-[48px] px-0 md:py-[72px] md:px-5 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[50px] mt-[36px]">{cards}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-[48px] px-0 md:py-[72px] md:px-5 text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <HeaderWrapper
          kicker={<span>#Как это работает?</span>}
          title={<span>Глобализация вашего бренда </span>}
          titleAccent={<span className="text-white">— всего за 5 шагов</span>}
          align="center"
          withBr={false}
        />

        {/* Условный рендеринг: Слайдер для мобилок, Grid для десктопа */}
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1} // 1 слайд + кусочек следующего
            pagination={{ clickable: true }}
            className="mt-[36px] !px-4 pb-10" // Добавил отступы для пагинации и краев экрана
          >
            {cards.map((card, index) => (
              <SwiperSlide key={`slide-${index}`}>{card}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-col gap-[50px] mt-[36px]">{cards}</div>
        )}
      </div>
    </section>
  );
}