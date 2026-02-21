import HeaderWrapper from "../headerWrapper";

type ComparisonMetric = {
  label: string;
  icon?: string;
};

type TariffColumn = {
  title: string;
  badge: string;
  badgeColor: "orange" | "red" | "green";
  metrics: string[];
  icon: string;
};

type Props = {
  comparisonMetrics?: ComparisonMetric[];
  tariffs?: TariffColumn[];
};

const defaultMetrics: ComparisonMetric[] = [
  { label: "Стоимость в месяц" },
  { label: "Вложения на старте" },
  { label: "Скорость" },
  { label: "Дистрибуция" },
  { label: "Риски" },
];

const defaultTariffs: TariffColumn[] = [
  {
    title: "Параметр",
    badge: "",
    badgeColor: "orange",
    icon: "/assets/feauture-icon.png",
    metrics: [
      "Параметр",
      "Вложения на старте",
      "Скорость",
      "Дистрибуция",
      "Риски",
    ],
  },
  {
    title: "СВОЯ РЕДАКЦИЯ",
    badge: "(2-3 чел)",
    badgeColor: "red",
    icon: "/assets/icon_dislike.png",
    metrics: [
      "120 000 – 200 000 ₽",
      "Найм, обучение, налоги",
      "1-2 статьи в неделю",
      "Ручная адаптация (долго)",
      "Увольнения, выгорание",
    ],
  },
  {
    title: "PR-АГЕНТСТВО",
    badge: "",
    badgeColor: "red",
    icon: "/assets/icon_dislike.png",
    metrics: [
      "150 000 – 300 000 ₽",
      "Договоры, брифы",
      "2-4 статьи в месяц",
      "За доп. плату",
      "Размытая ответственность",
    ],
  },
  {
    title: "AI-СИСТЕМА GARANTEX",
    badge: "",
    badgeColor: "green",
    icon: "/assets/icon_glike.png",
    metrics: [
      "0 ₽ (после внедрения)",
      "35 000 ₽ (разово)",
      "Неограниченно",
      "Авто-адаптация",
      "Нет рисков",
    ],
  },
];

// Вспомогательная функция для стилей заголовков
const getHeaderStyle = (color: "orange" | "red" | "green") => {
  const base = "flex flex-col items-center justify-center h-[50px] px-[30px] font-['Bebas_Neue',_sans-serif] text-[20px] md:text-[24px] font-normal leading-[1.3] text-center m-0";
  if (color === "orange") {
    return `${base} bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent`;
  }
  if (color === "red") {
    return `${base} text-white rounded-[8.315px] bg-[linear-gradient(90deg,#9B0300_0%,#750200_57.69%,#9B0300_100%)] shadow-[0_4.134px_25.218px_0_rgba(102,59,3,0.25)]`;
  }
  return `${base} text-white rounded-[8.315px] bg-[linear-gradient(180deg,#01A52D_0%,#197B33_100%)] shadow-[0_4.134px_25.218px_0_rgba(102,59,3,0.25)]`;
};

export default function TariffsSection({
  comparisonMetrics = defaultMetrics,
  tariffs = defaultTariffs,
}: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-[60px] text-center">
          <HeaderWrapper
            kicker="#Та́риф"
            title="ЭКОНОМИКА,"
            titleAccent="КОТОРАЯ ГОВОРИТ САМА ЗА СЕБЯ"
          />
        </div>

        {/* ДЕСКТОП: Таблица (скрыта на мобильных) */}
        <div className="hidden md:block overflow-x-auto rounded-[20px] p-[32px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]">
          <table className="w-full border-collapse table-auto text-[13px] lg:text-base">
            <tbody>
              {tariffs[0].metrics.map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[rgba(255,156,28,0.2)] last:border-b-0"
                >
                  {tariffs.map((tariff, colIndex) => {
                    const isHeader = rowIndex === 0;
                    const isFirstColumn = colIndex === 0;

                    return (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        className={`p-[24px] align-top border-r border-[rgba(255,156,28,0.15)] last:border-r-0 ${
                          isFirstColumn ? "sticky left-0 z-10 min-w-[120px] text-white font-semibold" : ""
                        } ${isHeader ? "pt-[16px] pb-[20px]" : ""} ${
                          rowIndex === 0 ? "pt-0" : ""
                        }`}
                      >
                        {isFirstColumn ? (
                          <div className="flex items-center justify-center min-h-[48px] gap-2">
                            {isHeader ? (
                              <div className="flex items-center justify-center min-h-[48px] w-full rounded-[8.315px] bg-[linear-gradient(108deg,#FF9C1C_5.75%,#FFCB78_30.93%,#FF9C1C_107.22%,#FFCB78_131.88%,#FF9C1C_154.4%)] shadow-[0_4.134px_25.218px_0_rgba(102,59,3,0.25)] px-2">
                                <span className="text-black text-center font-['Bebas_Neue',_sans-serif] text-[24px] font-normal leading-normal">
                                  {tariff.metrics[rowIndex]}
                                </span>
                              </div>
                            ) : (
                              <span className="font-['Inter',_sans-serif] font-normal text-[17px] leading-[22px] text-white">
                                {tariff.metrics[rowIndex]}
                              </span>
                            )}
                          </div>
                        ) : (
                          <>
                            {isHeader ? (
                              <div className="flex flex-col items-center gap-2">
                                <h3 className={getHeaderStyle(tariff.badgeColor)}>
                                  {tariff.title}{" "}
                                  {tariff.badge && (
                                    <span className="text-[12px] text-[#999] font-normal">
                                      {tariff.badge}
                                    </span>
                                  )}
                                </h3>
                              </div>
                            ) : (
                              <div className="flex items-center gap-[12px] min-h-[48px]">
                                <span className="w-[32px] shrink-0 inline-flex items-center justify-center min-w-[20px] min-h-[20px]">
                                  <img src={tariff.icon} alt="" />
                                </span>
                                <span className="font-['Inter',_sans-serif] font-normal text-[17px] leading-[22px] text-white">
                                  {tariff.metrics[rowIndex]}
                                </span>
                              </div>
                            )}
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* МОБИЛКА: Карточки (видны только на малых экранах) */}
        <div className="block md:hidden flex flex-col gap-6">
          {tariffs.map((tariff, tIdx) => (
            <div
              key={tIdx}
              className="rounded-[20px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(163deg,#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] p-[32px_40px]"
            >
              <div className="flex justify-center mb-4">
                <h3 className={getHeaderStyle(tariff.badgeColor)}>
                  {tariff.title}
                  {tariff.badge && (
                    <span className="text-[10px] text-[#999] font-normal ml-1">
                      {tariff.badge}
                    </span>
                  )}
                </h3>
              </div>
              <div className="flex flex-col gap-[12px] mt-[16px]">
                {tariff.metrics.map((value, mIdx) => {
                  // Пропускаем первый элемент (заголовок "Параметр")
                  if (mIdx === 0) return null;

                  return (
                    <div key={mIdx} className="flex items-center gap-[8px]">
                      <span className="w-[32px] shrink-0 inline-flex items-center justify-center min-w-[20px] min-h-[20px]">
                        <img src={tariff.icon} alt="" />
                      </span>
                      <span className="font-['Inter',_sans-serif] font-normal text-[17px] leading-[22px] text-white">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}