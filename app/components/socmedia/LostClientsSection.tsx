import React from "react";
import styles from "./lostClients.module.scss";
import HeaderWrapper from "../headerWrapper";

type Card = {
  image: string;
  title: string;
  bullets: string[];
};

const defaultCards: Card[] = [
  {
    image: "/assets/why-1.png",
    title: "НЕТ ВРЕМЕНИ ЭТИМ ЗАНИМАТЬСЯ",
    bullets: [
      "Алгоритмы перестают показывать профиль новой аудитории",
      "До 70% потерянных клиентов",
    ],
  },
  {
    image: "/assets/why-2.png",
    title: "НАЙМЁМ SMM-МЕНЕДЖЕРА",
    bullets: [
      "Один человек ведёт 1–2 площадки",
      "10+ потенциальных каналов остаются пустыми",
    ],
  },
  {
    image: "/assets/why-3.png",
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
