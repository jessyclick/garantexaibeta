import HeaderWrapper from "./headerWrapper";

type FeatureBox = {
  icon: React.ReactNode;
  title: string;
  description: string;
  size?: "large" | "small";
};

type Props = {
  imageUrl?: string;
  mainFeature?: FeatureBox;
  secondaryFeatures?: FeatureBox[];
};

const defaultMainFeature: FeatureBox = {
  icon: "/assets/icon_shesterenka.png",
  title: "ПРИНЦИП РАБОТЫ",
  description:
    "Нейросеть подбирает темы под реальные поисковые запросы, ИИ-копирайтер пишет тексты в вашем стиле и делает их SEO / GEO / AEO-оптимизированными.. Система публикует статьи автоматически по расписанию, создавая стабильный поток контента без вашего участия.",
  size: "large",
};

const defaultSecondaryFeatures: FeatureBox[] = [
  {
    icon: "/assets/icon_stairs.png",
    title: "РОСТ БЕЗ ЗАТРАТ",
    description:
      "Постепенное увеличение органического трафика без необходимости вложений в рекламу. Контент сам привлекает аудиторию.",
    size: "small",
  },
  {
    icon: "/assets/icon_tower.png",
    title: "РАБОТАЕТ ГОДАМИ",
    description:
      "Созданные статьи сохраняют позиции в поиске и продолжают приносить посетителей долгое время после публикации.",
    size: "small",
  },
];

export default function PunctureSection({
  imageUrl,
  mainFeature = defaultMainFeature,
  secondaryFeatures = defaultSecondaryFeatures,
}: Props) {
  // Выносим сложный класс с градиентной рамкой и эффектами в отдельную константу
  const featureBoxClasses =
    "border border-transparent rounded-[12px] p-6 GradientBlack backdrop-blur-[10px] transition-all duration-300 flex flex-col hover:-translate-y-1";

  return (
    <section className="py-[80px] px-5 relative">
      <img className="absolute left-0 bottom-0 w-[80px]" src="/assets/element-002.png" alt="" />
      <img className="absolute right-0 top-0 w-[80px]" src="/assets/element-001.png" alt="" />
      
      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">
        {/* Левая часть - изображение */}
        <div className="flex items-center justify-center min-h-[300px] lg:min-h-[600px]">
          <img
            src="/assets/gg-2.webp"
            alt="Иллюстрация решения"
            className="w-full h-auto block rounded-[16px]"
          />
        </div>

        {/* Правая часть - контент */}
        <div className="flex flex-col w-full lg:min-w-[680px]">
          <div className="mb-3">
            <HeaderWrapper
              align="left"
              withBr={false}
              href=""
              kicker="#Решение"
              title="ЧТО ЭТО И ПОЧЕМУ"
              titleAccent="ЭТО РАБОТАЕТ"
            />
          </div>

          {/* Главный бокс */}
          <div className={`${featureBoxClasses} mb-6`}>
            <div className="flex items-center gap-3 mb-3">
              {typeof mainFeature.icon === "string" ? (
                <img
                  src={mainFeature.icon}
                  alt={mainFeature.title}
                  className="w-[64px] h-[64px] object-contain"
                />
              ) : (
                <div className="text-[48px] mb-4 flex items-center justify-start h-[60px]">
                  {mainFeature.icon}
                </div>
              )}
              <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[35px] font-normal tracking-[-0.02em] uppercase whitespace-nowrap m-0">
                {mainFeature.title}
              </h3>
            </div>
            <p className="text-[#e0e0e0] font-sans text-[14px] leading-[1.6] m-0 grow">
              {mainFeature.description}
            </p>
          </div>

          {/* Два вторичных боксa внизу */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className={featureBoxClasses}>
                <div className="flex items-center gap-3 mb-3">
                  {typeof feature.icon === "string" ? (
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[64px] h-[64px] object-contain"
                    />
                  ) : (
                    <div className="text-[48px] mb-4 flex items-center justify-start h-[60px]">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[35px] font-normal tracking-[-0.02em] uppercase whitespace-nowrap m-0">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#e0e0e0] font-sans text-[14px] leading-[1.6] m-0 grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}