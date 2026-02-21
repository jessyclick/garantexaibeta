import Image from "next/image";
import CTAButton from "../CTAButton";
import { Reveal } from "../reveal";

export default function Hero() {
  return (
    <section className="pt-[120px] pb-[60px] px-5 bg-[url('/assets/hero-mobile-bg.png')] lg:bg-[url('/assets/hero-bg.png')] bg-no-repeat bg-cover bg-center text-white overflow-hidden">
      <div className="max-w-[1305px] mx-auto flex flex-col lg:flex-row gap-[36px] items-center">
        <Reveal>
          <div className="relative z-10 w-full lg:min-w-[700px] text-left">
            <h1 className="text-[36px] lg:text-[82px] leading-[0.90] m-0 mb-[18px] text-white font-['Bebas_Neue',_sans-serif] whitespace-nowrap text-left">
              ИИ-перевод
              <br />
              <span className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#F9B953_25.99%,#FF9C1C_61.02%,#FFC466_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent bg-origin-border [-webkit-background-clip:text]">
                озвучка видео
              </span>
            </h1>

            <p className="max-w-[600px] text-white mb-[32px] text-[15px] lg:text-[19px] font-['Inter',_sans-serif] text-left lg:mx-0">
              Мы переводим и озвучиваем ваши видео так, что зритель уверен: вы
              действительно говорите на его языке.Технология LipSync
              подстраивает мимику под новую речь — как будто вы изначально
              записывали видео на английском, испанском или китайском.
            </p>

            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-[16px] mb-[28px] justify-start items-stretch">
              <div className="flex flex-col lg:flex-row font-['Inter',_sans-serif] text-[14px] lg:text-[19px] gap-[12px] items-start p-[14px_18px] border-2 border-transparent rounded-[24px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(black,black),linear-gradient(124.35deg,#FF9F23_3.69%,#2A0C00_45.84%,#D28520_98.89%)] text-left w-full lg:max-w-[240px]">
                <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <img src="/assets/feauture-icon.png" alt="" />
                </span>
                <span>Клонируем ваш голос. Синхронизируем мимику</span>
              </div>
              <div className="flex flex-col lg:flex-row font-['Inter',_sans-serif] text-[14px] lg:text-[19px] gap-[12px] items-start p-[14px_18px] border-2 border-transparent rounded-[24px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(black,black),linear-gradient(124.35deg,#FF9F23_3.69%,#2A0C00_45.84%,#D28520_98.89%)] text-left w-full lg:max-w-[300px]">
                <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <img src="/assets/feauture-icon.png" alt="" />
                </span>
                <span>Бесплатный тест на фрагменте до 30 сек</span>
              </div>
            </div>

            <div>
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
                Попробовать бесплатно
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full mt-5 lg:mt-0 lg:min-w-[720px] relative lg:-left-[120px] flex justify-center">
            <div>
              <Image
                src="/assets/translator-hero.png"
                alt="Hero"
                width={800}
                height={520}
                priority
                className="max-w-full h-auto block"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}