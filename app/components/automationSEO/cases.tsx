import styles from '../styles/automationSEO/case.module.scss';
import HeaderWrapper from "../headerWrapper";

type Metric = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

type ComparisonData = {
  before: Metric[];
  after: Metric[];
};

type Props = {
  data?: ComparisonData;
};

const defaultData: ComparisonData = {
  before: [
    { label: "посетителей / мес", value: "500" },
    { label: "из поиска", value: "0" },
  ],
  after: [
    { label: "посетителей / мес", value: "5 000" },
    { label: "Ежемесячный стабильный поток", value: "" },
  ],
};

export default function CaseSection({ data = defaultData }: Props) {
  return (
    <section className={styles.resultsSection}>
      <div className={styles.resultsContainer}>
        <HeaderWrapper
          href=""
          withBr={false}
          kicker="#Keito"
          title="РОСТ ТРАФИКА X10"
          titleAccent="ЗА 4 МЕСЯЦА"
        />

        <div className={styles.comparisonGrid}>
          {/* Левая колонка - Показатели */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>ПОКАЗАТЕЛЬ</div>
            <div className={styles.metricsColumn}>
              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>
                  <img src="/assets/icon_trafic.png" alt="" />
                </div>
                <span className={styles.metricLabel}>ТРАФИК</span>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>
                  <img src="/assets/icon_zayavki.png" alt="" />
                </div>
                <span className={styles.metricLabel}>ЗАЯВКИ</span>
              </div>
            </div>
          </div>

          {/* Средняя колонка - ДО */}
          <div className={`${styles.column} ${styles.beforeColumn}`}>
            <div className={`${styles.columnHeader} ${styles.beforeHeader}`}>
              ДО
            </div>
            <div className={styles.metricsColumn}>
              {data.before.map((metric, index) => (
                <div key={index} className={styles.compareMetric}>
                  <div className={styles.compareIcon}>
                    <img src="/assets/icon_ydislike.png" alt="" />
                  </div>
                  <div className={styles.compareContent}>
                    <div className={styles.compareValue}>{metric.value}</div>
                    <div className={styles.compareLabel}>{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - ПОСЛЕ */}
          <div className={`${styles.column} ${styles.afterColumn}`}>
            <div className={`${styles.columnHeader} ${styles.afterHeader}`}>
              ПОСЛЕ
            </div>
            <div className={styles.metricsColumn}>
              {data.after.map((metric, index) => (
                <div key={index} className={styles.compareMetric}>
                  <div className={styles.compareIcon}>
                    <img src="/assets/icon_blike.png" alt="" />
                  </div>
                  <div className={styles.compareContent}>
                    <div className={styles.compareValue}>{metric.value}</div>
                    <div className={styles.compareLabel}>{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
