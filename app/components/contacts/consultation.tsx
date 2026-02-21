import HeaderWrapper from "../headerWrapper";
import CTAButton from "../CTAButton";
// Если используете Next.js, лучше импортировать Image:
// import Image from "next/image";

type ContactChannel = {
  icon: string; // Путь к файлу: "/assets/icon-tg.png"
  title: string;
  contact: string;
  description: string;
};

type Props = {
  channels?: ContactChannel[];
  subtitle?: string;
  badgeLabel?: string;
};

const defaultChannels: ContactChannel[] = [
  {
    icon: "/assets/icon-telegram.png",
    title: "TELEGRAM",
    contact: "@garantex_ai",
    description: "Основной канал связи",
  },
  {
    icon: "/assets/icon-email.png",
    title: "EMAIL",
    contact: "garantexai@gmail.com",
    description: "Напишите нам",
  },
  {
    icon: "/assets/icon-max.png",
    title: "MAX",
    contact: "????",
    description: "Резервный контакт",
  },
];

export default function ConsultationSection({
  channels = defaultChannels,
  subtitle = "Ответим на вопросы, предложим решение и поможем начать работу с ИИ",
  badgeLabel = "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ",
}: Props) {
  return (
    <section className="py-[100px] px-5 bg-[#0a0a0a] bg-[url('/assets/contact-bg-hero.png')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[5%] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(200,100,0,0.2)_0%,transparent_70%)] rounded-full pointer-events-none z-0 blur-[40px]"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-block p-[10px_24px] sm:p-[12px_32px_7px_32px] text-[#0E0E0E] font-['Bebas_Neue',_sans-serif] text-[12px] sm:text-[35.799px] font-normal leading-normal mb-[24px] sm:mb-[32px] rounded-[100px] bg-[linear-gradient(104deg,#FF9C1C_4.66%,#FFCB78_31.03%,#FF9C1C_110.93%,#FFCB78_136.75%,#FF9C1C_160.33%),#0F0C09] shadow-[0_4.475px_27.297px_0_rgba(102,59,3,0.25)]">
          {badgeLabel}
        </div>

        {/* Header Wrapper */}
        <div className="w-full mb-[20px]">
          <HeaderWrapper
            kicker=""
            title="СВЯЖИТЕСЬ С ЭКСПЕРТАМИ"
            titleAccent="GARANTEX AI"
          />
        </div>

        {/* Subtitle */}
        <p className="text-white text-center font-['Ubuntu',_sans-serif] text-[14px] sm:text-[16px] md:text-[20.402px] font-normal leading-[1.05] max-w-[420px] m-0 mb-[32px] sm:mb-[40px] md:mb-[60px]">
          {subtitle}
        </p>

        {/* Channels Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px] mb-[32px] md:mb-[40px] lg:mb-[48px]">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="rounded-[12px] sm:rounded-[16px] p-[24px_20px] sm:p-[32px_24px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] backdrop-blur-[10px] transition-all duration-300 relative overflow-hidden flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4">
                <div className="w-[36px] sm:w-[40px] shrink-0 flex items-center justify-center">
                  <img
                    src={channel.icon}
                    alt={channel.title}
                    className="w-full h-auto block"
                  />
                </div>
                <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[16px] sm:text-[29px] font-normal leading-normal uppercase tracking-[0.5px] m-0">
                  {channel.title}
                </h3>
              </div>

              <p className="font-['Ubuntu',_sans-serif] text-[14px] sm:text-[18.437px] font-normal leading-[1.4] sm:leading-[1.5] tracking-[-0.203px] bg-[linear-gradient(102deg,#FF8C27_3.95%,#FFC15D_18.11%,#FF8C27_31.33%,#FFC15D_47.04%,#FF8C27_61.02%,#FFC15D_74.88%,#FF8C27_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text] m-0 mb-[8px]">
                {channel.contact}
              </p>
              <p className="text-white font-['Ubuntu',_sans-serif] text-[12px] sm:text-[15px] font-light italic leading-[1.43] m-0">
                {channel.description}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-[16px] sm:gap-[20px] justify-center items-center">
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
            Написать
          </CTAButton>
          <CTAButton
            href="#"
            variant="outline"
            icon={
              <img
                src="/assets/icon-call.png"
                alt="Позвонить"
                className="w-[18px] h-[18px] object-contain"
              />
            }
          >
            Позвонить
          </CTAButton>
        </div>
      </div>
    </section>
  );
}