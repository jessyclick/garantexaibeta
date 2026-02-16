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
    image: "/assets/vo-1.png",
    title: "Voice Cloning",
    bullets: [
      "Мы создаём точный слепок вашего голоса.",
      "Зритель из США или Бразилии уверен: вы говорите на его родном языке — своим же голосом.",
    ],
  },
  {
    image: "/assets/vo-2.png",
    title: "LipSync AI",
    bullets: [
      "Идеальная синхронизация губ, мимики и челюсти под новую речь.",
      "Без “обрезанных губ”, искажений и дешёвых эффектов.",
    ],
  },
  {
    image: "/assets/vo-3.png",
    title: "Интеллектуальный перевод",
    bullets: [
      "Мы адаптируем: • культурные особенности • сленг • профессиональные термины • шутки и метафоры",
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
          kicker="#Технологии"
          title="Garantex AI — это не перевод."
          titleAccent=" Это полная локализация личности."
        />

<div className="flex items-center w-full justify-center">
          <p className={styles.underText}>Мы сохраняем вашу индивидуальность на любом языке: голос, эмоции, мимику, стиль речи, ритм.</p>
        </div>

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
                      <img src="/assets/icon_glike.png" alt="" />
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
