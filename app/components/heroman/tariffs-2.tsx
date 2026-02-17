import HeaderWrapper from "../headerWrapper";
import styles from "../expertPlatform/tariffs.module.scss";

type ComparisonMetric = {
  label: string;
  icon?: string;
};

type TariffColumn = {
  title: string;
  badge: string;
  badgeColor: "orange" | "red" | "green";
  metrics: string[];
  icon: string; // Новое поле для иконки
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
    title: "ПАРАМЕТР",
    badge: "",
    badgeColor: "orange",
    icon: "/assets/feauture-icon.png",
    metrics: [
      "Параметр",
      "Стоимость ролика",
      "Доступность",
      "Репутация",
      "Права",
      "Масштаб",
      
    ],
  },
  {
    title: "Актёр/Блогер",
    badge: "",
    badgeColor: "red",
    icon: "/assets/icon_dislike.png",
    metrics: [
      "60–100 тыс. ₽",
      "15 000 – 100 000₽",
      "Нужно согласовывать график",
      "Риск скандалов",
      "Временная лицензия",
      "5-10 роликов в месяц",
      
    ],
  },
  {
    title: "GARANTEX AI",
    badge: "",
    badgeColor: "green",
    icon: "/assets/icon_glike.png",
    metrics: [
      "0 ₽ (после внедрения)",
      "от 2500₽",
      "24/7 готов",
      "Идеальна",
      "Навсегда ваши",
      "Хоть 1000 в день",
      
    ],
  },
];

export default function TariffsSection2({
  comparisonMetrics = defaultMetrics,
  tariffs = defaultTariffs,
}: Props) {
  // Отделяем реальные тарифы от колонки с заголовками для мобилок
  const actualTariffs = tariffs.slice(1);

  return (
    <section className={`${styles.section} ${styles.news}`}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Считаем экономику"
          withBr={false}
          title="Маскот vs. Живой актёр:"
          titleAccent=" кто выгоднее?"
        />

        {/* ДЕСКТОР: Таблица (скрыта на мобильных через CSS) */}
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <tbody>
              {tariffs[0].metrics.map((_, rowIndex) => (
                <tr key={rowIndex} className={styles.tableRow}>
                  {tariffs.map((tariff, colIndex) => {
                    const isHeader = rowIndex === 0;
                    const isFirstColumn = colIndex === 0;

                    return (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          ${styles.tableCell}
                          ${isHeader ? styles.headerRow : ""}
                          ${isFirstColumn ? styles.firstColumn : ""}
                          ${styles[`badge-${tariff.badgeColor}`]}
                        `}
                      >
                        {isFirstColumn ? (
                          <div className={styles.metricLabel}>
                            <span className={styles.metricTitle}>
                              {tariff.metrics[rowIndex]}
                            </span>
                          </div>
                        ) : (
                          <>
                            {isHeader ? (
                              <div className={styles.headerContent}>
                                <h3 className={styles.tariffTitle}>
                                  {tariff.title}{" "}
                                  {tariff.badge && (
                                    <span className={styles.badgeText}>
                                      {tariff.badge}
                                    </span>
                                  )}
                                </h3>
                              </div>
                            ) : (
                              <div className={styles.metricValue}>
                                <span className={styles.icon}>
                                  <img src={tariff.icon} alt="" />
                                </span>
                                <span className={styles.text}>
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
        <div className={styles.mobileCards}>
          {tariffs.map((tariff, tIdx) => (
            <div key={tIdx} className={`${styles.mobileCard} ${styles[`badge-${tariff.badgeColor}`]}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.tariffTitle}>
                  {tariff.title}
                  {tariff.badge && <span className={styles.badgeText}>{tariff.badge}</span>}
                </h3>
              </div>
              <div className={styles.cardBody}>
                {tariff.metrics.map((value, mIdx) => {
                  // Пропускаем первый элемент (заголовок "Параметр")
                  if (mIdx === 0) return null;

                  // Берем название параметра из первой колонки основного массива
                  const label = tariffs[0].metrics[mIdx];

                  return (
                    <div key={mIdx} className={styles.mobileRow}>
                      
                      <div className={styles.mobileValue}>
                        <span className={styles.icon}>
                          <img src={tariff.icon} alt="" />
                        </span>
                        <span className={styles.text}>{value}</span>
                      </div>
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