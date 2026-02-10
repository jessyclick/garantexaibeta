import styles from "./styles/servicesExtended.module.scss";

export default function ServicesExtendedSection() {
  const services = [
    {
      id: 1,
      title: "ВЕДЕНИЕ СОЦСЕТЕЙ",
      description: "автоматизированный SMM и автопостинг.",
      image: "/assets/soc-media.png",
    },
    {
      id: 2,
      title: "ВЕДЕНИЕ МЕДИА-ПЛАТФОРМ",
      description: "экспертные публикации на ключевых ресурсах.",
      image: "/assets/soc-platform.png",
    },
    {
      id: 3,
      title: "НОВОСТИ НА АВТОПИЛОТЕ",
      description: "мониторинг, ремонт и публикация до 10 новостей в день.",
      image: "/assets/news.png",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            ЕЩЁ УСЛУГИ, КОТОРЫЕ ПРОДВИНУТ
            <span className={styles.accent}> ВАШ БИЗНЕС С ПОМОЩЬЮ ИИ</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <button className={styles.button}>Подробнее</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
