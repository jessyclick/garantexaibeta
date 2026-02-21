import HeaderWrapper from "../headerWrapper";

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    icon: "/assets/pred-0001.png",
    title: "Системность:",
    description: "Контент выходит по графику, без сбоев и выходных.",
  },
  {
    icon: "/assets/pred-0002.png",
    title: "Качество:",
    description:
      "Глубокие лонгриды с фактурой, кейсами и аналитикой, а не поверхностный рерайт.",
  },
  {
    icon: "/assets/pred-0003.png",
    title: "Масштаб:",
    description:
      "Одна ваша идея превращается в 10 единиц контента для разных площадок.",
  },
  {
    icon: "/assets/pred-0004.png",
    title: "Ваш Tone of Voice:",
    description:
      "Строго B2B, живо для соцсетей, SEO-стиль для сайта, провокационно для виральности — пишем так, как вам нужно.",
  },
];

export default function WhySiteSection() {
  return (
    <section className="py-[72px] px-5 text-white">
      <div className="max-w-[1200px] mx-auto">
        <HeaderWrapper
          href="#"
          withBr={false}
          kicker="#Что мы предлагаем"
          title=""
          titleAccent="Garantex AI — ваш круглосуточный медиа-департамент"
        />

        <div className="flex items-center w-full justify-center mt-6">
          <p className="text-white max-w-[840px] text-center font-['Inter',_sans-serif] text-[15px] sm:text-[22px] font-medium leading-[22.004px] m-0 [&>span]:text-[#FFBC52]">
            Мы заменяем целый штат сотрудников одним AI-агентом. Это не
            генератор случайных текстов, а система, обученная на экспертизе
            вашего бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[32px] mt-[48px]">
          {reasonsData.map((reason) => (
            <article
              key={reason.title}
              className="flex gap-x-[20px] md:gap-x-[32px] border border-transparent rounded-[12px] relative transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center min-w-[100px] max-w-[100px] h-[100px] shrink-0">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[25px] lg:text-[30px] font-normal leading-[1.12] m-0">
                  {reason.title}
                </h3>
                <p className="text-white font-['Inter',_sans-serif] text-[15px] lg:text-[19px] font-normal leading-[22.004px] m-0">
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