import Link from "next/link";

const techStack = [
  { label: "АВТОМАТИЗАЦИЯ", icon: "/assets/icon_avto.png" }, // Пример иконки шестеренки
  { label: "Make" }, { label: "N8N" },
  { label: "VIBE CODING", icon: "/assets/icon_vibe.png" },
  { label: "Cursor" }, { label: "AI Studio" }, { label: "V0" }, { label: "Python" },
  { label: "ВИДЕО", icon: "/assets/icon_video.png" },     
  { label: "Sora 2" }, { label: "Veo 3" }, { label: "RunWay" }, { label: "Kling" }, { label: "Pika" }, { label: "Wan" }, { label: "Minimax" }, { label: "Pixverse" }, { label: "Luma" },
  { label: "ИЗОБРАЖЕНИЯ", icon: "/assets/icon_izo.png" }, 
  { label: "Flux" }, { label: "Nano-banana" }, { label: "Recraft" }, { label: "Reve" }, { label: "Midjourney" },
  { label: "LLM", icon: "/assets/icon_llm.png" }, 
  { label: "GPT 5.2" }, { label: "Gemini 3" }, { label: "Claude" }, { label: "Grok" }, { label: "GigaChat" }, { label: "YandexGPT" }, { label: "Perplexity" }, { label: "Mirstral" }, { label: "Nemotron" },
  { label: "АВАТАРЫ", icon: "/assets/icon_ava.png" }, 
  { label: "Heygen" }, { label: "TopView" }, { label: "Hedra" }
];

export default function Footer() {
  // Общий стиль для "черных" карточек с градиентной оранжевой обводкой
  const gradientBorderBoxClass =
    "border border-transparent rounded-[8px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#000,#000),linear-gradient(124.35deg,#FE7905_3.69%,#2A0C00_45.84%,#A93301_98.89%)]";

  return (
    <footer className="text-white py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]">
      <div className="max-w-[1305px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-[50px] lg:gap-[40px] mb-[40px] lg:mb-[60px]">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/assets/icon_logo.jpeg" alt="" className="w-10 h-10" />
            <h3 className="text-white font-['Bebas_Neue'] text-[1.5625rem] font-normal tracking-[1.2px] m-0 uppercase leading-normal">
              COMPLEX AI
            </h3>
          </div>

          <p className="text-[12px] text-[#888] m-0">Нейро-комплиментом</p>

          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {[
              { icon: "/assets/icon_bot.jpeg", text: "Бот чтобы разобраться" },
              { icon: "/assets/icon_chat.jpeg", text: "Чат для нетворкинга" },
              { icon: "/assets/icon_ai.jpeg", text: "Основной канал" },
              { icon: "/assets/icon_baza.jpeg", text: "База знаний" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 text-white font-['Ubuntu'] text-[0.875rem] font-normal leading-[1.34225rem]"
              >
                <img src={item.icon} alt="" className="w-8 h-8" /> {item.text}
              </li>
            ))}
          </ul>
          <p className="text-white font-['Ubuntu'] text-[0.875rem] font-normal leading-[1.3rem]">
            Все необходимое для работы и изучения нейросетей в 1 месте
          </p>
          <div
            className={`${gradientBorderBoxClass} p-4 mt-2.5 rounded-[12px]`}
          >
            <p className="text-white font-['Inter'] text-[0.75rem] italic font-normal leading-[1.25rem] m-0">
              Регулярные онлайн-встречи, записи эфиров, шаблоны make и n8n,
              промты и гайды. Актуальные новости, полезные нейросети и
              библиотека из 200+ ресурсов.
            </p>
          </div>
          <p className="text-white font-['Ubuntu'] text-[0.875rem] font-normal leading-[1.34225rem]">
            Все это доступно бесплатно, без подписок и закрытых каналов!
          </p>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/assets/icon_grom.png" alt="" className="w-5 h-5" />
            <h3 className="text-white font-['Bebas_Neue'] text-[1.5625rem] font-normal tracking-[1.2px] m-0 uppercase leading-normal">
              Услуги и продукты
            </h3>
          </div>

          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {[
              { text: "ИИ-Аватар (цифровой дворник)", href: "/heroman" },
              { text: "Для маркетплейсов и e-commerce", href: "/" },
              { text: "Автоматизация SEO продвижения", href: "/automation" },
              { text: "Ведение соц. сетей", href: "/socmedia" },
              { text: "Ведение медиа-платформ", href: "/expert-platform" },
              { text: "Автоматизация новостей", href: "/automation-news" },
              { text: "Перевод видео", href: "/translator" },
              { text: "Озвучка и клонирование голоса", href: "/clone-voice" },
              { text: "3D-Персонажи для бизнеса", href: "/heroman" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="font-['Ubuntu'] font-normal text-[14px] leading-[21.48px] text-white"
              >
                <Link href={item.href} className="hover:text-[#ff9c1c] transition-colors duration-300">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/assets/icon_team.png" alt="" className="w-5 h-5" />
            <h3 className="text-white font-['Bebas_Neue'] text-[1.5625rem] font-normal tracking-[1.2px] m-0 uppercase leading-normal">
              Для кого работаем
            </h3>
          </div>

          <ul className="list-none m-5 lg:m-[20px_0_0_0] p-0 flex flex-col gap-2">
            {[
              "Малый и средний бизнес",
              "Эксперты и блогеры",
              "Маркетинговые агентства",
              "Онлайн-школы и инфобизнес",
              "Магазины на маркетплейсах",
              "E-commerce",
            ].map((item, idx) => (
              <li
                key={idx}
                className="font-['Ubuntu'] font-normal text-[14px] leading-[21.48px] text-white flex items-center gap-2"
              >
                <img className="w-6" src="/assets/icon_ch.png" alt="" />
                {item}
              </li>
            ))}
          </ul>

          <div
            className={`${gradientBorderBoxClass} flex flex-wrap gap-3 p-4 mt-2.5 shadow-[0px_4px_24.4px_0px_#663B0340] rounded-[12px]`}
          >
            <span className="shrink-0 max-w-[14px] text-[24px]">
              <img src="/assets/icon_footer-star.png" alt="" />
            </span>

            <h4 className="text-[14px] font-bold text-[#FFB662] uppercase m-0">
                Мы всегда открыты
              </h4>

            <div>
              
              <p className="font-['Inter'] font-normal italic text-[12px] text-white leading-[18px] mt-1">
                Для всех, кто хочет стать продуктивней, посвятить себя
                действительно важным интеллектуальным задачам и свободить время,
                делегировав рутину алгоритмам.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2.5 max-w-[150px]">
            <img src="/assets/footer-logo.png" alt="" />
          </div>

          <p className="font-['Ubuntu'] font-normal text-[13px] text-white leading-[18px] m-0 mb-5">
            <strong>🚀 AI-Агентство полного цикла для бизнеса</strong>
            <br />
            Вы добиваете поддержник и верный друг в мире искусственного
            интеллекта.
          </p>

          <h3 className="text-white font-['Bebas_Neue'] text-[1.5625rem] font-normal tracking-[1.2px] m-0 uppercase leading-normal">
            СВЯЗЬ И ПОДДЕРЖКА
          </h3>

          <div className="flex flex-col gap-4 mb-2.5">
            <a
              href="mailto:garantexai@gmail.com"
              className="flex items-center gap-2.5 text-white no-underline transition-colors duration-300 font-['Ubuntu'] font-bold text-[14px] leading-[21.48px] hover:text-[#ff9c1c]"
            >
              <span className="shrink-0 max-w-[20px] text-[14px]">
                <img src="/assets/icon_mail.png" alt="" />
              </span>
              garantexai@gmail.com
            </a>
            <a
              href="https://twitter.com/Garantex_ai"
              className="flex items-center gap-2.5 text-white no-underline transition-colors duration-300 font-['Ubuntu'] font-bold text-[14px] leading-[21.48px] hover:text-[#ff9c1c]"
            >
              <span className="shrink-0 max-w-[20px] text-[14px]">
                <img src="/assets/icon_telegram.png" alt="" />
              </span>
              @Garantex_ai
            </a>
            <div className="flex items-center gap-2.5 text-white font-['Ubuntu'] font-bold text-[14px] leading-[21.48px]">
              <span className="shrink-0 max-w-[20px] text-[14px]">
                <img src="/assets/icon_time.png" alt="" />
              </span>
              08:00 – 22:00 (МСК)
            </div>
            <div className="flex items-center gap-2.5 text-white font-['Ubuntu'] font-bold text-[14px] leading-[21.48px]">
              <span className="shrink-0 max-w-[20px] text-[14px]">
                <img src="/assets/icon_calendar.png" alt="" />
              </span>
              БЕЗ ВЫХОДНЫХ (Понедельник — Воскресенье)
            </div>
          </div>

          <button className="bg-[linear-gradient(106deg,#FF9C1C_5.27%,#FFCB78_22.82%,#FF9C1C_75.97%,#FFCB78_93.14%,#FF9C1C_108.83%)] border-none py-3.5 px-4 rounded-[50px] cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-1 text-[#0E0807] text-center font-['Ubuntu'] text-[20px] font-medium leading-[150%] tracking-[-0.22px] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,156,28,0.4)]">
            Обсудить проект
            <span className="text-[rgba(42,41,40,0.85)] font-['Ubuntu'] text-[12px] italic font-medium leading-[150%] tracking-[-0.132px]">
              (Бесплатная консультация)
            </span>
          </button>
        </div>
      </div>

      {/* Legal Section */}
      <div className="max-w-[1305px] mx-auto py-10 border-y border-[rgba(255,156,28,0.2)]">
        <div className="flex flex-col md:flex-row gap-5 md:gap-[40px]">
          {/* Block 1: Highlight Left */}
          <div
            className={`${gradientBorderBoxClass} w-full md:w-[300px] p-4 flex flex-row items-center gap-2`}
          >
            <div className="min-w-[36px] max-w-[36px]">
              <img src="/assets/icon_add-footer.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-['Ubuntu'] text-[14px] font-bold leading-[150%] tracking-[-0.154px] m-0 bg-[linear-gradient(102deg,#FF8C27_3.95%,#FFC15D_18.11%,#FF8C27_31.33%,#FFC15D_47.04%,#FF8C27_61.02%,#FFC15D_74.88%,#FF8C27_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
                Сохранить проект в папку телеграмм
              </h4>
              <p className="text-[12px] text-[#888] m-0 leading-[1.6]">
                (Подписка на всю экосистему)
              </p>
            </div>
          </div>

          {/* Block 2: Highlight Center */}
          <div className="w-full md:w-[300px] rounded-[12px] border border-[#007568] bg-[rgba(0,62,55,0.89)] p-4 flex flex-row items-center gap-2">
            <div className="min-w-[36px] max-w-[36px]">
              <img src="/assets/icon_green.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#C3FFEE] font-['Inter'] text-[12px] font-bold leading-[150%] m-0">
                Оказываем услуги официально по договору
              </h4>
              <p className="text-[12px] text-[#888] m-0 leading-[1.6]">
                Более 50 реализованных проектов.
              </p>
            </div>
          </div>

          {/* Block 3: Highlight Right (Legal Data) */}
          <div
            className={`${gradientBorderBoxClass} w-full md:w-[300px] p-4 flex flex-col items-start text-left gap-2`}
          >
            <div className="font-['Ubuntu'] text-[12px] opacity-50 color-white uppercase tracking-[1px] mb-2">
              ЮРИДИЧЕСКИЕ ДАННЫЕ
            </div>
            <div className="flex flex-col gap-1 text-[12px] color-white font-bold leading-[1.6]">
              <div>
                <strong>ИНН:</strong> 780732984377
              </div>
              <div>
                <strong>ОГРН/ОГРНИП:</strong> 323784700302365
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="hidden md:flex max-w-[1305px] mx-auto mt-[40px] p-[30px] border border-transparent rounded-[24px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(0deg,#0F0C09_1000%,#0F0C09_100%),linear-gradient(124.35deg,#FE7905_3.69%,#2A0C00_45.84%,#A93301_98.89%)] shadow-[0px_4px_24.4px_0px_#663B0340] items-center">
        <div className="max-w-[150px] text-[17px] text-center font-normal leading-none tracking-normal text-black uppercase border-2 border-transparent rounded-[240px] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(0deg,#4AECDC_0%,#00AC9B_100%),linear-gradient(112.62deg,rgba(77,231,211,0.8)_-4.67%,rgba(0,0,0,0.8)_44.41%,rgba(77,231,211,0.8)_106.17%)] p-[10px] font-['Bebas_Neue',_sans-serif]">
          НАШ ТЕХНИЧЕСКИЙ СТЕК:
        </div>
        
        <div className="relative flex overflow-hidden flex-1 py-2 ml-4">
          <div className="absolute top-0 left-0 w-[60px] h-full bg-gradient-to-r from-[#120E09] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-[#120E09] to-transparent z-10"></div>

          <div className="flex flex-nowrap gap-3 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((item, idx) => (
              <span
                key={idx + 1}
                className={`flex items-center bg-[#191616] text-white py-2 px-3 rounded-[100px] text-[11px] font-medium tracking-[0.5px] transition-all duration-300 border border-transparent hover:border-[#ff9c1c] hover:text-[#ff9c1c] ${item.icon ? 'border-l-[#ff9c1c]/50 pr-[24px]' : ''}`}
              >
                {item.icon && (
                  <img 
                    src={item.icon} 
                    alt="" 
                    className="w-4 h-4 mr-2 object-contain" 
                  />
                  
                )}
                [{item.label}]
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
      className="flex flex-col md:flex-row items-center max-w-[1305px] mx-auto mt-10 justify-between w-full font-['Ubuntu'] not-italic text-[15px] text-[rgba(255,255,255,0.52)] whitespace-pre-wrap"
      style={{ fontFamily: 'Ubuntu, sans-serif' }}
    >
      <div className="leading-[0]">
        <p className="mb-0">
          <span className="leading-[15px]">© 2023–2026 GarantexAI. </span>
          <span className="leading-[15px] uppercase">Все права защищены</span>
        </p>
        <p className="leading-[15px]">
          Агентство ИИ, разработка ИИ-решений и автоматизация бизнес процессов.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 md:mt-0 gap-[16px] md:gap-[41px] items-center leading-[21.476px]">
        <Link href="/privacy" className="h-[23px] w-[231px] hover:text-[#ff9c1c] transition-colors duration-300">
          Политика конфиденциальности
        </Link>
        <Link href="/offer" className="h-[23px] w-[124px] hover:text-[#ff9c1c] transition-colors duration-300">
          Договор оферты
        </Link>
        <Link href="/sitemap" className="h-[23px] w-[87px] hover:text-[#ff9c1c] transition-colors duration-300">
          Карта сайта
        </Link>
      </div>
    </div>
    </footer>
  );
}