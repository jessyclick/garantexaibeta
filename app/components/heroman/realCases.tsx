import React from 'react';
import styles from './realCases.module.scss';
import HeaderWrapper from '../headerWrapper';

// Example icon imports (replace with your actual paths)

const RealCases = () => {
  return (
    <section className={styles.realCasesSection}>
      <div className={styles.container}>
<HeaderWrapper
                          align="center"
                          withBr={false}
                          href=""
                          kicker="#Реальные кейсы"
                          title="Где уже работают"
                          titleAccent=" цифровые сотрудники?"
                        />
      <div className={styles.casesGrid}>
        <div className={styles.caseItem}>
          
          <h3>VOVE.APP<br/>(КРИПТО-СТАРТАП)</h3>
          <p>Маскот объясняет сложные термины простым языком.</p>
          <div className={styles.resultBox}>
            <b>Результат:</b><br/>Рост доверия в агрессивной нише
          </div>
        </div>
        <div className={styles.caseItem}>
          
          <h3>PUMPY<br/>(СЕРВИС)</h3>
          <p>Дружелюбный помощник ведёт клиентов до покупки.</p>
          <div className={styles.resultBox}>
            <b>Результат:</b><br/>Рост доверия в агрессивной нише
          </div>
        </div>
        <div className={styles.caseItem}>
        
          <h3>ВАШ БРЕНД:</h3>
          <ul className={styles.brandList}>
            <li>
              <span>В соцсетях</span>
              <div className={styles.resultBox}>ведёт Reels и собирает охваты</div>
            </li>
            <li>
              <span>На сайте</span>
              <div className={styles.resultBox}>работает как видео-консультант</div>
            </li>
            <li>
              <span>В обучении</span>
              <div className={styles.resultBox}>проводит инструктажи <br/>(сотрудники их реально смотрят!)</div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default RealCases;
