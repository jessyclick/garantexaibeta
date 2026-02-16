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
    name: "Блогер / YouTube-автор",
    icon: "/assets/loc-1.png",
    description: "Выходите на англоязычный рынок. Получайте валютную монетизацию.",
  },
  {
    name: "Онлайн-школа / Эксперт / Наставник",
    icon: "/assets/loc-2.png",
    description: "Один курс → продажи по всему миру. Расходы те же — прибыль кратно выше.",
  },
  {
    name: "E-commerce бренды",
    icon: "/assets/loc-3.png",
    description: "Видеообзоры для Amazon, AliExpress, Wildberries Global.",
  },
  {
    name: "IT / SaaS / стартапы",
    icon: "/assets/loc-4.png",
    description: "Онбординг, презентации, питчи — на любом языке.",
  },
   {
    name: "Арбитражники / креаторы",
    icon: "/assets/loc-5.png",
    description: "Перевод вирусных роликов → выход в новые регионы → рост охватов.",
  },
];

export default function WhoSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Кому подходит?"
          title="Локализация — ваш
следующий шаг,"
          titleAccent=" если вы:"
          withBr={false}
        />

        <div className={styles.platformGridLocal}>
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
