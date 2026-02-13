
import HeaderWrapper from "../headerWrapper";
import styles from "./whereClients.module.scss";

interface ClientCard {
  id: string;
  title: string;
  image: string;
  icons: Array<{
    name: string;
    icon: string;
  }>;
}

const clientsData: ClientCard[] = [
  {
    id: 'rf-sng',
    title: "РФ И СНГ:",
    image: "/assets/platform_1.png",
    icons: [
      { name: 'telegram', icon: '✈️' },
      { name: 'vk', icon: '👥' },
      { name: 'ok', icon: '⭕' },
    ],
  },
  {
    id: 'global',
    title: "ГЛОБАЛ:",
    image: "/assets/platform_2.png",
    icons: [
      { name: 'pinterest', icon: '📌' },
      { name: 'linkedin', icon: '💼' },
      { name: 'x', icon: '❌' },
    ],
  },
  {
    id: 'visual',
    title: "ВИЗУАЛ:",
    image: "/assets/platform_3.png",
    icons: [
      { name: 'instagram', icon: '📷' },
      { name: 'threads', icon: '🧵' },
      { name: 'facebook', icon: '👤' },
    ],
  },
];

export default function WhereClientsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Платформы"
          title="ВЕЗДЕ, ГДЕ ЕСТЬ ВАШИ"
          titleAccent="КЛИЕНТЫ"
          withBr={true}
        />

        <div className={styles.subtitle}>
          <p>Мы настраиваем кросс-постинг на ключевые площадки РФ и мира:</p>
        </div>

        <div className={styles.grid}>
          {clientsData.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.iconsGroup}>
                  <a href="" className={styles.iconLink}>
                    <img src="/assets/icon_y-telegram.png" alt="" />
                  </a>
                  <a href="" className={styles.iconLink}>
                    <img src="/assets/icon_y-vk.png" alt="" />
                  </a>
                  <a href="" className={styles.iconLink}>
                    <img src="/assets/icon_y-odno.png" alt="" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>*СНОСКА: ПРОДУКТЫ META ПРИЗНАНЫ ЭКСТРЕМИСТСКИМИ И ЗАПРЕЩЕНЫ В РФ</p>
        </div>
      </div>
    </section>
  );
}
