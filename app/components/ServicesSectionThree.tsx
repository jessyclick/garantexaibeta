import CTAButton from "./CTAButton";
import styles from "./services.module.scss";

export default function ServicesSectionThree() {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.container}`}>
        <div className={styles.left}>
          <div className={styles.badge}>УСЛУГА 1:</div>
          <h3 className={styles.heading}>ПРОДАЮЩЕЕ ВИДЕО ИЗ ФОТО</h3>
          <p className={styles.sub}>Идеально для карточек товара WB, Ozon, Reels, Shorts.</p>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>КАК МЫ РАБОТАЕМ:</h4>
            <ol className={styles.steps}>
                <div className={styles.lineDot}></div>
              <li>
                <span className={styles.stepIndex}>1</span>
                <div>
                  <strong>Подготовка:</strong>
                  <div className={styles.stepText}>Вы присылаете 3–5 фото (желательно в одном образе) + пожелания по музыке. Мы отбираем лучшие ракурсы.</div>
                </div>
              </li>
              <li>
                <span className={styles.stepIndex}>2</span>
                <div>
                  <strong>AI-Анимация:</strong>
                  <div className={styles.stepText}>Нейросети оживляют кадр (взгляд, блики, движение ткани, дым/пар).</div>
                </div>
              </li>
              <li>
                <span className={styles.stepIndex}>3</span>
                <div>
                  <strong>Монтаж:</strong>
                  <div className={styles.stepText}>Объединяем кадры, добавляем переходы, логотипы и CTA.</div>
                </div>
              </li>
              <li>
                <span className={styles.stepIndex}>4</span>
                <div>
                  <strong>Звук:</strong>
                  <div className={styles.stepText}>Подбираем лицензионный трек под настроение бренда.</div>
                </div>
              </li>
            </ol>
          </div>

          <div className={styles.pricingRow}>
            <div className={styles.pricingBox}>
              <div className={styles.pricingTitle}>СТОИМОСТЬ</div>
              <div className={`${styles.priceItem} ${styles.priceItemActive}`}><span>Тест-драйв: 1 демо-ролик (15 сек)</span><strong>1 500 ₽</strong></div>
              <div className={styles.priceItem}><span>От 3 до 5 видео</span><strong>225 ₽ / сек</strong></div>
              <div className={styles.priceItem}><span>От 5 до 15 видео</span><strong>200 ₽ / сек</strong></div>
              <div className={styles.priceItem}><span>От 15 до 30 видео</span><strong>175 ₽ / сек</strong></div>
              <div className={styles.priceItem}><span>30+ видео (Опт)</span><strong>150 ₽ / сек</strong></div>
            </div>

            <div className={styles.optionsBox}>
              <div className={styles.optionsTitle}>ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:</div>
              <div className={styles.optionItem}><span>Закадровый голос (продающее описание)</span><strong>50 ₽ / сек</strong></div>
              <div className={styles.optionItem}><span>Аккуратные субтитры</span><strong>25 ₽ / сек</strong></div>
              <div className={styles.optionItem}><span>Наложить другую вещь/позу</span><strong>500 ₽ / шт</strong></div>
            </div>
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.preview} aria-hidden>
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
