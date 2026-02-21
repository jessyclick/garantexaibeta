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
    name: "VC.RU",
    icon: "/assets/vc-ru.png",
    description: "Бизнес, стартапы, маркетинг. Идеально для B2B продаж.",
  },
  {
    name: "HABR",
    icon: "/assets/habr.png",
    description: "IT, разработка, гаджеты. Для HR-бренда и поиска технарей.",
  },
  {
    name: "TENCHAT",
    icon: "/assets/tenchat.png",
    description: "Деловая соцсеть. Для нетворкинга и тендеров.",
  },
  {
    name: "ДЗЕН",
    icon: "/assets/dzen.png",
    description: "Массовый охват. Для прогрева широкой аудитории.",
  },
  {
    name: "Т—Ж",
    icon: "/assets/pikabu.png",
    description: "Виральность и узнаваемость.",
  },
  {
    name: "MEDIUM",
    icon: "/assets/medium.png",
    description: "SEO-трафик и внешние ссылки.",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-6">
          <HeaderWrapper
            kicker="#Где работает"
            title="ОДНА СТАТЬЯ РАБОТАЕТ ВЕЗДЕ,"
            titleAccent="ГДЕ ЕСТЬ ВАШИ КЛИЕНТЫ"
          />
        </div>

        <p className="text-center text-[16px] md:text-[18px] leading-[1.5] text-[#ccc] m-0 mb-[40px] md:mb-[60px]">
          Мы адаптируем контент под алгоритмы ключевых платформ:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-[40px]">
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

              <p className="text-white font-['Inter',_sans-serif] font-normal text-[13px] sm:text-[19px] leading-[22px] tracking-normal text-center m-0">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}