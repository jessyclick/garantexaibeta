import HeaderWrapper from "./headerWrapper";
import styles from "./styles/servicesExtended.module.scss";


export default function AutomationServicesExtendedSection() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Анализ ниши и семантики",
      description: "Погружаемся в специфику вашего бизнеса, анализируем конкурентов и целевую аудиторию.",
      image: "/assets/services_1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Сбор данных о компании",
      description: "Фиксируем тон бренда, информацию о продуктах, боли ЦА, ограничения, слоганы и ценности — чтобы писать «вашим голосом».",
      image: "/assets/services_2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Разработка контент-плана",
      description: "Для каждого ключа мы формируем план из заголовка, описания, боли ЦА, доп. ключей, LSI-фраз, триггеров и CTA — так получаются максимально релевантные материалы.",
      image: "/assets/services_3.png",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
                    align="center"
                    withBr={false}
                    href=""
                    kicker="#По шагам"
                    title="Как работает"
                    titleAccent="наша система"
                  />

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
              <div className="flex gap-4 mb-2 items-center">
                <div className={styles.numberBadge}>{service.number}</div>
                <h3 className={`${styles.cardTitle} ${styles.marginNone} ${styles.maxwidthNone}`}> {service.title}</h3>
              </div>
              
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
