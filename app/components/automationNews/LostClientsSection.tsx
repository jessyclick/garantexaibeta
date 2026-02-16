import React from "react";
import styles from "../socmedia/lostClients.module.scss";
import HeaderWrapper from "../headerWrapper";

type Card = {
  image: string;
  title: string;
  bullets: string[];
};

const defaultCards: Card[] = [
  {
    image: "/assets/news-1.png",
    title: "Пока вы медлите",
    bullets: [
      "Алгоритмы не продвигают тех, кто опаздывает.",
    ],
  },
  {
    image: "/assets/news-2.png",
    title: "Без свежих постов",
    bullets: [
      "Один человек ведёт 1–2 площадки",
    ],
  },
  {
    image: "/assets/news-3.png",
    title: "Неэффективный подход",
    bullets: [
      "60 000–100 000 ₽ в месяц, больничные, выходные.",
    ],
  },
];

export default function LostClientsSection({ cards = defaultCards }: { cards?: Card[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          align="center"
          withBr={false}
          href=""
          kicker="#Проблема"
          title="ПОЧЕМУ, БИЗНЕС ТЕРЯЕТ КЛИЕНТОВ"
          titleAccent="В СОЦСЕТЯХ"
        />

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <article key={i} className={`${styles.card}`}>
              <div className={styles.imageWrap}>
                <img src={card.image} alt={card.title} />
              </div>

              <h4 className={styles.cardTitle}>{card.title}</h4>

              <ul className={styles.bullets}>
                {card.bullets.map((b, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <span className={styles.badge} aria-hidden>
                      <img src="/assets/icon_dislike.png" alt="" />
                    </span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="flex items-center w-full justify-center">
          <p className={styles.underText}><span>решение —</span> система, которая работает непрерывно и масштабируется без сотрудников.</p>
        </div>
      </div>
    </section>
  );
}
