import Image, { StaticImageData } from "next/image";
import HeaderWrapper from "../headerWrapper";

type PricingTier = {
  label: string;
  icon: string | StaticImageData;
  description: string;
  class: string;
  pricing: {
    duration: string;
    price: number;
    unit?: string;
    mainPrice?: boolean;
  }[];
  features: string[];
  mainLabel?: string;
  buttonLabel: string;
};

type Props = {
  tariffs?: PricingTier[];
};

const defaultTariffs: PricingTier[] = [
  {
    label: "ПЕРЕВОД АУДИО",
    icon: "/assets/icon_pp1.png",
    description: "Идеально для подкастов, дикторских дорожек, лекций.",
    class: "firstGradient",
    pricing: [
      { duration: "1 минута", price: 750, unit: "₽" },
      { duration: "1-5 минут", price: 500, unit: "₽ / сек" },
      { duration: "От 5 минут", price: 350, unit: "₽ / сек" },
    ],
    features: [
      "ИИ-перевод с адаптацией смысла",
      "Очистка шумов, нормализация",
      "Озвучка клонированным голосом",
    ],
    buttonLabel: "Выбрать",
  },
  {
    label: "ПЕРЕВОД ВИДЕО",
    icon: "/assets/icon_pp2.png",
    description: "Полная локализация видео: перевод → озвучка → подготовка.",
    class: "secondGradient",
    pricing: [
      { duration: "1 минута", price: 1000, unit: "₽" },
      { duration: "1-5 минут", price: 750, unit: "₽ / сек" },
      { duration: "От 5 минут", price: 500, unit: "₽ / сек" },
    ],
    features: [
      "Перевод и адаптация под контекст",
      "Озвучка клонированным голосом",
      "Полная подготовка к публикации",
    ],
    buttonLabel: "Выбрать",
  },
  {
    label: "TG BOT",
    icon: "/assets/icon_pp3.png",
    description: "Собственный Telegram-бот для полной локализации в один клик.",
    class: "thirdGradient",
    pricing: [
      { duration: "Подключение", price: 25000, unit: "₽", mainPrice: true },
    ],
    mainLabel: "разово",
    features: [
      "Загрузка видео/аудио",
      "Выбор языка перевода",
      "Автопубликация на канал",
    ],
    buttonLabel: "Выбрать",
  },
];

export default function TariffsSection({ tariffs = defaultTariffs }: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(100,150,255,0.08)_0%,transparent_70%)] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-[60px]">
          <HeaderWrapper
            kicker="#тарифы"
            title="ТАРИФЫ И УСЛУГИ"
            titleAccent="GARANTEX AI"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tariffs.map((tariff, index) => {
            const isHighlighted = index === 1;

            return (
              <div
                key={index}
                className={`rounded-[16px] p-6 sm:p-8 backdrop-blur-[10px] transition-all duration-300 relative flex flex-col h-full hover:-translate-y-1 ${
                  isHighlighted
                    ? "shadow-[0_0_30px_rgba(255,156,28,0.15)] hover:shadow-[0_12px_40px_rgba(255,156,28,0.25)]"
                    : "hover:shadow-[0_12px_40px_rgba(255,156,28,0.1)]"
                } ${tariff.class}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center text-[28px] sm:text-[32px] min-w-[40px] sm:min-w-[48px]">
                    <Image
                      src={tariff.icon}
                      alt={tariff.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[16px] sm:text-[35px] font-normal leading-[1.3] uppercase tracking-[0.5px] m-0">
                    {tariff.label}
                  </h3>
                </div>

                <p className="text-white font-['Inter',_sans-serif] text-[13px] sm:text-[17px] font-normal m-0 mb-5 sm:mb-6">
                  {tariff.description}
                </p>

                <div className="flex flex-col gap-4 mb-6">
                  {tariff.pricing.map((tier, tierIndex) => (
                    <div
                      key={tierIndex}
                      className="flex justify-between items-center py-3 border-b border-[rgba(255,156,28,0.1)] last:border-b-0"
                    >
                      <span className="text-white font-['Inter',_sans-serif] text-[12px] sm:text-[15px] font-normal">
                        {tier.duration}
                      </span>
                      <div className="flex flex-col items-end gap-[2px]">
                        <span
                          className={
                            tier.mainPrice
                              ? "text-[16px] sm:text-[18px] font-bold bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]"
                              : "text-white font-['Inter',_sans-serif] text-[14px] sm:text-[15px] font-bold"
                          }
                        >
                          {tier.mainPrice ? "ОТ " : ""}
                          {tier.price.toLocaleString("ru-RU")} {tier.unit}
                        </span>
                        {tariff.mainLabel && (
                          <span className="text-[10px] sm:text-[11px] text-[#666] lowercase">
                            {tariff.mainLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-[1px] bg-[rgba(255,156,28,0.15)] my-6"></div>

                <div className="flex-1 mb-6">
                  <h4 className="text-[12px] font-semibold m-0 mb-4 text-[#ff9c1c] uppercase tracking-[0.5px]">
                    ЧТО ВХОДИТ:
                  </h4>
                  <ul className="list-none m-0 p-0 flex flex-col gap-3">
                    {tariff.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-white font-['Inter',_sans-serif] text-[12px] sm:text-[17px] font-normal pl-[20px] sm:pl-[24px] relative before:content-[''] before:bg-[url('/assets/feauture-icon.png')] before:bg-contain before:bg-no-repeat before:bg-center before:w-[20px] before:h-[20px] before:absolute before:left-0 before:text-[#ff9c1c] before:font-bold before:text-[14px]"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-[12px] sm:py-[14px] px-[24px] sm:px-[32px] rounded-lg text-[12px] sm:text-[14px] uppercase tracking-[0.5px] cursor-pointer transition-all duration-300 active:scale-[0.98] ${
                    isHighlighted
                      ? "bg-[linear-gradient(135deg,#ff9c1c_0%,#f9b953_100%)] text-black font-semibold border-none hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,156,28,0.3)]"
                      : "bg-transparent border-2 border-[rgba(255,156,28,0.4)] text-[#ff9c1c] font-semibold hover:border-[rgba(255,156,28,0.7)] hover:bg-[rgba(255,156,28,0.05)]"
                  }`}
                >
                  {tariff.buttonLabel}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}