import React from "react";
import styles from "./styles/lostClients.module.scss";
import HeaderWrapper from "./headerWrapper";

type Card = {
  image: string;
  title: string;
  bullets: string[];
};

const defaultCards: Card[] = [
  {
    image: "/assets/problem_clock.png",
    title: "НЕТ ВРЕМЕНИ ЭТИМ ЗАНИМАТЬСЯ",
    bullets: [
      "Алгоритмы перестают показывать профиль новой аудитории",
      "До 70% потерянных клиентов",
    ],
  },
  {
    image: "/assets/problem_smm.png",
    title: "НАЙМЁМ SMM-МЕНЕДЖЕРА",
    bullets: [
      "Один человек ведёт 1–2 площадки",
      "10+ потенциальных каналов остаются пустыми",
    ],
  },
  {
    image: "/assets/problem_ads.png",
    title: "БУДЕМ ПОКУПАТЬ РЕКЛАМУ",
    bullets: [
      "Бюджет закончился — клиенты исчезли",
      "Полная зависимость от платного трафика",
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
            <article key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={card.image} alt={card.title} />
              </div>

              <h4 className={styles.cardTitle}>{card.title}</h4>

              <ul className={styles.bullets}>
                {card.bullets.map((b, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <span className={styles.badge} aria-hidden>
                      👎
                    </span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
