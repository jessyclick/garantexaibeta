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
    title: "Без маскота",
    badge: "",
    badgeColor: "red",
    icon: "/assets/icon_dislike.png",
    metrics: [
      "Без маскота",
      "Безликий бренд",
      "1 ролик = 50 000₽",
      "Зависимость от актёров",
      "Риск скандала",
      "Сложно масштабировать",
      
    ],
  },
  {
    title: "С маскотом",
    badge: "",
    badgeColor: "green",
    icon: "/assets/icon_glike.png",
    metrics: [
      "0 ₽ (после внедрения)",
      "Живой герой с характером",
      "1 ролик = 2500₽",
      "Полная автономия",
      "Идеальная репутация",
      "Хоть 1000 видео в день",
      
    ],
  },
];

export default function TariffsSection({
  comparisonMetrics = defaultMetrics,
  tariffs = defaultTariffs,
}: Props) {
  // Отделяем реальные тарифы от колонки с заголовками для мобилок
  const actualTariffs = tariffs.slice(1);

  return (
    <section className={`${styles.section} ${styles.news}`}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Факты"
          withBr={false}
          title="ЧТО ТАКОЕ "
          titleAccent="МАСКОТ 2.0?"
        />
        <p className={styles.subtitle}>
          Не просто картинка. Ваш идеальный сотрудник.
        Это 3D-персонаж, который живёт на вашем сайте, в соцсетях и рекламе.
        </p>
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
                            {tariff.icon && (
                              <span className={styles.icon}>
                                <img src={tariff.icon} alt="" />
                              </span>
                            )}
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
                  // Берем название параметра из первой колонки основного массива
                  // const label = tariffs[0].metrics[mIdx];
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