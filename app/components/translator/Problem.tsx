import React from "react";
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
    <section className="py-[56px]">
      <div className="max-w-[1300px] mx-auto px-5">
        <HeaderWrapper
          align="center"
          withBr={true}
          href=""
          kicker="#Технологии"
          title="Garantex AI — это не перевод."
          titleAccent=" Это полная локализация личности."
        />

        <div className="flex items-center w-full justify-center">
          <p className="mt-8 text-white font-['Bebas_Neue',_sans-serif] text-[33px] font-normal leading-normal text-center">
            Мы сохраняем вашу индивидуальность на любом языке: голос, эмоции,
            мимику, стиль речи, ритм.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-between mt-7 items-stretch flex-wrap">
          {cards.map((card, i) => (
            <article
              key={i}
              className="border border-transparent rounded-[18px] p-[42px_32px] flex-[1_1_300px] min-w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]"
            >
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[180px] lg:h-[140px] object-cover rounded-[10px] block"
                />
              </div>

              <h4 className="text-white mt-8 mb-0 font-['Bebas_Neue',_sans-serif] text-[33.275px] font-normal leading-normal md:whitespace-nowrap">
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
                      <img src="/assets/icon_glike.png" alt="" />
                    </span>
                    <span className="text-white font-['Inter',_sans-serif] text-[21.074px] font-normal leading-[24.406px]">
                      {b}
                    </span>
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