type ProjectCard = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLabel?: string;
};

type Props = {
  projects?: ProjectCard[];
  imageUrls?: string[];
};

const defaultProjects: ProjectCard[] = [
  {
    badge: "ОСНОВАТЕЛЬ И СЕО",
    title: "ТИХОНОВ ВАДИМ",
    subtitle: "GARANTEX AI",
    description:
      "Мы создали агентство, которое говорит на языке результата, а не обещаний. Каждая наша услуга прошла проверку реальными проектами и принесла измеримую пользу клиентам.",
    buttonLabel: "Сохранить наши проекты",
  },
  {
    badge: "",
    title: "",
    subtitle: "COMPLEX AI",
    description:
      "А ещё мы строим бесплатное нейро-комьюнити — живую экосистему из 1000+ специалистов, где каждый день публикуем новости, промпты, шаблоны автоматизации и проводим еженедельные встречи, где мы можем поообщаться вживую. Присоединяйтесь!",
    buttonLabel: "Сохранить наши проекты", // Тут можно изменить текст кнопки при необходимости
  },
];

export default function About({
  projects = defaultProjects,
  imageUrls = ["/assets/project-1.png", "/assets/project-2.png"],
}: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center">
          
          {/* Left side - Images */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="flex flex-col gap-[16px] md:gap-[24px] w-full max-w-[450px]">
              {imageUrls.map((url, index) => (
                <div
                  key={index}
                  className="w-full aspect-[16/12] md:aspect-[16/10] rounded-[16px] md:rounded-[24px] overflow-hidden bg-[linear-gradient(135deg,#d0d0d0_0%,#f0f0f0_100%)] border-[2px] border-[rgba(255,156,28,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:border-[rgba(255,156,28,0.4)] hover:shadow-[0_12px_40px_rgba(255,156,28,0.15)] hover:-translate-y-1"
                >
                  <img
                    src={url}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover block"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Project cards */}
          <div className="flex flex-col gap-[40px]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] sm:gap-[16px]"
              >
                {project.badge && (
                  <div className="inline-block rounded-[29px] border-[1.12px] border-[#4DE7D3] bg-[linear-gradient(0deg,#4AECDC_0%,#00AC9B_100%),#0F0C09] shadow-[0_4.5px_27.3px_0_rgba(102,59,3,0.25)] text-[#0E0E0E] p-[6px_14px] sm:p-[8px_18px_4px_18px] font-['Bebas_Neue',_sans-serif] text-[11px] sm:text-[20px] font-normal leading-normal uppercase tracking-[0.5px] w-fit">
                    {project.badge}
                  </div>
                )}

                {project.title && (
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-[24px] sm:text-[32px] md:text-[66px] font-normal leading-normal bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFC466_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text] m-0">
                    {project.title}
                  </h3>
                )}

                {project.subtitle && (
                  <p className="text-white font-['Bebas_Neue',_sans-serif] text-[14px] sm:text-[16px] md:text-[35px] font-normal leading-normal m-0">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-white font-['Ubuntu',_sans-serif] text-[13px] sm:text-[14px] md:text-[20.4px] font-normal leading-[1.6] md:leading-[1.05] m-0">
                  {project.description}
                </p>

                {index === 1 && project.buttonLabel && (
                  <button className="self-start py-[12px] px-[24px] sm:py-[14px] sm:px-[32px] md:py-[16px] md:px-[40px] rounded-[50px] bg-[linear-gradient(106deg,#FF9C1C_5.27%,#FFCB78_22.82%,#FF9C1C_75.97%,#FFCB78_93.14%,#FF9C1C_108.83%),linear-gradient(121deg,#FF8C27_6.26%,#FFC15D_40.84%,#FF8C27_73.12%,#FFC15D_111.47%,#FF8C27_145.6%,#FFC15D_179.46%,#FF8C27_210.38%),linear-gradient(116deg,#FF7418_10.65%,#FFAA49_58.19%,#FF7418_118.02%),linear-gradient(124deg,#E95723_25.53%,#F9BF37_87.77%),linear-gradient(118deg,#FE7905_7.26%,#F3A114_61.28%,#A93301_129.27%),linear-gradient(90deg,#FFDD8F_0%,#FFEFC9_44.71%,#FFDD8F_100%),rgba(255,255,255,0.30)] text-[#0E0807] text-center font-['Ubuntu',_sans-serif] text-[13px] sm:text-[14px] md:text-[22px] font-medium leading-none tracking-[-0.243px] border-none cursor-pointer capitalize transition-all duration-300 whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,156,28,0.3)] active:translate-y-0 mt-2">
                    {project.buttonLabel}
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}