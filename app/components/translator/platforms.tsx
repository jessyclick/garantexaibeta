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
    icon: "/assets/icon_xclode.png",
    description: "95% мировой аудитории вас не понимает",
  },
  {
    name: "Маркетинг",
    icon: "/assets/icon_xclode.png",
    description: "CPM в США/Европе выше в 5–10 раз",
  },
  {
    name: "Образование",
    icon: "/assets/icon_xclode.png",
    description: "Роботизированная озвучка рушит доверие и конверсию",
  },
  {
    name: "Контент",
    icon: "/assets/icon_xclode.png",
    description: "Переснимать уроки на других языках — невозможно физически",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Цена языкового барьера"
          title="Сколько денег вы теряете,"
          titleAccent="ограничиваясь одним языком?"
          withBr={false}
        />

        <p className={styles.subtitle}>
          Ваш контент может зарабатывать в 5–10 раз больше — но остаётся внутри СНГ, где CPM минимальный.
        </p>

        <div className={styles.platformGridTranslator}>
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
