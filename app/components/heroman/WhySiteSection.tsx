import { span } from "motion/react-client";
import HeaderWrapper from "../headerWrapper";
import styles from "../socmedia/whySite.module.scss";

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    icon: "/assets/icon_d-1.png",
    title: "B2B с скучным продуктом",
    description:
      'сделать понятно и весело',
  },
  {
    icon: "/assets/icon_d-2.png",
    title: "Стартапам",
    description:
      "выделиться без бюджета на звёзд",
  },
  {
    icon: "/assets/icon_d-3.png",
    title: "Онлайн-школам",
    description:
      "создать образ учителя",
  },
  {
    icon: "/assets/icon_d-4.png",
    title: "E-commerce",
    description:
      "персонализировать бренд",
  },
];

export default function WhySiteSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          href="#"
          withBr={false}
          kicker="#Для кого"
          title={<span className="color-white">Маскот </span>}
          titleAccent={<span> жизненно нужен:</span>}
        />

        <div className={styles.grid}>
          {reasonsData.map((reason) => (
            <article key={reason.title} className={styles.card}>
              <div className={styles.badge}>
                <img src={reason.icon} alt={reason.title} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
