export default function AutomationSection() {
  return (
    <section className="py-[40px] px-4 sm:py-[56px] sm:px-5 text-white">
      <div className="max-w-[1305px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[48px] items-center justify-center">
        
        {/* Левая часть (Визуализация) */}
        <div className="flex-1 w-full lg:min-w-[400px] flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                className="object-contain max-h-full max-w-full"
                src="/assets/auto.png"
                alt="Автоматизация"
              />
            </div>
          </div>
        </div>

        {/* Правая часть (Контент) */}
        <div className="flex-1 w-full lg:min-w-[400px] max-w-[600px]">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.125rem] font-bebas font-normal leading-[1.2] mb-6 uppercase text-white">
            <span>
              АВТОМАТИЗАЦИЯ ДЛЯ
              <br />
              КРУПНЫХ МАГАЗИНОВ
            </span>
          </h2>

          <div className="border border-transparent rounded-[12px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(157.79deg,#201200_5.07%,#422602_53.78%,#201200_93.52%),linear-gradient(124.35deg,#FE7905_3.69%,#2A0C00_45.84%,#A93301_98.89%)] py-4 px-5 lg:p-[1.6rem] mb-[40px] mt-8 lg:mt-0 flex items-center gap-3 shadow-[0_0_40px_rgba(255,156,28,0.1)]">
            <span className="shrink-0 max-w-[24px] text-[24px]">
              <img src="/assets/icon_docx.png" alt="" />
            </span>
            <p className="text-white font-['Inter',_sans-serif] text-[0.875rem] lg:text-[1rem] font-normal leading-[1.4] m-0">
              У вас сотни артикулов? Мы настроим конвейер.
            </p>
          </div>

          <ol className="relative list-none p-0 m-0 flex flex-col gap-5">
            {/* Пунктирная линия */}
            <div className="absolute left-[17px] top-0 w-[1px] h-[240px] bg-[url('/assets/line.png')] bg-contain w-[1px] h-[calc(100%-15px)]"></div>

            <li className="relative z-10 flex gap-3 items-start">
              <span className="min-w-[36px] h-[36px] rounded-full inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] text-black font-extrabold text-[16px]">
                1
              </span>
              <div>
                <strong className="hidden text-white font-['Inter'] text-[1.2845rem] font-bold leading-[1.4875rem]">
                  Подготовка:
                </strong>
                <div className="text-white font-['Inter'] text-[1.08169rem] font-light leading-[1.4875rem] max-w-[242px]">
                  Telegram-бот для автогенерации контента.
                </div>
              </div>
            </li>

            <li className="relative z-10 flex gap-3 items-start">
              <span className="min-w-[36px] h-[36px] rounded-full inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] text-black font-extrabold text-[16px]">
                2
              </span>
              <div>
                <strong className="hidden text-white font-['Inter'] text-[1.2845rem] font-bold leading-[1.4875rem]">
                  AI-Анимация:
                </strong>
                <div className="text-white font-['Inter'] text-[1.08169rem] font-light leading-[1.4875rem] max-w-[242px]">
                  Загружаете фото → Получаете видео/баннер.
                </div>
              </div>
            </li>

            <li className="relative z-10 flex gap-3 items-start">
              <span className="min-w-[36px] h-[36px] rounded-full inline-flex items-center justify-center bg-[linear-gradient(117deg,#FF9C1C_7.84%,#FFCB78_28.49%,#FF9C1C_91.05%,#FFCB78_111.27%,#FF9C1C_129.74%)] text-black font-extrabold text-[16px]">
                3
              </span>
              <div>
                <strong className="hidden text-white font-['Inter'] text-[1.2845rem] font-bold leading-[1.4875rem]">
                  Монтаж:
                </strong>
                <div className="text-white font-['Inter'] text-[1.08169rem] font-light leading-[1.4875rem] max-w-[242px]">
                  Индивидуальные условия для селлеров с 50+ SKU.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}