"use client";
import React, { use, useState } from 'react';
import styles from './rekvizit.module.scss';
import { div } from 'motion/react-client';

const Rekvizit: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.section}> 
    <div className={styles.rekvizitContainer}>
      <div className={styles.header} onClick={() => setOpen((prev) => !prev)}>
        <span className={styles.title}>РЕКВИЗИТЫ КОМПАНИИ</span>
        <button className={styles.toggleBtn} aria-label="Показать/скрыть реквизиты">
          <span className={open ? styles.arrowUp : styles.arrowDown}>
            <img src="/assets/icon_plus.png" alt="" />
          </span>
        </button>
      </div>
      {open && (
        <div className={styles.content}>
          <img className={styles.rekv} src="/assets/rekv.png" alt="" />
          <div className={styles.infoBlock}>
            <h3>ОСНОВНАЯ ИНФОРМАЦИЯ:</h3>
            <div>
              <b>НАЗВАНИЕ:</b><br/>
              Индивидуальный предприниматель<br/>
              Афанасьев Владимир Алексеевич
            </div>
            <div>
              <b>ЮРИДИЧЕСКИЙ АДРЕС:</b><br/>
              198205, Россия, Санкт-Петербург,<br/>
              ул. Партизана Германа, д. 10, корп. 1, кв. 159
            </div>
            <div>
              <b>ИНН:</b><br/>
              780732984377
            </div>
            <div>
              <b>ОГРНИП:</b><br/>
              323784700302365
            </div>
          </div>
          <div className={styles.infoBlock}>
            <h3>БАНКОВСКИЕ РЕКВИЗИТЫ</h3>
            <div>
              <b>РАСЧЕТНЫЙ СЧЕТ:</b><br/>
              40802810800008118744
            </div>
            <div>
              <b>БАНК:</b><br/>
              АО «ТБанк»
            </div>
            <div>
              <b>БИК:</b><br/>
              044525974
            </div>
            <div>
              <b>КОРР. СЧЕТ:</b><br/>
              30101810145250000974
            </div>
            <div>
              <b>АДРЕС БАНКА:</b><br/>
              127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <a href="#" className={styles.downloadBtn}>Скачать реквизиты (PDF)</a>
          </div>
        </div>
      )}
    </div>

     </div>

      );
};

export default Rekvizit;
