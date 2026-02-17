"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Обязательные стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';

import CTAButton from '../CTAButton';
import styles from './clients.module.scss';

const clients = [
  {
    title: 'TECHSRO',
    description: 'Юридический провайдер для бизнеса. Комплексное сопровождение и вступление в СРО под ключ.',
    url: 'techsro.ru',
    image: '/assets/client-1.png',
  },
  {
    title: 'MONSTRO',
    description: 'Digital-агентство стратегического маркетинга и масштабирования брендов.',
    url: 'rk-monstro.ru',
    image: '/assets/client-2.png',
  },
  {
    title: 'ART GLÜCK',
    description: 'Онлайн-академия дизайна с фокусом на практику и коммерческий результат.',
    url: 'artgluck.ru',
    image: '/assets/client-3.png',
  },
  {
    title: 'BOBE',
    description: 'Технологическая крипто-платформа для работы с цифровыми активами.',
    url: 'bobe.app',
    image: '/assets/client-4.png',
  },
  {
    title: 'Pumpy',
    description: 'Сервис AI-крипто-агентов для автоматизированной торговли и аналитики.',
    url: 'pumpyagent.ai',
    image: '/assets/client-5.png',
  },
  {
    title: 'Duckdoc',
    description: 'Цифровой сервис медицинского страхования и управления здоровьем.',
    url: 'duckdoc.ru',
    image: '/assets/client-6.png',
  },
  {
    title: 'Flebo',
    description: 'Экспертная медицинская практика в области флебологии.',
    url: 'flebologkuzmichev.ru',
    image: '/assets/client-7.png',
  },
  {
    title: 'Mixit',
    description: 'Федеральный косметический бренд с собственным производством и R&D.',
    url: 'mixit.ru',
    image: '/assets/client-8.png',
  },
  {
    title: 'Благотворительный фонд Возрождение',
    description: 'Некоммерческий фонд, реализующий социально значимые благотворительные проекты.',
    url: 'fvozr.ru',
    image: '/assets/client-9.png',
  },
];

const Clients = () => {
  const nextBtnRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Исправляем проблему гидратации в Next.js
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={styles.clientsSection}>
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col gap-2 items-start">
            <p className={styles.badge}>Портфолио</p>
            <h2 className="h2">
              <span>Наши клиенты</span>
            </h2>
          </div>
          
          {/* Кастомная стрелка навигации */}
          <div 
            ref={nextBtnRef} 
            className={styles.arrowNext}
            style={{ cursor: 'pointer' }} // Убедимся, что на нее можно нажать
          >
            <img src="/assets/next-arrow.svg" alt="Next slide" />
          </div>
        </div>

        {isLoaded && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              nextEl: nextBtnRef.current,
            }}
            // Важный хак для Next.js: переинициализация навигации после отрисовки кнопок
            onInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.nextEl = nextBtnRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2.5 },
            }}
            className={styles.swiper}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={client.image} 
                      alt={client.title} 
                      width={600} 
                      height={400} 
                      className={styles.image}
                      priority={idx < 2} // Оптимизация LCP для первых слайдов
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.title}>{client.title}</div>
                    <p className={styles.desc}>{client.description}</p>
                    <a 
                      href={`https://${client.url}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.link}
                    >
                      <span>{client.url}</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={styles.confidential}>
          <div className="flex items-center gap-4 flex-1">
            <Image src="/assets/icon_lock.png" alt="lock" width={32} height={32} />
            <span>
              Многие клиенты предпочитают оставаться за кадром — мы уважаем <b>NDA</b> и обеспечиваем полную конфиденциальность сотрудничества.
            </span>
          </div>
          <CTAButton
            href="#"
            icon={
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z" fill="#0E0807"/>
              </svg>
            }
          >
            Бесплатный демо-тест
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Clients;