import styles from "./styles/guarantees.module.scss";

export default function GuaranteesSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>#Условия</span>
          <h2>
            ГАРАНТИИ И УСЛОВИЯ 
            <span>РАБОТЫ</span>
          </h2>
          <p className={styles.subtitle}>Мы берем качество на себя:</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <img className={styles.figure} src="/assets/g_first.png" alt="" />
            <h3 className={styles.cardTitle}>БЕСПЛАТНЫЕ ПРАВКИ:</h3>
            <p className={styles.cardText}>
              Для видео: 1 бесплатная правка на каждые 10 секунд хронометража.
            </p>
            <p className={styles.cardNote}>
              Например: в ролике 30 сек можно бесплатно изменить 3 кадра.
            </p>
          </article>

          <article className={styles.card}>
            <img className={styles.figure} src="/assets/g_second.png" alt="" />
            <h3 className={styles.cardTitle}>СТОИМОСТЬ ДОП. ПРАВОК:</h3>
            <p className={styles.cardText}>500 ₽ за генерацию (5 сек).</p>
            <p className={styles.cardNote}>
              <strong>Важно:</strong> Мы изначально отбираем лучшие кадры,
              поэтому 95% клиентов принимают работу с первого раза.
            </p>
          </article>

          <article className={styles.card}>
            <img className={styles.figure} src="/assets/g_third.png" alt="" />
            <h3 className={styles.cardTitle}>ЮРИДИЧЕСКАЯ ЧИСТОТА:</h3>
            <p className={styles.cardText}>Работаем по договору.</p>
            <p className={styles.cardNote}>
              Используем музыку без нарушения авторских прав. Конфиденциальность
              (NDA при необходимости).
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
