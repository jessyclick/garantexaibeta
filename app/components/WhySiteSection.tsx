import HeaderWrapper from "./headerWrapper";

interface ReasonCard {
  number: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    number: "01",
    title: "ДОРОГАЯ КОНТЕКСТНАЯ РЕКЛАМА",
    description:
      'Остановили оплату — трафик обнулился. Конкуренты "скликивают" и сливают ваш баланс, а долгосрочного актива не появляется.',
  },
  {
    number: "02",
    title: "КОНТЕНТ БЕЗ СИСТЕМЫ НЕ ДАЁТ РЕЗУЛЬТАТА",
    description:
      "Когда статьи публикуются хаотично, поисковики не видят стабильности, а клиенты — экспертности. Без регулярности даже хороший контент теряет ценность.",
  },
  {
    number: "03",
    title: "КОНКУРЕНТЫ ЗАНИМАЮТ ПЕРВЫЕ СТРОЧКИ",
    description:
      "У них больше контента и он закрывает все вопросы клиента. Ваш сайт остаётся «невидимкой» — заявки уходят к ним.",
  },
  {
    number: "04",
    title: "РУЧНОЕ SEO УСТАРЕЛО",
    description:
      "Пока специалисты неделями подбирают ключи и пишут статьи, ИИ-системы создают сотни оптимизированных материалов и выводят сайты в топ в разы быстрее.",
  },
];

export default function WhySiteSection() {
  return (
    <section className="py-[72px] px-5 text-white relative">
      <img className="mix-blend-lighten absolute w-full h-full l-0 top-0 object-cover" src="/assets/auto-sc.png" alt="" />
      <div className="max-w-[1040px] mx-auto">
        <HeaderWrapper
          href="#"
          kicker="#Причина"
          title="ПОЧЕМУ ВАШ САЙТ ДО СИХ ПОР"
          titleAccent="НЕ ПРИНОСИТ КЛИЕНТОВ"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {reasonsData.map((reason) => (
            <article
              key={reason.number}
              className="flex gap-x-8 border border-transparent rounded-xl relative transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center min-w-[44px] h-[44px] text-[#FF9C1C] rounded-lg font-['Bebas_Neue',_sans-serif] text-[20px] font-semibold mb-4 border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(163deg,#000_9.05%,#212121_52.54%,#000_88.01%),linear-gradient(124.35deg,#FE7905_3.69%,#2A0C00_45.84%,#A93301_98.89%)]">
                {reason.number}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-['Bebas_Neue'] text-[30px] font-normal leading-[1.12]">
                  {reason.title}
                </h3>
                <p className="text-white font-['Inter'] text-[19px] font-normal leading-[22.004px] m-0">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}