
import styles from "./styles/automation.module.scss";

export default function AutomationSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.visualization}>
            <div className={styles.visualContent}>
              <img src="/assets/auto.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h2>
            АВТОМАТИЗАЦИЯ ДЛЯ<br />
            <span>КРУПНЫХ МАГАЗИНОВ</span>
          </h2>

          <div className={styles.calloutBox}>
            <span className={styles.calloutIcon}>📋</span>
            <p className={styles.calloutText}>У вас сотни артикулов? Мы настроим конвейер.</p>
          </div>

          <ol className={styles.steps}>
                <div className={styles.lineDot}></div>
              <li>
                <span className={styles.stepIndex}>1</span>
                <div>
                  <strong>Подготовка:</strong>
                  <div className={styles.stepText}>Telegram-бот для автогенерации контента.</div>
                </div>
              </li>
              <li>
                <span className={styles.stepIndex}>2</span>
                <div>
                  <strong>AI-Анимация:</strong>
                  <div className={styles.stepText}>Загружаете фото → Получаете видео/баннер.</div>
                </div>
              </li>
              <li>
                <span className={styles.stepIndex}>3</span>
                <div>
                  <strong>Монтаж:</strong>
                  <div className={styles.stepText}>Индивидуальные условия для селлеров с 50+ SKU.</div>
                </div>
              </li>
            </ol>
          </div>
      </div>
    </section>
  );
}
