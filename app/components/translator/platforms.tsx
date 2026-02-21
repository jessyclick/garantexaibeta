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
    name: "Бизнес",
    icon: "/assets/icon_xclode.png",
    description: "95% мировой аудитории вас не понимает",
  },
  {
    name: "Маркетинг",
    icon: "/assets/icon_xclode.png",
    description: "CPM в США/Европе выше в 5–10 раз",
  },
  {
    name: "Образование",
    icon: "/assets/icon_xclode.png",
    description: "Роботизированная озвучка рушит доверие и конверсию",
  },
  {
    name: "Контент",
    icon: "/assets/icon_xclode.png",
    description: "Переснимать уроки на других языках — невозможно физически",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-6">
          <HeaderWrapper
            kicker="#Цена языкового барьера"
            title="Сколько денег вы теряете,"
            titleAccent="ограничиваясь одним языком?"
            withBr={false}
          />
        </div>

        <p className="text-center text-[16px] md:text-[18px] leading-[1.5] text-[#ccc] m-0 mb-[40px] md:mb-[60px]">
          Ваш контент может зарабатывать в 5–10 раз больше — но остаётся внутри СНГ, где CPM минимальный.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-[40px]">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-[24px_16px] sm:p-[32px_24px] rounded-[16px] transition-all duration-300 relative overflow-hidden"
            >
              {platform.icon && (
                <div className="w-auto h-[42px] flex items-center justify-center mb-4">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

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