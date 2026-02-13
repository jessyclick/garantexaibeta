import HeaderWrapper from "../headerWrapper";
import styles from "./tariffs.module.scss";

type ComparisonMetric = {
  label: string;
  icon?: string;
};

type TariffColumn = {
  title: string;
  badge: string;
  badgeColor: "orange" | "red" | "green";
  metrics: string[];
};

type Props = {
  comparisonMetrics?: ComparisonMetric[];
  tariffs?: TariffColumn[];
};

const defaultMetrics: ComparisonMetric[] = [
  { label: "Стоимость в месяц", icon: "✓" },
  { label: "Вложения на старте", icon: "✓" },
  { label: "Скорость", icon: "✓" },
  { label: "Дистрибуция", icon: "✓" },
  { label: "Риски", icon: "✓" },
];

const defaultTariffs: TariffColumn[] = [
  {
    title: "ПАРАМЕТР",
    badge: "",
    badgeColor: "orange",
    metrics: [
      "Стоимость в месяц",
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
    metrics: [
      "0 ₽ (после внедрения)",
      "35 000 ₽ (разово)",
      "Неограниченно",
      "Авто-адаптация",
      "Нет рисков",
    ],
  },
];

export default function TariffsSection({
  comparisonMetrics = defaultMetrics,
  tariffs = defaultTariffs,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Та́риф"
          title="ЭКОНОМИКА,"
          titleAccent="КОТОРАЯ ГОВОРИТ САМА ЗА СЕБЯ"
        />

        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <tbody>
              {tariffs[0].metrics.map((metric, rowIndex) => (
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
                        {colIndex === 0 ? (
                          <div className={styles.metricLabel}>
                            <span className={styles.metricTitle}>
                              {metric}
                            </span>
                          </div>
                        ) : (
                          <>
                            {rowIndex === 0 && (
                              <div className={styles.headerContent}>
                                <h3 className={styles.tariffTitle}>
                                  {tariff.title}
                                </h3>
                                {tariff.badge && (
                                  <span className={styles.badgeText}>
                                    {tariff.badge}
                                  </span>
                                )}
                              </div>
                            )}
                            {rowIndex > 0 && (
                              <div className={styles.metricValue}>
                                <span className={styles.icon}>
                                  <img src="/assets/icon_dislike.png" alt="" />
                                </span>
                                <span className={styles.text}>{tariff.metrics[rowIndex]}</span>
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
      </div>
    </section>
  );
}
