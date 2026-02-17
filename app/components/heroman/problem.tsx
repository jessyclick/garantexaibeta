import React from 'react';
import Image from 'next/image';
import HeaderWrapper from '../headerWrapper';
import styles from './problem.module.scss';

const Problem = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.problemContent}>
        <div className={styles.problemImageWrapper}>
          <Image
            src="/assets/heroman-e.png"
            alt="AI face split illustration"
            width={480}
            height={480}
            className={styles.problemImage}
            priority
          />
        </div>
        <div className={styles.problemTextBlock}>
                  <HeaderWrapper
                    align="left"
                    withBr={false}
                    href=""
                    kicker="#Проблема"
                    title="ПОЧЕМУ"
                    titleAccent=" ВАС ЗАБЫВАЮТ?"
                  />
          <div className={styles.problemCase}>
            <b>Сергей потратил 300 000₽ на блогера.<br />Через месяц тот ушёл к конкуренту.</b>
            <br />
            Половина аудитории ушла за ним. Узнаёте ситуацию?
          </div>
          <ul className={styles.problemList}>
            <li>
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Безликость</b> — красивый логотип, который никто не помнит
            </li>
            <li>
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Скучная подача</b> — стоковые фото вызывают зевоту
            </li>
            <li>
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Нет доверия</b> — люди покупают у людей, а не у корпораций
            </li>
          </ul>
          <div className={styles.problemSolution}>
            <div className={styles.problemSolutionIcon}>
              <img src="/assets/feauture-icon.png" alt="" />
            </div>
            <div>
              <b>Простое решение:</b>
              <br />
              Дайте бренду лицо, голос и характер. <br />Один раз. Навсегда.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
