
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
    image: "/assets/bg_tg.png",
    icons: [
      { name: 'telegram', icon: '/assets/icon_y-telegram.png' },
      { name: 'vk', icon: '/assets/icon_y-vk.png' },
      { name: 'ok', icon: '/assets/icon_y-odno.png' },
    ],
  },
  {
    id: 'global',
    title: "ГЛОБАЛ:",
    image: "/assets/bg_global.png",
    icons: [
      { name: 'pinterest', icon: '/assets/pinterest.png' },
      { name: 'linkedin', icon: '/assets/icon_linkedin.png' },
      { name: 'x', icon: '/assets/icon_x.png' },
    ],
  },
  {
    id: 'visual',
    title: "ВИЗУАЛ:",
    image: "/assets/bg_ins.png",
    icons: [
      { name: 'instagram', icon: '/assets/icon_instagram.png' },
      { name: 'threads', icon: '/assets/icon_threads.png' },
      { name: 'facebook', icon: '/assets/icon_facebook.png' },
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
                  {card.icons.map((iconObj) => (
                    <a href="" className={styles.iconLink} key={iconObj.name}>
                      <img src={iconObj.icon} alt={iconObj.name} />
                    </a>
                  ))}
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
