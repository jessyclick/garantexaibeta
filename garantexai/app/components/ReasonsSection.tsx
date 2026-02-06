import styles from "./reasons.module.scss";

export default function ReasonsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>#Причина</span>
          <h2 className={styles.title}>
            ПОЧЕМУ ОБЫЧНЫЕ ФОТО
            <br />
            <span className={styles.accent}>БОЛЬШЕ НЕ ПРОДАЮТ?</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.cardLeft}`}>
            <div className={styles.icon}>✕</div>
            <p className={styles.cardText}>
              Серый фон и скучная статика «убивают» конверсию. Покупатель хочет
              видеть динамику, эмоции и товар в жизни.
            </p>
          </article>

          <article className={`${styles.card} ${styles.cardCenter}`}>
            <div className={styles.icon}>👍</div>
            <p className={styles.cardCenterText}>
              Сегодня Garantex AI делает это за минуты, используя только фото
              вашего товара.
            </p>
          </article>

          <article className={`${styles.card} ${styles.cardRight}`}>
            <div className={styles.icon}>✕</div>
            <p className={styles.cardText}>
              Раньше для этого требовались: студия, фотограф, модели, визажист.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
