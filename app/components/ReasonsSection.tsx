import styles from "./styles/reasons.module.scss";
import { RevealStagger } from "./revealStagger";
import { Reveal } from "./reveal";

export default function ReasonsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Reveal> 
        <div className={styles.header}>
          <span className={styles.kicker}>#Проблема</span>
          <h2 className={styles.title}>
            ПОЧЕМУ ОБЫЧНЫЕ ФОТО
            <br />
            <span className={styles.accent}>БОЛЬШЕ НЕ ПРОДАЮТ?</span>
          </h2>
        </div>
        </Reveal>

        
          <RevealStagger stagger={0.3} className={styles.grid}> 
          <article className={`${styles.card} ${styles.cardLeft}`}>
            <div className={styles.icon}>
              <img src="/assets/icon_cloose.png" alt="" />
            </div>
            <p className={styles.cardText}>
              Серый фон и скучная статика «убивают» конверсию. Покупатель хочет
              видеть динамику, эмоции и товар в жизни.
            </p>
          </article>

          <article className={`${styles.card} ${styles.cardCenter}`}>
            <div className={styles.icon}>
              <img src="/assets/icon_like.png" alt="" />
            </div>
            <p className={styles.cardCenterText}>
              Сегодня Garantex AI делает это за минуты, используя только фото
              вашего товара.
            </p>
          </article>

          <article className={`${styles.card} ${styles.cardRight}`}>
            <div className={styles.icon}>
              <img src="/assets/icon_cloose.png" alt="" />
            </div>
            <p className={styles.cardText}>
              Раньше для этого требовались: студия, фотограф, модели, визажист.
            </p>
          </article>
          </RevealStagger>
        
      </div>
    </section>
  );
}
