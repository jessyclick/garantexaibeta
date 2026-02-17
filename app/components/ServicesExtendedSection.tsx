export default function ServicesExtendedSection() {
  const services = [
    {
      id: 1,
      title: "ВЕДЕНИЕ СОЦСЕТЕЙ",
      description: "автоматизированный SMM и автопостинг.",
      image: "/assets/soc-media.png",
    },
    {
      id: 2,
      title: "ВЕДЕНИЕ МЕДИА-ПЛАТФОРМ",
      description: "экспертные публикации на ключевых ресурсах.",
      image: "/assets/soc-platform.png",
    },
    {
      id: 3,
      title: "НОВОСТИ НА АВТОПИЛОТЕ",
      description: "мониторинг, ремонт и публикация до 10 новостей в день.",
      image: "/assets/news.png",
    },
  ];

  return (
    <section className="pt-[48px] px-4 pb-[64px] sm:pt-[64px] sm:px-5 sm:pb-[84px] text-white bg-[url('/assets/ct-bg.png')] bg-cover bg-center">
      <div className="max-w-[1305px] mx-auto">
        <div className="text-center mb-[48px]">
          <h2 className="text-[32px] lg:text-[44px] xl:text-[56px] leading-[1.2] font-['Bebas_Neue',_sans-serif] m-0 font-normal tracking-[0.02em]">
            ЕЩЁ УСЛУГИ, КОТОРЫЕ ПРОДВИНУТ
            <span className="text-[#ffb03b]"> ВАШ БИЗНЕС С ПОМОЩЬЮ ИИ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-[18px] flex flex-col items-start text-left relative transition-all duration-300 ease-in-out hover:-translate-y-1 p-[20px_16px] sm:p-0"
            >
              <div className="w-full mb-4 sm:mb-6 rounded-xl overflow-hidden h-auto">
                <img
                  className="w-full h-full object-cover block"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h3 className="text-white font-['Bebas_Neue'] text-[25px] sm:text-[2rem] font-normal sm:max-w-[12rem] max-w-none leading-[1.80725rem] m-0 mb-3 tracking-[0.02em]">
                {service.title}
              </h3>
              <p className="text-white/85 font-inter text-[0.9rem] sm:text-[1rem] font-normal leading-[1.5] m-0 mb-6 grow">
                {service.description}
              </p>
              <button className="mt-auto py-3 px-7 border border-[#ffb03b] bg-transparent text-[#ffb03b] font-inter text-[1rem] font-medium rounded-lg cursor-pointer transition-colors duration-300 tracking-[0.02em] hover:bg-[#ffb03b] hover:text-[#1a1512]">
                Подробнее
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}