import Image from "next/image"; // Рекомендуется для Next.js

type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  features?: FeatureCard[];
  imageUrl?: string;
  calloutText?: string;
  mainTitle?: string;
  mainTitleAccent?: string;
  subtitle?: string;
};

const defaultFeatures: FeatureCard[] = [
  {
    icon: "/assets/icon_c1.png",
    title: "НАШИ ПОЗНАНИЯ",
    description:
      "Мы не теоретики — услуги с ИИ которые мы оказываем, приносят коммерческий результат нам и клиентам, повысив их продуктивность и экономию.",
  },
  {
    icon: "/assets/icon_c2.png",
    title: "ПОКАЗЫВАЕМ. КАК ЭТО ДЕЛАЕТСЯ",
    description:
      "Создание контента и креативов, автоматизация процессов и задач — всё наглядно и по шагам.",
  },
  {
    icon: "/assets/icon_c3.png",
    title: "ГОТОВЫЕ РЕШЕНИЯ ДЛЯ ВНЕДРЕНИЯ",
    description:
      "Практические гайды и материалы для работы с ИИ — конкируйте и применяйте в своём контенте, SEO и SMM уже сегодня.",
  },
  {
    icon: "/assets/icon_c4.png",
    title: "РАЗБОРЫ КЕЙСОВ",
    description:
      "Показываем путь от запуска до результата: какие инструменты использовали, что и как сделали, сколько клиент заработал или сэкономил.",
  },
];

export default function WhyImportantSection({
  features = defaultFeatures,
  imageUrl = "/assets/contact-p.png",
  calloutText = "Оставаясь с нами на связи, вы всегда будете получать актуальные, полезные и практические знания из мира ИИ.",
  mainTitle = "ЧТОБЫ НЕ ПОТЕРЯТЬ НАШ КОНТАКТ, ПОЖАЛУЙСТА,",
  mainTitleAccent = "ПОДПИШИТЕСЬ НА НАШ TELEGRAM-КАНАЛ",
  subtitle = "Транслируем реальный опыт внедрения ИИ в бизнес и жизнь — показываем процесс и даём инструменты. Делимся только тем, что действительно работает на практике.",
}: Props) {
  return (
    <section className="py-[100px] px-5 bg-[#0a0a0a] bg-[url('/assets/vajn.png')] bg-right bg-no-repeat relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 -right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(100,150,255,0.06)_0%,transparent_70%)] rounded-full pointer-events-none z-0"></div>

      {/* Background Decor Left */}
      <div className="absolute -top-[10%] left-[5%] w-[200px] h-[200px] bg-[url('data:image/svg+xml,%3Csvg_xmlns=%27http://www.w3.org/2000/svg%27_viewBox=%270_0_100_100%27%3E%3Ctext_x=%2750%27_y=%2750%27_font-size=%2760%27_text-anchor=%27middle%27_fill=%27%23ff9c1c%27%3E✨%3C/text%3E%3C/svg%3E')] bg-contain bg-no-repeat opacity-40 pointer-events-none z-0"></div>

      {/* Background Decor Right */}
      <div className="absolute bottom-[10%] right-[3%] w-[300px] h-[300px] bg-[linear-gradient(135deg,transparent_45%,rgba(255,156,28,0.1)_50%,transparent_55%)] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-[40px] md:gap-[60px]">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center max-w-[900px] mx-auto">
          <div className="inline-block px-[12px] py-[6px] sm:px-[22px] sm:py-[8px_22px_4px_22px] text-white font-['Bebas_Neue',_sans-serif] text-[11px] sm:text-[30px] font-normal leading-normal uppercase tracking-[0.5px] rounded-[43px] sm:rounded-[20px] bg-[linear-gradient(90deg,#9B0300_0%,#750200_57.69%,#9B0300_100%)] shadow-[0_4.134px_25.218px_0_rgba(102,59,3,0.25)] mx-auto mb-[16px] sm:mb-[24px] w-fit">
            ЭТО ВАЖНО
          </div>
          <div className="text-white font-bebas text-[24px] md:text-[32px] lg:text-[45px] leading-[1.2] m-0 mb-[24px] text-center">
            {mainTitle}
            <br />
            <span className="block bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              {mainTitleAccent}
            </span>
          </div>
          <p className="text-white text-center font-['Ubuntu',_sans-serif] text-[13px] md:text-[14px] lg:text-[20.402px] font-normal leading-[21.476px] m-0">
            {subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start">
          
          {/* Left Column (Features) */}
          <div className="flex h-full flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] md:gap-[24px] h-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-[16px] p-[20px_16px] sm:p-[28px_24px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(160deg,#000000,#212121,#000000),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] backdrop-blur-[10px] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-[12px] sm:mb-[16px]">
                    <div className="w-[28px] sm:w-[32px] lg:w-[48px] shrink-0 transition-transform duration-300">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-auto block"
                      />
                    </div>
                    <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[14px] sm:text-[35px] font-normal leading-[1] uppercase tracking-[0.3px] m-0">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white font-['Ubuntu',_sans-serif] text-[12px] sm:text-[19px] font-normal leading-[22.004px] m-0">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Image & Callout) */}
          <div className="flex items-center justify-center mt-0 lg:mt-[20px]">
            <div className="relative w-full aspect-auto min-h-[300px] sm:aspect-square rounded-[16px] overflow-hidden border-[2px] border-[rgba(255,156,28,0.2)]">
              <img
                src={imageUrl}
                alt="AI Technology"
                className="w-full h-full object-cover block absolute inset-0"
              />
              <div className="absolute bottom-[16px] left-[16px] right-[16px] sm:bottom-[24px] sm:left-[24px] sm:right-[24px] rounded-[19px] border border-[#007568] bg-[#003E37] p-[14px] sm:p-[16px] md:p-[20px] backdrop-blur-[10px]">
                <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] m-0">
                  {calloutText}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}