import Image from "next/image";
import CTAButton from "../CTAButton";

export default function StandOutSection() {
  return (
    <section className="relative overflow-hidden text-white pt-[40px] pb-[30px] px-[12px] sm:pt-[60px] sm:pb-[40px] sm:px-[16px] md:pt-[80px] md:pb-[60px] md:px-[20px] lg:pt-[120px] lg:pb-[80px]">
      <div className="max-w-[1305px] mx-auto relative z-10 flex flex-col lg:flex-row-reverse items-center gap-[24px] md:gap-[40px] lg:gap-[60px]">
        
        {/* Правая часть (по логике flex-row-reverse, но фактически текст) */}
        <div className="w-full lg:flex-1 lg:min-w-[400px] lg:max-w-[450px] text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="m-0 mb-6 font-['Bebas_Neue',_sans-serif] font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-1px] text-white">
            Пока вы думаете, <br />
            <span className="bg-[linear-gradient(101.53deg,#FF9C1C_3.95%,#F9B953_25.99%,#FF9C1C_61.02%,#FFC466_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent bg-origin-border [-webkit-background-clip:text]">
              конкуренты уже в топе выдачи
            </span>
          </h2>

          <p className="max-w-[480px] text-white/85 mx-auto lg:mx-0 mb-[32px] sm:mb-[40px] font-['Inter',_sans-serif] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5]">
            Медиа-платформы — это бесплатный источник трафика и доверия.
            Запустите свой контент-завод сегодня и получайте лидов годами.
          </p>

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
            Получить консультацию
          </CTAButton>
        </div>

        {/* Левая часть (по логике flex-row-reverse, но фактически картинка) */}
        <div className="flex-1 flex justify-center items-center relative w-full">
          <div className="relative w-full h-auto flex justify-center">
            <Image
              src="/assets/kons-1.png"
              alt="AI Human Figure with Sound Waves"
              width={500}
              height={500}
              className="w-full max-w-full h-auto block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}