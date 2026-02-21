import HeaderWrapper from "../headerWrapper";
import CTAButton from "../CTAButton";

type ImplementationFeature = {
  label: string;
};

type AdditionalOption = {
  title: string;
  description: string;
};

type Props = {
  features?: ImplementationFeature[];
  additionalOptions?: AdditionalOption[];
  price?: number;
  monthlyPrice?: number;
};

const defaultFeatures: ImplementationFeature[] = [
  { label: "Маркетинговый анализ и создание «Базы знаний»." },
  { label: "Настройка и обучение нейросети вашему стилю." },
  { label: "Контент-стратегия на месяц." },
  { label: "Генерация первых экспертных статей." },
  { label: "Настройка шаблонов адаптации под 1 платформу." },
  { label: "SEO-оптимизация и переинтеграция." },
];

const defaultAdditionalOptions: AdditionalOption[] = [
  {
    title: "Масштабирование:",
    description: "+15 000 ₽ за подключение новой площадки (Habr, TenChat и др.).",
  },
  {
    title: "Визуал:",
    description: "10 000 ₽ (пак изображений к статьям).",
  },
  {
    title: "Публикация под ключ:",
    description: "Индивидуальный расчет (мы ведем ваш блог полностью).",
  },
];

export default function ImplementationSection({
  features = defaultFeatures,
  additionalOptions = defaultAdditionalOptions,
  price = 35000,
  monthlyPrice = 10000,
}: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-[40px]">
          <HeaderWrapper
            kicker="#Внедрение системы"
            title="НАЧНИТЕ МЕДИА-ЭКСПАНСИЮ"
            titleAccent="ПО ЦЕНЕ ОДНОЙ СТАТЬИ"
          />
        </div>

        <div className="relative p-0 rounded-[12px] md:rounded-[20px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(180deg,#001613_9.43%,#00302B_52.39%,#001613_87.36%),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]">
          <div className="absolute -left-[80px] -top-[40px] bottom-0 w-[127px] z-10 hidden xl:block">
            <img src="/assets/element-png.png" alt="" />
          </div>

          <div className="p-[24px_16px] sm:p-[32px_24px] md:p-[48px] relative z-20">
            <div className="flex flex-col items-center justify-center pb-[32px]">
              <p className="text-[#38DDCC] text-center font-['kurut'] text-[50.88px] font-normal leading-normal tracking-[1.526px] m-0">
                #Внедрение системы
              </p>
              <h3 className="text-white text-center font-['Bebas_Neue',_sans-serif] text-[18px] sm:text-[22px] md:text-[45px] font-normal leading-[1.3] m-0">
                ВАШ ПЕРСОНАЛЬНЫЙ AI-АГЕНТ ПОД КЛЮЧ
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[48px]">
              {/* Левая колонка */}
              <div className="flex flex-col">
                <h4 className="text-[#FFBF6B] font-['Inter',_sans-serif] text-[14px] sm:text-[19px] font-bold leading-[22.004px] tracking-[0.5px] uppercase m-0 mb-[16px] sm:mb-[24px]">
                  Что входит:
                </h4>

                <ul className="list-none m-0 mb-[32px] p-0 flex flex-col gap-[16px]">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-white font-['Inter',_sans-serif] text-[14px] sm:text-[19px] font-normal leading-none pl-[20px] sm:pl-[24px] relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#FFBF6B] before:font-bold before:text-[18px]"
                    >
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-start gap-[20px] pt-[24px] border-t border-[rgba(255,156,28,0.2)]">
                  <div className="flex items-baseline gap-[12px]">
                    <span className="text-white font-['Bebas_Neue',_sans-serif] text-[24px] sm:text-[28px] md:text-[52px] font-normal leading-normal">
                      {price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-white font-['Bebas_Neue',_sans-serif] text-[12px] sm:text-[30px] font-normal leading-normal">
                      (разово)
                    </span>
                  </div>

                  <CTAButton
                    href="#"
                    icon={
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z"
                          fill="#0E0807"
                        />
                      </svg>
                    }
                  >
                    Заказать внедрение
                  </CTAButton>
                </div>
              </div>

              {/* Правая колонка */}
              <div className="flex flex-col items-start gap-[16px]">
                <ul className="list-none w-full m-0 p-[30px_40px] flex flex-col gap-[24px] rounded-[28px] bg-[#011614]">
                  <h4 className="text-[#FFBF6B] font-['Inter',_sans-serif] text-[14px] sm:text-[19px] font-bold leading-[22.004px] tracking-[0.5px] uppercase m-0">
                    Дополнительные опции:
                  </h4>
                  {additionalOptions.map((option, index) => (
                    <li
                      key={index}
                      className="pl-[24px] sm:pl-[24px] p-[12px] sm:p-0 rounded-[8px] transition-all duration-300 relative hover:bg-[rgba(255,156,28,0.08)] before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#FFBF6B] before:font-bold before:text-[18px]"
                    >
                      <div className="text-white font-['Inter',_sans-serif] text-[13px] sm:text-[19px] font-bold leading-[25px] mb-[8px] capitalize">
                        {option.title}
                      </div>
                      <div className="text-white font-['Inter',_sans-serif] text-[13px] sm:text-[19px] font-normal leading-[25px]">
                        {option.description}
                      </div>
                    </li>
                  ))}
                  <div className="mt-[24px] sm:mt-[32px] pt-0 sm:pt-[16px] text-white text-center sm:text-left font-['Bebas_Neue',_sans-serif] text-[11px] sm:text-[20px] font-normal leading-normal tracking-[0.6px]">
                    ЕЖЕМЕС. ПОДДЕРЖКА ОТ {monthlyPrice.toLocaleString("ru-RU")} ₽
                    (ПО ЖЕЛАНИЮ)
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}