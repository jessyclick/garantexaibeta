import HeaderWrapper from "./headerWrapper";

export default function AutomationServicesExtendedSection() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Анализ ниши и семантики",
      description:
        "Погружаемся в специфику вашего бизнеса, анализируем конкурентов и целевую аудиторию.",
      image: "/assets/services_0001.png",
    },
    {
      id: 2,
      number: "02",
      title: "Сбор данных о компании",
      description:
        "Фиксируем тон бренда, информацию о продуктах, боли ЦА, ограничения, слоганы и ценности — чтобы писать «вашим голосом».",
      image: "/assets/services_0002.png",
    },
    {
      id: 3,
      number: "03",
      title: "Разработка контент-плана",
      description:
        "Для каждого ключа мы формируем план из заголовка, описания, боли ЦА, доп. ключей, LSI-фраз, триггеров и CTA — так получаются максимально релевантные материалы.",
      image: "/assets/services_0003.png",
    },
  ];

  return (
    <section className="pt-[48px] px-4 pb-[64px] sm:pt-[64px] sm:px-5 sm:pb-[84px] text-white bg-[url('/assets/ct-bg.png')] bg-cover bg-center">
      <div className="max-w-[1305px] mx-auto">
        <div className="mb-12 text-center">
          <HeaderWrapper
            align="center"
            withBr={false}
            href=""
            kicker="#По шагам"
            title="Как работает"
            titleAccent="наша система"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-[18px] flex flex-col items-start text-left relative transition-all duration-300 hover:-translate-y-1 p-[20px_16px] sm:p-0"
            >
              <div className="w-full mb-4 sm:mb-6 rounded-[12px] overflow-hidden h-auto">
                <img
                  className="w-full h-full object-cover block"
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="flex gap-4 mb-2 items-center">
                <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-[4px] border border-transparent text-[#FF9C1C] text-[24px] font-['Bebas_Neue',_sans-serif] bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#FE7905_3.69%,#2A0C00_45.84%,#A93301_98.89%)]">
                  {service.number}
                </div>
                <h3 className="text-white font-['Bebas_Neue',_sans-serif] text-[25px] sm:text-[2.04044rem] font-normal leading-[1.80725rem] tracking-[0.02em] m-0 max-w-none">
                  {service.title}
                </h3>
              </div>

              <p className="text-white/85 font-['Inter',_sans-serif] text-[0.9rem] sm:text-[1rem] font-normal leading-[1.5] m-0 mb-6 grow">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}