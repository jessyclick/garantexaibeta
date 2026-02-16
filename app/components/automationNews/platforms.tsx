import HeaderWrapper from "../headerWrapper";
import styles from "../expertPlatform/platforms.module.scss";

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
    name: "Сайт/ блог",
    icon: "/assets/socmedia-1.png",
    description: "Бизнес, стартапы, маркетинг. Идеально для B2B продаж.",
  },
  {
    name: "ВКонтакте",
    icon: "/assets/socmedia-2.png",
    description: "IT, разработка, гаджеты. Для HR-бренда и поиска технарей.",
  },
  {
    name: "Одноклассники",
    icon: "/assets/socmedia-3.png",
    description: "Деловая соцсеть. Для нетворкинга и тендеров.",
  },
  {
    name: "Instagram",
    icon: "/assets/socmedia-4.png",
    description: "Массовый охват. Для прогрева широкой аудитории.",
  },
  {
    name: "Facebook**",
    icon: "/assets/socmedia-5.png",
    description: "Виральность и узнаваемость.",
  },
  {
    name: "Telegram",
    icon: "/assets/socmedia-6.png",
    description: "SEO-трафик и внешние ссылки.",
  },
  {
    name: "Google Docs",
    icon: "/assets/socmedia-7.png",
    description: "SEO-трафик и внешние ссылки.",
  },
  {
    name: "LinkedIn",
    icon: "/assets/socmedia-8.png",
    description: "SEO-трафик и внешние ссылки.",
  },
  {
    name: "TenChat",
    icon: "/assets/socmedia-9.png",
    description: "SEO-трафик и внешние ссылки.",
  },
  {
    name: "Habr",
    icon: "/assets/socmedia-10.png",
    description: "SEO-трафик и внешние ссылки.",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Охват"
          title="Один ИИ-редактор → "
          titleAccent="контент на все ваши ресурсы"
        />

        <p className={styles.subtitle}>
          Мы адаптируем контент под алгоритмы ключевых платформ:
        </p>

        <div className={styles.platformGrid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              {platform.icon && (
                <div className={styles.iconWrapper}>
                  <img src={platform.icon} alt={platform.name} />
                </div>
              )}
              
              <p className={styles.platformTitle}>{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
