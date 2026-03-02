import HeaderWrapper from '../headerWrapper';
import CTAButton from '../CTAButton';

const SeoAutomation = () => {
  const plans = [
    {
      id: 'start',
      title: '#Старт',
      price: '75 000 ',
      gradient: 'firstGradient',
      titleColor: 'text-[#2E2E2E]',
      features: [
        { text: '30-60 статей в месяц (1-2 в день)', checked: true },
        { text: '90-120 статей в месяц (3-4 в день)', checked: false },
        { text: '150-180 статей в месяц (5-6 в день)', checked: false },
      ],
    },
    {
      id: 'business',
      title: '#Бизнес',
      price: '100 000 ',
      gradient: 'secondGradient',
      titleColor: 'text-[#00ff99]',
      features: [
        { text: '30-60 статей в месяц (1-2 в день)', checked: false },
        { text: '90-120 статей в месяц (3-4 в день)', checked: true },
        { text: '150-180 статей в месяц (5-6 в день)', checked: false },
      ],
    },
    {
      id: 'corp',
      title: '#Корп',
      price: '125 000 ',
      gradient: 'thirdGradient',
      titleColor: 'text-[#FF9C1C]',
      features: [
        { text: '30-60 статей в месяц (1-2 в день)', checked: false },
        { text: '90-120 статей в месяц (3-4 в день)', checked: false },
        { text: '150-180 статей в месяц (5-6 в день)', checked: true },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-10 md:py-[60px]">
      <img src="/assets/bg-line-left.svg" alt="" className="absolute top-0 left-0  mix-blend-lighten" />
      <img src="/assets/bg-line-right.svg" alt="" className="absolute top-0 right-0  mix-blend-lighten" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <HeaderWrapper
          align="center"
          withBr={true}
          href=""
          kicker="#Тарифы"
          title="Автоматизация"
          titleAccent="SEO-продвижения"
        />

        <div className="mb-10 mt-10 grid w-full grid-cols-1 gap-[30px] md:grid-cols-3 relative">
          <img src="/assets/element-3.png" alt="" className='absolute top-0 w-[100px] transform -translate-x-1/2 -translate-y-1/2 z-2' />
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-[30px] ${plan.gradient}`}
            >
              <h4
                className={`mb-6 text-center font-[kurut] text-[50.88px] font-normal leading-normal ${plan.titleColor}`}
              >
                {plan.title}
              </h4>

              <ul className="m-0 mb-[30px] list-none p-0">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`mb-[15px] flex items-start gap-3 rounded-xl p-3 text-[13px] leading-[1.5] ${
                      feature.checked
                        ? 'bg-gradient-to-r from-[#344949] to-[#63909C] text-white'
                        : 'bg-gradient-to-r from-[rgba(52,73,73,0.2)] to-[rgba(99,144,156,0.2)] text-[#999999]'
                    }`}
                  >
                    <span
                      className={`mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] ${
                        feature.checked
                          ? "border-none bg-[url('/assets/tariffs_check.png')] bg-contain"
                          : 'border-2 border-[#666666]'
                      }`}
                    ></span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center font-['Bebas_Neue'] text-[30px] font-normal leading-normal text-white">
                {plan.price}{' '}
                <span className="font-['Inter'] text-[24px] font-bold">₽</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-[30px] mt-6 text-center font-['Inter'] text-[19px] font-normal text-white">
          Ежемесячная техподдержка и обновления — от 20 000 ₽.
        </p>

        <CTAButton
          href="#"
          icon={
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2058 1.33726e-08C14.605 2.31338e-08 11.0851 1.06775 8.09121 3.06823C5.09728 5.06871 2.7638 7.91207 1.38584 11.2387C0.00788836 14.5654 -0.352647 18.226 0.349828 21.7576C1.0523 25.2892 2.78624 28.5331 5.33237 31.0792C7.87849 33.6254 11.1225 35.3593 14.654 36.0618C18.1856 36.7643 21.8462 36.4037 25.1729 35.0258C28.4996 33.6478 31.3429 31.3143 33.3434 28.3204C35.3439 25.3265 36.4116 21.8066 36.4116 18.2058C36.4118 15.8149 35.941 13.4474 35.0262 11.2385C34.1113 9.02959 32.7703 7.02252 31.0797 5.33191C29.3891 3.64131 27.382 2.30029 25.1731 1.38543C22.9642 0.470573 20.5967 -0.000198461 18.2058 1.33726e-08ZM23.9944 27.5863C23.9262 27.7562 23.8225 27.9096 23.6903 28.0362C23.558 28.1627 23.4002 28.2596 23.2275 28.3202C23.0547 28.3808 22.871 28.4037 22.6886 28.3875C22.5063 28.3713 22.3295 28.3163 22.1701 28.2262L17.2279 24.3859L14.0558 27.3123C13.9822 27.3667 13.8961 27.4017 13.8055 27.4141C13.7148 27.4265 13.6225 27.4159 13.537 27.3832L14.145 21.9425L14.1645 21.9579L14.1769 21.8505C14.1769 21.8505 23.0705 13.7535 23.4328 13.4085C23.7996 13.0644 23.6786 12.9898 23.6786 12.9898C23.6994 12.5701 23.0204 12.9898 23.0204 12.9898L11.2366 20.5707L6.32927 18.8994C6.32927 18.8994 5.57555 18.6291 5.50455 18.0347C5.42991 17.4448 6.35383 17.1244 6.35383 17.1244L25.865 9.37324C25.865 9.37324 27.4689 8.65863 27.4689 9.84206L23.9944 27.5863Z" fill="#0E0807"/>
            </svg>
          }
        >
          Получить консультацию
        </CTAButton>
      </div>
    </section>
  );
};

export default SeoAutomation;