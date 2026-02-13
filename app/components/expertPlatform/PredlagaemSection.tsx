import HeaderWrapper from "../headerWrapper";
import styles from "./predlagaem.module.scss";

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    icon: "/assets/pred-1.png",
    title: "Системность:",
    description:
      'Контент выходит по графику, без сбоев и выходных.',
  },
  {
    icon: "/assets/pred-2.png",
    title: "Качество:",
    description:
      "Глубокие лонгриды с фактурой, кейсами и аналитикой, а не поверхностный рерайт.",
  },
  {
    icon: "/assets/pred-3.png",
    title: "Масштаб:",
    description:
      "Одна ваша идея превращается в 10 единиц контента для разных площадок.",
  },
  {
    icon: "/assets/pred-4.png",
    title: "Ваш Tone of Voice:",
    description:
      "Строго B2B, живо для соцсетей, SEO-стиль для сайта, провокационно для виральности — пишем так, как вам нужно.",
  },
];

export default function WhySiteSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          href="#"
          withBr={false}
          kicker="#Что мы предлагаем"
          title=""
          titleAccent="Garantex AI — ваш круглосуточный медиа-департамент"
        />

        <div className="flex items-center w-full justify-center">
          <p className={styles.underText}>Мы заменяем целый штат сотрудников одним AI-агентом. Это не генератор случайных текстов, а система, обученная на экспертизе вашего бизнеса.</p>
        </div>

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
