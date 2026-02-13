import HeaderWrapper from "../headerWrapper";
import styles from "./platforms.module.scss";

type PlatformCard = {
  name: string;
  icon?: string;
  description: string;
};

type Props = {
  platforms?: PlatformCard[];
};

const defaultPlatforms: PlatformCard[] = [
  {
    name: "VC.RU",
    icon: "/assets/vc-ru.png",
    description: "Бизнес, стартапы, маркетинг. Идеально для B2B продаж.",
  },
  {
    name: "HABR",
    icon: "/assets/habr.png",
    description: "IT, разработка, гаджеты. Для HR-бренда и поиска технарей.",
  },
  {
    name: "TENCHAT",
    icon: "/assets/tenchat.png",
    description: "Деловая соцсеть. Для нетворкинга и тендеров.",
  },
  {
    name: "ДЗЕН",
    icon: "/assets/dzen.png",
    description: "Массовый охват. Для прогрева широкой аудитории.",
  },
  {
    name: "Т—Ж",
    icon: "/assets/pikabu.png",
    description: "Виральность и узнаваемость.",
  },
  {
    name: "MEDIUM",
    icon: "/assets/medium.png",
    description: "SEO-трафик и внешние ссылки.",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Где работает"
          title="ОДНА СТАТЬЯ РАБОТАЕТ ВЕЗДЕ,"
          titleAccent="ГДЕ ЕСТЬ ВАШИ КЛИЕНТЫ"
        />

        <p className={styles.subtitle}>
          Мы адаптируем контент под алгоритмы ключевых платформ:
        </p>

        <div className={styles.platformsGrid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              {platform.icon && (
                <div className={styles.iconWrapper}>
                  <img src={platform.icon} alt={platform.name} />
                </div>
              )}
              
              <p className={styles.platformDescription}>{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
