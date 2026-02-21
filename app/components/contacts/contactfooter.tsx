import React from 'react';
import CTAButton from '../CTAButton';

interface ContactFooterProps {
  telegramUrl?: string;
  phoneUrl?: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({
  telegramUrl = 'https://t.me/yourtelegram',
  phoneUrl = 'tel:+1234567890',
}) => {
  return (
    <section className="bg-[#111] rounded-t-[80px] pt-[64px] px-[24px] pb-[48px] relative text-center mt-[48px] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-[120px] top-[120px] w-[180px] h-[180px] bg-[url('/assets/icons/3d-ring.png')] bg-no-repeat bg-center bg-contain z-10 hidden lg:block" />
      <div className="absolute right-[180px] top-[40px] w-[80px] h-[80px] bg-[url('/assets/icons/3d-spring.png')] bg-no-repeat bg-center bg-contain z-10 hidden lg:block" />
      
      <h2 className="text-white font-['Bebas_Neue',_sans-serif] text-[36px] lg:text-[66px] font-normal leading-[1.1] tracking-[0.02em] m-0 mb-[16px]">
        ГОТОВЫ НАЧАТЬ{' '}
        <span className="bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
          СОТРУДНИЧЕСТВО?
        </span>
      </h2>
      
      <p className="text-white font-['Ubuntu',_sans-serif] text-[20px] lg:text-[22px] font-normal leading-[21.476px] m-0 mb-[40px]">
        Свяжитесь с нами удобным для вас способом!
      </p>
      
      <div className="flex justify-center gap-[40px] flex-wrap">
        <CTAButton
          href={telegramUrl}
          icon={
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[36px] h-[36px]"
            >
              <path
                d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z"
                fill="#0E0807"
              />
            </svg>
          }
        >
          Написать нам
        </CTAButton>
        <CTAButton
          href={phoneUrl}
          icon={
            <img
              src="/assets/icon-call.png"
              alt="Документация"
              className="w-[36px] h-[36px] object-contain"
            />
          }
          variant="outline"
        >
          Позвонить
        </CTAButton>
      </div>
    </section>
  );
};

export default ContactFooter;