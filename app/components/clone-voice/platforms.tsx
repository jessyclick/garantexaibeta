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
    icon: "/assets/vq-1.png",
    description: "IVR, автоответчики, звонки роботов.",
  },
  {
    name: "Маркетинг",
    icon: "/assets/vq-2.png",
    description: "реклама, презентации, ролики для маркетплейсов.",
  },
  {
    name: "Образование",
    icon: "/assets/vq-3.png",
    description: "курсы, лекции, аудиокниги.",
  },
  {
    name: "Контент",
    icon: "/assets/vq-4.png",
    description: "YouTube, Shorts, Reels, подкасты.",
  },
  {
    name: "Локализация",
    icon: "/assets/vq-5.png",
    description: "дубляж и переводы на десятки языков.",
  },
];

export default function PlatformsSection({ platforms = defaultPlatforms }: Props) {
  return (
    <section className="relative overflow-hidden px-5 py-[100px]">
      {/* [&_.header]:mb-6 заменяет :global(.header) { margin-bottom: 24px; } */}
      <div className="relative z-10 mx-auto max-w-[1400px] [&_.header]:mb-6">
        <HeaderWrapper
          kicker="#Сценарии использования"
          title="Идеальный голос"
          titleAccent=" нужен везде"
          withBr={false}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center overflow-hidden rounded-2xl px-4 py-6 text-center transition-all duration-300 sm:px-6 sm:py-8"
            >
              {platform.icon && (
                <div className="mb-4 flex h-[74px] w-auto items-center justify-center">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <p className="font-['Bebas_Neue'] text-[22px] leading-normal text-white">
                {platform.name}
              </p>
              <p className="font-['Inter'] text-[13px] font-normal leading-normal text-center sm:text-[19px] sm:leading-[22px]">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}