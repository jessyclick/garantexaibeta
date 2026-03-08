import HeaderWrapper from "../headerWrapper";
import styles from "../contacts/consultation.module.scss";
import ComparisonSlider from "../ComparisonSlider";
import CTAButton from "../CTAButton";
// Если используете Next.js, лучше импортировать Image:
// import Image from "next/image";

type ContactChannel = {
  icon: string; // Теперь здесь будет путь к файлу: "/icons/tg.svg"
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
    icon: "/assets/icon-telegram.png", // Путь к вашей картинке в папке public
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
  subtitle = "Автоматизация, видео-продакшн, чат-боты, AI-ассистенты, вайб-кодинг и цифровые продукты под ключ",
  badgeLabel = "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ",
}: Props) {
  // Figma image assets
  const imgFlashOn = "http://localhost:3845/assets/c02fe2dc3d0138b4f45a6bbaffb0312b527220b8.png";
  const imgRocket = "http://localhost:3845/assets/b40ef2c32b52eb6b8b20b6339426218516c91dff.png";
  const imgArrow2 = "http://localhost:3845/assets/5f15ecda94308a72d61f77605327adc6125e3c04.svg";
  const imgArrow3 = "http://localhost:3845/assets/129c3d73554eef8b4f405444624c01c8f9e419ad.svg";

  return (
    <section className="relative py-[100px] px-[20px] bg-gradient-to-b from-[#0a0a0a] to-[#1a0a00] overflow-hidden" style={{backgroundImage: 'url(/assets/contact-bg-hero.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="absolute top-[20%] left-[5%] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(200,100,0,0.2)_0%,transparent_70%)] rounded-full pointer-events-none z-0 blur-[40px]" />
      <div className="max-w-[1200px] mx-auto relative z-1 flex flex-col items-center text-center">
        <HeaderWrapper
          className="mt-12"
          kicker=""
          title={<span>Garantex AI -</span>}
          titleAccent={<span className="text-white"> агентство ИИ полного цикла для бизнеса</span>}
        />
        <p className="text-white text-center font-ubuntu text-[20.4px] font-normal leading-[21.476px] mb-[60px] max-w-[420px]">{subtitle}</p>

       <ComparisonSlider />

        {/* Figma-inspired main cards */}
        <div className="flex gap-[32px] my-[48px]">
          <div className="relative bg-[#120f0b] border border-[#3c3c3c] rounded-[24px] w-[400px]  flex flex-col items-start p-6 justify-center">
            <div className="mb-[24px] left-[24px] top-[32px] w-[30px] h-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 23 32" fill="none">
  <path d="M9.98622 31.0607C10.572 31.6464 11.5218 31.6464 12.1075 31.0607L21.6535 21.5147C22.2393 20.9289 22.2393 19.9792 21.6535 19.3934C21.0677 18.8076 20.1179 18.8076 19.5322 19.3934L11.0469 27.8787L2.56159 19.3934C1.97581 18.8076 1.02606 18.8076 0.440274 19.3934C-0.145513 19.9792 -0.145513 20.9289 0.440274 21.5147L9.98622 31.0607ZM11.0469 0L9.54688 6.55671e-08L9.54688 30L11.0469 30L12.5469 30L12.5469 -6.55671e-08L11.0469 0Z" fill="#FF0400"/>
</svg>
            </div>
            <div className=" text-white text-[29px] font-bebas font-bold">90%</div>
            <div className="mt-[12px] text-white text-[20.4px] font-ubuntu font-medium">Снижение рутины</div>
            <div className="mt-[8px] text-white text-[16px] font-ubuntu font-light">Автоматизация процессов</div>
          </div>
          <div className="relative bg-[#120f0b] border border-[#3c3c3c] rounded-[24px] w-[400px]  flex flex-col items-start p-6 justify-center">
            <div className="mb-[24px] right-[24px] top-[32px] w-[30px] h-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 23 32" fill="none">
  <path d="M9.98622 0.439341C10.572 -0.146446 11.5218 -0.146446 12.1075 0.439341L21.6535 9.98528C22.2393 10.5711 22.2393 11.5208 21.6535 12.1066C21.0677 12.6924 20.1179 12.6924 19.5322 12.1066L11.0469 3.62132L2.56159 12.1066C1.97581 12.6924 1.02606 12.6924 0.440274 12.1066C-0.145513 11.5208 -0.145513 10.5711 0.440274 9.98528L9.98622 0.439341ZM11.0469 31.5L9.54688 31.5L9.54688 1.5L11.0469 1.5L12.5469 1.5L12.5469 31.5L11.0469 31.5Z" fill="#00FF09"/>
</svg>
            </div>
            <div className=" text-white text-[29px] font-bebas font-bold">100%</div>
            <div className="mt-[12px] text-white text-[20.4px] font-ubuntu font-medium">Фокуса на прибыли</div>
            <div className="mt-[8px] text-white text-[16px] font-ubuntu font-light">Рост эффективности</div>
          </div>
        </div>

         {/* Figma-inspired statistics cards */}
        <div className="flex gap-[32px] mb-[48px]">
          <div className="relative bg-[#120f0b] border border-[#3c3c3c] rounded-[50px] w-[300px] h-[90px] flex items-center justify-center">
            <div className="absolute left-[24px] top-1/2 -translate-y-1/2 w-[40px] h-[40px]">
              <img src={imgFlashOn} alt="Flash On" className="w-full h-full object-contain" />
            </div>
            <div className="ml-[72px] text-white text-[16px] font-ubuntu">
              <span className="font-bold text-[21px]">50+</span> реализованных проектов
            </div>
          </div>
          <div className="relative bg-[#120f0b] border border-[#3c3c3c] rounded-[50px] w-[300px] h-[90px] flex items-center justify-center">
            <div className="absolute left-[24px] top-1/2 -translate-y-1/2 w-[40px] h-[40px]">
              <img src={imgRocket} alt="Rocket" className="w-full h-full object-contain" />
            </div>
            <div className="ml-[72px] text-white text-[16px] font-ubuntu">
              Бесплатный аудит
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <CTAButton
            href="#"
            icon={
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z" fill="#0E0807"/>
              </svg>
            }
          >
            Обсудить проект
          </CTAButton>
        </div>
      </div>
    </section>
  );
}