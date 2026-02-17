import React from 'react';
import styles from './team.module.scss';
import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';

const team = [
  { name: 'Вадим Тихонов', role: 'CEO, стратегия и архитектура.' },
  { name: 'Сева', role: 'Ассистент и редактор.' },
  { name: 'Екатерина', role: 'Главный технический специалист (реализация сложных сценариев).' },
  { name: 'Владимир Афанасьев', role: 'Нейро-дизайнер (визуальная упаковка).' },
  { name: 'Александр', role: 'Программист, разработчик, вайб-кодер' },
  { name: 'Дмитрий', role: 'Маркетолог, чат-боты, ии-ассистенты продавцы' },
  { name: 'Семен', role: 'Работа с видео и монтажом.' },
  { name: 'Алиса', role: 'Работа с креативами.' },
];


const Team = () => (
  <section className={styles.teamSection}>
    <header className={"headerWrapper-module-scss-module__Xom2TG__header"}>
      <span className={"headerWrapper-module-scss-module__Xom2TG__kicker"}>#Люди за алгоритмами</span>
      <h2 className={"headerWrapper-module-scss-module__Xom2TG__title"}>
        Команда <span className={"headerWrapper-module-scss-module__Xom2TG__accent"}> Garantex AI </span>
      </h2>
    </header>
    <p className={styles.subtitle}>
      За каждым успешным кейсом стоят конкретные люди, <span className={styles.highlight}>фанаты своего дела</span>:
    </p>
    <div className={styles.teamGridWrapper}>
      <div className={styles.teamGrid}>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Вадим Тихонов</h3>
          <p className={styles.memberRole}>CEO, стратегия и архитектура.</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Сева</h3>
          <p className={styles.memberRole}>Ассистент и редактор.</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Екатерина</h3>
          <p className={styles.memberRole}>Главный технический специалист (реализация сложных сценариев).</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Владимир Афанасьев</h3>
          <p className={styles.memberRole}>Нейро-дизайнер (визуальная упаковка).</p>
        </div>
        <div className={styles.gridImage}>
          <img src="/assets/team-1.png" alt="team holo" width={320} height={220} />
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Александр</h3>
          <p className={styles.memberRole}>Программист, разработчик, вайб-кодер</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Дмитрий</h3>
          <p className={styles.memberRole}>Маркетолог, чат-боты, ии-ассистенты продавцы</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Семен</h3>
          <p className={styles.memberRole}>Работа с видео и монтажом.</p>
        </div>
        <div className={styles.memberCard}>
          <h3 className={styles.memberName}>Алиса</h3>
          <p className={styles.memberRole}>Работа с креативами.</p>
        </div>
        <div className={styles.gridImage + ' ' + styles.second}>
          <img src="/assets/team-2.png" alt="team holo" width={320} height={220} />
        </div>
      </div>
    </div>
  </section>
);

export default Team;
