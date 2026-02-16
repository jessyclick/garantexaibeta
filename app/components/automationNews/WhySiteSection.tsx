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
    title: "Глобальный мониторинг:",
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
          withBr={true}
          kicker="#Что вы получаете"
          title={<span>Персональная новостная редакция,</span>}
          titleAccent={<span className="color-white">которая работает 24/7</span>}
        />

        <div className="flex items-center w-full justify-center">
          <p className={styles.underText}>Это не парсер, не копипаст и не “бот для рерайта”. Это полноценная ИИ-система, которая заменяет новостной отдел:</p>
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
