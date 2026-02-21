import React from "react";
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
    <section className="py-[56px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <HeaderWrapper
          align="center"
          withBr={false}
          href=""
          kicker="#Проблема"
          title="ПОЧЕМУ, БИЗНЕС ТЕРЯЕТ КЛИЕНТОВ"
          titleAccent="В СОЦСЕТЯХ"
        />

        <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-between mt-7 items-stretch">
          {cards.map((card, i) => (
            <article
              key={i}
              className="bg-[#0b0b0b] rounded-[18px] p-[18px] flex-[1_1_300px] min-w-[260px] border border-[rgba(255,140,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col"
            >
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[180px] lg:h-[140px] object-cover rounded-[10px] block"
                />
              </div>

              <h4 className="text-white my-3 text-[18px] leading-[1.1]">
                {card.title}
              </h4>

              <ul className="list-none p-0 m-0 mt-2">
                {card.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 items-start mt-3 text-[#d6d6d6] text-[14px]"
                  >
                    <span
                      className="bg-[#c62828] text-white w-8 h-8 rounded-full inline-flex items-center justify-center shrink-0 basis-8"
                      aria-hidden
                    >
                      👎
                    </span>
                    <span className="leading-[1.2]">{b}</span>
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