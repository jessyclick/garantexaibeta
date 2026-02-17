export default function GuaranteesSection() {
  const cardClasses =
    "p-[22px] rounded-[18px] lg:min-h-[320px] flex flex-col items-center text-center relative border border-transparent shadow-[0_4.963px_30.277px_0_rgba(102,59,3,0.25)] bg-origin-border [background-clip:padding-box,_border-box] GradientBlack";

  return (
    <section className="pt-[120px] pb-[84px] px-5 text-white">
      <div className="max-w-[1305px] mx-auto">
        <div className="text-center mb-[34px]">
          <span className="block text-[#343434] text-[32px] lg:text-[100px] font-['Kurut',_sans-serif] mb-1.5 leading-[0.5]">
            #Условия
          </span>
          <h2 className="text-[32px] lg:text-[56px] leading-none font-['Bebas_Neue',_sans-serif] m-0 font-normal">
            <span className="text-[#ffb03b]">ГАРАНТИИ И УСЛОВИЯ </span>
            РАБОТЫ
          </h2>
          <p className="mt-3 text-white text-center font-['Inter'] text-[1.25rem] font-normal leading-[1.37525rem]">
            Мы берем качество на себя:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
          <article className={cardClasses}>
            <img
              className="w-full h-[190px] rounded-[22px] mb-[18px] object-cover"
              src="/assets/g_first.png"
              alt=""
            />
            <h3 className="text-white text-center font-bebas text-[2rem] leading-[1] mt-2 mb-2.5 font-normal">
              БЕСПЛАТНЫЕ ПРАВКИ:
            </h3>
            <p className="text-white/90 text-[14px] lg:text-[20px] leading-[1.4] max-w-[300px]">
              Для видео: 1 бесплатная правка на каждые 10 секунд хронометража.
            </p>
            <p className="text-white text-[14px] lg:text-[20px] leading-[1.2] mt-2.5 max-w-[320px]">
              <strong>Например:</strong> в ролике 30 сек можно бесплатно
              изменить 3 кадра.
            </p>
          </article>

          <article className={cardClasses}>
            <img
              className="w-full h-[190px] rounded-[22px] mb-[18px] object-cover"
              src="/assets/g_second.png"
              alt=""
            />
            <h3 className="text-white text-center font-bebas text-[2rem] leading-[1] mt-2 mb-2.5 font-normal">
              СТОИМОСТЬ ДОП. ПРАВОК:
            </h3>
            <p className="text-white/90 text-[14px] lg:text-[20px] leading-[1.4] max-w-[300px]">
              500 ₽ за генерацию (5 сек).
            </p>
            <p className="text-white text-[14px] lg:text-[20px] leading-[1.2] mt-2.5 max-w-[320px]">
              <strong>Важно:</strong> Мы изначально отбираем лучшие кадры,
              поэтому 95% клиентов принимают работу с первого раза.
            </p>
          </article>

          <article className={cardClasses}>
            <img
              className="w-full h-[190px] rounded-[22px] mb-[18px] object-cover"
              src="/assets/g_third.png"
              alt=""
            />
            <h3 className="text-white text-center font-bebas text-[2rem] leading-[1] mt-2 mb-2.5 font-normal">
              ЮРИДИЧЕСКАЯ ЧИСТОТА:
            </h3>
            <p className="text-white/90 text-[14px] lg:text-[20px] leading-[1.4] max-w-[300px]">
              Работаем по договору.
            </p>
            <p className="text-white text-[14px] lg:text-[20px] leading-[1.2] mt-2.5 max-w-[320px]">
              Используем музыку без нарушения авторских прав.
            </p>
            <p className="text-white text-[14px] lg:text-[20px] leading-[1.2] mt-2.5 max-w-[320px]">
              Конфиденциальность (NDA при необходимости).
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}