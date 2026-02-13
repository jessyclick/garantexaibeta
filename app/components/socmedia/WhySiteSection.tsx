import HeaderWrapper from "../headerWrapper";
import styles from "./whySite.module.scss";

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    icon: "/assets/icon_d-1.png",
    title: "Глобальный мониторинг",
    description:
      'Сканирует СМИ, Telegram-каналы, блоги, RSS-ленты и тематические ресурсы в реальном времени.',
  },
  {
    icon: "/assets/icon_d-2.png",
    title: "Deep Rewrite 2.0:",
    description:
      "Полностью переписывает текст: новая структура, новые формулировки, сохранённые факты.",
  },
  {
    icon: "/assets/icon_d-3.png",
    title: "Интеллектуальный фильтр:",
    description:
      "Отбрасывает спам, кликбейт, казино, политмусор и нерелевантные инфоповоды.",
  },
  {
    icon: "/assets/icon_d-4.png",
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
          title="CMM контент-завод, "
          titleAccent="который работает на вас"
        />

        <div className="flex items-center w-full justify-center">
          <p className={styles.underText}>Мы не просто подключаем «бота». <span>Мы внедряем полноценную маркетинговую систему</span> на базе искусственного интеллекта.</p>
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
