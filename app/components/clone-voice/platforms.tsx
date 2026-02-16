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
    name: "Бизнес",
    icon: "/assets/vq-1.png",
    description: "IVR, автоответчики, звонки роботов.",
  },
  {
    name: "Маркетинг",
    icon: "/assets/vq-2.png",
    description: "реклама, презентации, ролики для маркетплейсов.",
  },
  {
    name: "Образование",
    icon: "/assets/vq-3.png",
    description: "курсы, лекции, аудиокниги.",
  },
  {
    name: "Контент",
    icon: "/assets/vq-4.png",
    description: "YouTube, Shorts, Reels, подкасты.",
  },
  {
    name: "Локализация",
    icon: "/assets/vq-5.png",
    description: "дубляж и переводы на десятки языков.",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Сценарии использования"
          title="Идеальный голос"
          titleAccent=" нужен везде"
          withBr={false}
        />

        <div className={styles.platformGrid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              {platform.icon && (
                <div className={styles.iconWrapper}>
                  <img src={platform.icon} alt={platform.name} />
                </div>
              )}
              
              <p className={styles.platformTitle}>{platform.name}</p>
              <p className={styles.platformDescription}>{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
