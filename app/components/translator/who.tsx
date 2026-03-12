import HeaderWrapper from "../headerWrapper";

type PlatformCard = {
  name: string;
  icon?: string;
  description: string;
};

type Props = {
  platforms?: PlatformCard[];
};

const defaultPlatforms: PlatformCard[] = [
  {
    name: "Блогер / YouTube-автор",
    icon: "/assets/loc-1.png",
    description: "Выходите на англоязычный рынок. Получайте валютную монетизацию.",
  },
  {
    name: "Онлайн-школа / Эксперт / Наставник",
    icon: "/assets/loc-2.png",
    description: "Один курс → продажи по всему миру. Расходы те же — прибыль кратно выше.",
  },
  {
    name: "E-commerce бренды",
    icon: "/assets/loc-3.png",
    description: "Видеообзоры для Amazon, AliExpress, Wildberries Global.",
  },
  {
    name: "IT / SaaS / стартапы",
    icon: "/assets/loc-4.png",
    description: "Онбординг, презентации, питчи — на любом языке.",
  },
  {
    name: "Арбитражники / креаторы",
    icon: "/assets/loc-5.png",
    description: "Перевод вирусных роликов → выход в новые регионы → рост охватов.",
  },
];

export default function WhoSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-6">
          <HeaderWrapper
            kicker="#Кому подходит?"
            title="Локализация — ваш следующий шаг,"
            titleAccent=" если вы:"
            withBr={true}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-[40px]">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-[24px_16px] sm:p-[32px_24px] rounded-[16px] transition-all duration-300 relative overflow-hidden"
            >
              {platform.icon && (
                <div className="w-auto h-[100px] flex items-center justify-center mb-4">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <p className="font-bebas mt-4 mb-4 text-[42px] leading-[100%] tracking-normal text-center">
  {platform.name}
</p>
              <p className="text-white font-['Inter',_sans-serif] font-normal text-[13px] sm:text-[19px] leading-[22px] text-center m-0">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}