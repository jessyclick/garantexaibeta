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
    image: "/assets/voice-1.png",
    title: "Записывать голос самому",
    bullets: [
      "Шумы, переозвучки, неправильный тон, 20 дублей из-за одной фразы.",
    ],
  },
  {
    image: "/assets/voice-2.png",
    title: "Дикторы — дорого и медленно",
    bullets: [
      "Поиск, согласования, правки, сроки “через неделю”. Один ролик превращается в проект.",
    ],
  },
  {
    image: "/assets/voice-3.png",
    title: "Невозможно масштабироваться",
    bullets: [
      "Хотите 10 видео в день? Озвучка становится узким горлышком, которое всё тормозит.",
    ],
  },
];

export default function ProblemSection({ cards = defaultCards }: { cards?: Card[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          align="center"
          withBr={true}
          href=""
          kicker="#Проблема"
          title="Традиционная озвучка "
          titleAccent="— дорого, долго и неудобно"
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
          <p className={styles.underText}><span>Итог:  </span>звук тормозит проекты и увеличивает бюджет.</p>
        </div>
      </div>
    </section>
  );
}
