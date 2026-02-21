import CTAButton from "./CTAButton";

export default function ServicesSection() {
  return (
    <section className="py-[56px] px-5 text-white">
      <div className="max-w-[1305px] mx-auto flex flex-col lg:flex-row gap-[28px] items-start justify-center">
        
        {/* Левая колонка */}
        <div className="w-full lg:max-w-[42rem]">
          <div className="inline-flex items-center justify-center pt-1 w-[110px] h-[28px] rounded-full text-[#070707] font-['Bebas_Neue',_sans-serif] text-[20px] font-normal mb-[2rem] bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_37.13%,#FF9C1C_87.55%)]">
            УСЛУГА 1:
          </div>
          
          <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[2.8125rem] font-normal leading-[2.375rem] mb-[0.6rem] m-0 uppercase">
            ПРОДАЮЩЕЕ ВИДЕО ИЗ ФОТО
          </h3>
          <p className="text-white font-['Inter',_sans-serif] text-[0.9375rem] font-light leading-[1.37525rem] mb-[18px] m-0">
            Идеально для карточек товара WB, Ozon, Reels, Shorts.
          </p>

          {/* Карточка "Как мы работаем" */}
          <div className="border border-transparent rounded-[12px] p-[18px_22px] lg:p-[2.5rem_4.4rem] mb-[18px] mt-8 bg-origin-border [background-clip:padding-box,_border-box] firstGradient">
            <h4 className="m-0 mb-[12px] text-white font-['Bebas_Neue',_sans-serif] text-[20px] lg:text-[1.82531rem] font-normal leading-[2.56894rem]">
              КАК МЫ РАБОТАЕМ:
            </h4>
            
            <ol className="relative list-none p-0 m-0 flex flex-col gap-[20px]">
              {/* Пунктирная линия */}
              <div className="absolute left-[17px] top-0 w-[1px] h-[240px] bg-[url('/assets/line.png')] bg-contain w-[1px] h-[calc(100%-15px)]"></div>
              
              <li className="relative z-10 flex gap-[12px] items-start">
                <span className="min-w-[36px] h-[36px] rounded-[100px] lg:rounded-[10px] inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] lg:bg-[#ffb03b] text-black font-extrabold text-[16px]">
                  1
                </span>
                <div>
                  <strong className="text-white font-['Inter',_sans-serif] text-[15px] lg:text-[1.2845rem] font-bold leading-[1.4875rem] block mb-1">
                    Подготовка:
                  </strong>
                  <div className="text-white font-['Inter',_sans-serif] text-[14px] lg:text-[1.08169rem] font-light leading-[1.4875rem]">
                    Вы присылаете 3–5 фото (желательно в одном образе) + пожелания по музыке. Мы отбираем лучшие ракурсы.
                  </div>
                </div>
              </li>
              
              <li className="relative z-10 flex gap-[12px] items-start">
                <span className="min-w-[36px] h-[36px] rounded-[100px] lg:rounded-[10px] inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] lg:bg-[#ffb03b] text-black font-extrabold text-[16px]">
                  2
                </span>
                <div>
                  <strong className="text-white font-['Inter',_sans-serif] text-[15px] lg:text-[1.2845rem] font-bold leading-[1.4875rem] block mb-1">
                    AI-Анимация:
                  </strong>
                  <div className="text-white font-['Inter',_sans-serif] text-[14px] lg:text-[1.08169rem] font-light leading-[1.4875rem]">
                    Нейросети оживляют кадр (взгляд, блики, движение ткани, дым/пар).
                  </div>
                </div>
              </li>
              
              <li className="relative z-10 flex gap-[12px] items-start">
                <span className="min-w-[36px] h-[36px] rounded-[100px] lg:rounded-[10px] inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] lg:bg-[#ffb03b] text-black font-extrabold text-[16px]">
                  3
                </span>
                <div>
                  <strong className="text-white font-['Inter',_sans-serif] text-[15px] lg:text-[1.2845rem] font-bold leading-[1.4875rem] block mb-1">
                    Монтаж:
                  </strong>
                  <div className="text-white font-['Inter',_sans-serif] text-[14px] lg:text-[1.08169rem] font-light leading-[1.4875rem]">
                    Объединяем кадры, добавляем переходы, логотипы и CTA.
                  </div>
                </div>
              </li>
              
              <li className="relative z-10 flex gap-[12px] items-start">
                <span className="min-w-[36px] h-[36px] rounded-[100px] lg:rounded-[10px] inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] lg:bg-[#ffb03b] text-black font-extrabold text-[16px]">
                  4
                </span>
                <div>
                  <strong className="text-white font-['Inter',_sans-serif] text-[15px] lg:text-[1.2845rem] font-bold leading-[1.4875rem] block mb-1">
                    Звук:
                  </strong>
                  <div className="text-white font-['Inter',_sans-serif] text-[14px] lg:text-[1.08169rem] font-light leading-[1.4875rem]">
                    Подбираем лицензионный трек под настроение бренда.
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-[1rem]">
            {/* Блок Стоимость */}
            <div className="flex-1 lg:flex-[1_1_320px] border border-transparent rounded-[12px] p-[18px_22px] lg:p-[2.5rem_4.4rem] text-[#eafcf6] bg-origin-border secondGradient">
              <div className="pl-[0.8rem] text-white font-['Bebas_Neue',_sans-serif] text-[20px] lg:text-[1.82531rem] font-normal leading-[2.56894rem] mb-3">
                СТОИМОСТЬ
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-[rgba(255,255,255,0.03)] text-[14px] lg:text-base border border-[#007568] bg-[#003E37] rounded-[0.81125rem]">
                <span>Тест-драйв: 1 демо-ролик (15 сек)</span>
                <strong>1 500 ₽</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-[rgba(255,255,255,0.03)] text-[14px] lg:text-base">
                <span>От 3 до 5 видео</span>
                <strong>225 ₽ / сек</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-[rgba(255,255,255,0.03)] text-[14px] lg:text-base">
                <span>От 5 до 15 видео</span>
                <strong>200 ₽ / сек</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-[rgba(255,255,255,0.03)] text-[14px] lg:text-base">
                <span>От 15 до 30 видео</span>
                <strong>175 ₽ / сек</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-[rgba(255,255,255,0.03)] text-[14px] lg:text-base">
                <span>30+ видео (Опт)</span>
                <strong>150 ₽ / сек</strong>
              </div>
            </div>

            {/* Блок Опции */}
            <div className="border border-transparent rounded-[12px] p-[18px_22px] lg:p-[2.5rem_4.4rem] text-[#ffd7a8] bg-origin-border thirdGradient">
              <div className="pl-[0.8rem] text-white font-['Bebas_Neue',_sans-serif] text-[20px] lg:text-[1.82531rem] font-normal leading-[2.56894rem] mb-3">
                ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-dashed border-[rgba(255,255,255,0.03)] gap-4 text-[14px] lg:text-base">
                <div className="flex items-center gap-[8px]">
                  <img className="w-[24px] h-[24px]" src="/assets/icon_microphone.png" alt="" />
                  <span className="max-w-[290px]">Закадровый голос (продающее описание)</span>
                </div>
                <strong className="whitespace-nowrap lg:whitespace-normal">50 ₽ / сек</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-dashed border-[rgba(255,255,255,0.03)] gap-4 text-[14px] lg:text-base">
                <div className="flex items-center gap-[8px]">
                  <img className="w-[24px] h-[24px]" src="/assets/icon_doc.png" alt="" />
                  <span className="max-w-[290px]">Аккуратные субтитры</span>
                </div>
                <strong className="whitespace-nowrap lg:whitespace-normal">25 ₽ / сек</strong>
              </div>
              <div className="flex justify-between items-center p-[0.6rem_0.8rem] border-b border-dashed border-[rgba(255,255,255,0.03)] gap-4 text-[14px] lg:text-base">
                <div className="flex items-center gap-[8px]">
                  <img className="w-[24px] h-[24px]" src="/assets/icon_clothe.png" alt="" />
                  <span className="max-w-[290px]">Наложить другую вещь/позу</span>
                </div>
                <strong className="whitespace-nowrap lg:whitespace-normal">500 ₽ / шт</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <aside className="w-full lg:w-[580px] shrink-0 flex flex-col gap-[12px] items-center">
          <div className="w-full h-[260px] lg:h-[64rem] bg-[#151414] rounded-[12px] shadow-[0_18px_50px_rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.02)]" aria-hidden>
            {/* placeholder for visual or video */}
          </div>
          <CTAButton
            href="#"
            icon={
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z" fill="#0E0807"/>
              </svg>
            }
          >
            Заказать расчет
          </CTAButton>
        </aside>

      </div>
    </section>
  );
}