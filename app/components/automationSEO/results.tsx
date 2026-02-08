import styles from '../styles/automationSEO/results.module.scss';

export default function SEOResults() {
  const results = [
    {
      id: '01',
      title: 'ЧЕРЕЗ 1 МЕСЯЦ:',
      description: 'рост видимости и индексация первых десятков статей.'
    },
    {
      id: '02',
      title: 'ЧЕРЕЗ 3 МЕСЯЦА:',
      description: 'трафик × 3-5 и первые стабильные заявки из поиска.'
    },
    {
      id: '03',
      title: 'ЧЕРЕЗ 6 МЕСЯЦЕВ:',
      description: 'поток клиентов, трафик × 5-10, сотни запросов в ТОП-10.'
    }
  ];

  return (
    <section className={styles.seoResults}>
      <div className={styles.container}>
        

        <div className={styles.illustration}>
          <div className={styles.seoIcon}>
            <img src="/assets/result_icon.png" alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            КАКИХ <span className={styles.highlight}>РЕЗУЛЬТАТОВ</span> ОЖИДАТЬ
          </h2>

          <div className={styles.timeline}>
            {results.map((result) => (
              <div key={result.id} className={styles.timelineItem}>
                <div className={styles.badge}>{result.id}</div>
                <div className={styles.textBlock}>
                  <h3 className={styles.itemTitle}>{result.title}</h3>
                  <p className={styles.itemDescription}>{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}