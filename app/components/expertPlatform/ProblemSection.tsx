import HeaderWrapper from "../headerWrapper";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  img: string;
};

type Props = {
  cards?: CardProps[];
};

const defaultCards: CardProps[] = [
  {
    icon: "🚨",
    title: "ДОРОГОЙ ШТАТ:",
    img: "/assets/problem-1.png",
    description:
      "Хороший редактор + копирайтер + дистрибьютор обходятся в 150,000+ ₽/мес.",
  },
  {
    icon: "⚡",
    title: "ХАОС И ПРОСТОЙ:",
    img: "/assets/problem-2.png",
    description:
      "Творческие кризисы, болезни, долгие согласования. Статьи выходят раз в месяц и не приносят результата.",
  },
  {
    icon: "📋",
    title: "РАБОТА «В СТОЛ»:",
    img: "/assets/problem-3.png",
    description:
      "Вы написали крутую статью для сайта, но её никто не увидел. А на адаптацию под VC или Habr нет времени.",
  },
  {
    icon: "🔧",
    title: "СЛОЖНЫЕ АЛГОРИТМЫ:",
    img: "/assets/problem-4.png",
    description:
      "Текст, который завел в Дзене, могут заминусовать на Хабре, если не знать специфику площадки.",
  },
];

export default function WhyDropBlogsSection({ cards = defaultCards }: Props) {
  return (
    <section className="py-[80px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <HeaderWrapper
          kicker="#Проблема"
          title="ПОЧЕМУ 80% КОМПАНИЙ"
          titleAccent="БРОСАЮТ ВЕСТИ БЛОГИ?"
        />

        <p className="text-center max-w-[700px] mx-auto mb-[40px] md:mb-[60px] text-white font-['Inter',_sans-serif] text-[16px] md:text-[22px] font-medium leading-[22.004px]">
          <span className="bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent bg-origin-border [-webkit-background-clip:text]">
            Контент-маркетинг — это золото,
          </span>{" "}
          но добывать его вручную слишком дорого и сложно
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px] mt-[40px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col-reverse sm:flex-row gap-[24px] sm:gap-[16px] p-[24px] sm:p-[32px] rounded-[24px] sm:rounded-[16px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(155.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] backdrop-blur-[10px] transition-all duration-300 relative overflow-hidden"
            >
              {/* Иконка (показывается только на планшетах и десктопах) */}
              <div className="hidden sm:block w-[32px] min-w-[32px] max-w-[32px] mb-4 shrink-0">
                <img
                  src="/assets/icon_dislike.png"
                  alt=""
                  className="w-full h-auto block"
                />
              </div>

              {/* Текстовый блок: Десктоп */}
              <div className="hidden sm:flex flex-col gap-1 flex-1">
                <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[25px] sm:text-[32px] font-normal leading-normal m-0">
                  {card.title}
                </h3>
                <p className="text-white font-['Inter',_sans-serif] text-[15px] sm:text-[20px] font-normal leading-[24px] m-0">
                  {card.description}
                </p>
              </div>

              {/* Текстовый блок: Мобилка */}
              <div className="flex sm:hidden flex-col gap-4 flex-1">
                <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[25px] font-normal leading-normal m-0">
                  {card.title}
                </h3>
                <div className="flex gap-2 items-start">
                  <div className="w-[32px] min-w-[32px] max-w-[32px] shrink-0 mt-1">
                    <img
                      src="/assets/icon_dislike.png"
                      alt=""
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white font-['Inter',_sans-serif] text-[15px] font-normal leading-[24px] m-0">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Блок с картинкой */}
              <div className="w-full sm:w-[185px] sm:min-w-[185px] shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}