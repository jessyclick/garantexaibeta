import HeaderWrapper from '../headerWrapper';
import CTAButton from '../CTAButton';

const Tariffs = () => {
  const plans = [
    {
      id: 'start',
      title: '#Базовая озвучка',
      price: 'От 250 ₽ за каждые 30 секунд',
      forwho: 'Малый бизнес, блогеры',
      under: 'Тех. поддержка: от 10 000 ₽/мес',
      gradient: 'firstGradient', // Оставляем, если класс глобальный
      titleColor: 'text-[#2E2E2E]',
      features: [
        { text: '1000+ голосов', checked: true },
        { text: 'Управление эмоциями и скоростью', checked: true },
        { text: 'Студийное качество MP3/WAV', checked: true },
        { text: 'Бесплатные правки', checked: true },
      ],
    },
    {
      id: 'business',
      title: '#Клонирование',
      price: '2 500 ₽ (разово) ',
      forwho: 'Средний бизнес, эксперты',
      under: 'Тех. поддержка: от 15 000 ₽/мес',
      gradient: 'secondGradient',
      titleColor: 'text-[#00ff99]',
      features: [
        { text: 'Создание вашей цифровой копии', checked: true },
        { text: 'Очистка шума', checked: true },
        { text: 'Обучение модели', checked: true },
        { text: 'Вечный доступ к генерации', checked: true },
        { text: 'Дальнейшая озвучка — от 250 ₽', checked: true },
      ],
    },
    {
      id: 'corp',
      title: '#Автоматизация',
      price: '125 000 ₽', // Добавил символ рубля для единообразия
      forwho: 'Крупный бизнес, агентства',
      under: 'Тех. поддержка: от 20.000р/мес',
      gradient: 'thirdGradient',
      titleColor: 'text-[#FF9C1C]',
      features: [
        { text: 'Полная автоматизация озвучки через Telegram-бот', checked: true },
        { text: 'Потоковая генерация роликов и аудиофайлов', checked: true },
        { text: 'Личные сценарии: автодубляж, серийные озвучки, массовое производство контента', checked: true },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-10 md:py-[60px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center">
        <HeaderWrapper
          align="center"
          withBr={false}
          href=""
          kicker="#По шагам"
          title="Как работает"
          titleAccent="наша система"
        />

        <div className="mb-10 grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-[30px] ${plan.gradient}`}
            >
              <h4
                className={`text-center font-['kurut'] text-[50.88px] font-normal leading-normal ${plan.titleColor}`}
              >
                {plan.title}
              </h4>

              {/* Вывод forwho (если нужно) */}
              {plan.forwho && (
                <p className="mb-4 text-center font-['Inter'] text-[19px] font-normal leading-[22px] text-white">
                  {plan.forwho}
                </p>
              )}

              <ul className="m-0 mb-[30px] list-none p-0">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`mb-[15px] flex items-start gap-3 rounded-xl p-3 text-[13px] leading-[1.5] ${
                      feature.checked
                        ? 'bg-gradient-to-r from-[#344949] to-[#63909C] text-white'
                        : 'bg-gradient-to-r from-[rgba(52,73,73,0.20)] to-[rgba(99,144,156,0.20)] text-[#999999]'
                    }`}
                  >
                    <span
                      className={`mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] ${
                        feature.checked
                          ? "border-none bg-[url('/assets/tariffs_check.png')] bg-contain bg-no-repeat"
                          : 'border-2 border-[#666666]'
                      }`}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 mt-8 text-center font-['Bebas_Neue'] text-[30px] font-normal leading-normal text-white">
                {plan.price}
              </div>

              {/* Вывод under (техподдержка) */}
              {plan.under && (
                <div className="mx-auto mb-[30px] mt-6 max-w-[670px] text-center font-['Inter'] text-[19px] font-normal text-white">
                  {plan.under}
                </div>
              )}
            </div>
          ))}
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
          Рассчитать стоимость
        </CTAButton>
      </div>
    </section>
  );
};

export default Tariffs;