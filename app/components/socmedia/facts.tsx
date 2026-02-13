import React from "react";
import HeaderWrapper from "../headerWrapper";
import styles from "./facts.module.scss";
import { span } from "motion/react-client";

export default function Facts() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Факты"
          title={<span>Экономика,</span>}
          titleAccent={<span className="color-white">которая говорит сама за себя</span>}
          withBr={false}
        />

        <div className={styles.subtitle}>
          <p>Сравнение обычного SMM-менеджера и умной SMM-системы по ключевым параметрам</p>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.paramCard}`}>
            <h3 className={styles.cardTitle}>ПАРАМЕТР</h3>

            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <img className={styles.metaIcon} src="/assets/icon_p1.png" alt="" /> 
                ГОДОВАЯ СТОИМОСТЬ
               </div>
              <div className={styles.metaItem}>
                <img className={styles.metaIcon} src="/assets/icon_p2.png" alt="" /> 
                КОЛИЧЕСТВО ПЛАТФОРМ</div>
              <div className={styles.metaItem}>
                <img className={styles.metaIcon} src="/assets/icon_p3.png" alt="" /> 
                ОБЪЁМ КОНТЕНТА</div>
              <div className={styles.metaItem}>
                <img className={styles.metaIcon} src="/assets/icon_p4.png" alt="" /> 
                НАДЁЖНОСТЬ</div>
            </div>

            <button className={styles.resultBtn}>
                <img src="/assets/checkicon.png" alt="" /> РЕЗУЛЬТАТ</button>
          </article>

          <article className={`${styles.card} ${styles.centerCard}`}>
            <div className={`${styles.badge} ${styles.redBadge}`}>ОБЫЧНЫЙ SMM-МЕНЕДЖЕР</div>

            <div className={styles.list}>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbDown}`}>
                <img src="/assets/icon_dislike.png" alt="" /></span>600 000 — 960 000 ₽</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbDown}`}>
                <img src="/assets/icon_dislike.png" alt="" /></span>1–2 соцсети</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbDown}`}>
                <img src="/assets/icon_dislike.png" alt="" /></span>1–2 поста в день</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbDown}`}>
                <img src="/assets/icon_dislike.png" alt="" /></span>Зависит от человека</div>
            </div>

            <button className={styles.resultBtn}>
                 <img src="/assets/icon_down.png" alt="" /> 
                 МЕДЛЕННЫЙ РОСТ</button>
          </article>

          <article className={`${styles.card} ${styles.rightCard}`}>
            <div className={`${styles.badge} ${styles.greenBadge}`}>УМНАЯ SMM-СИСТЕМА</div>

            <div className={styles.list}>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbUp}`}>
                <img src="/assets/icon_glike.png" alt="" /></span>от 50 000 ₽ (настройка + поддержка)</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbUp}`}>
                <img src="/assets/icon_glike.png" alt="" /></span>7+ площадок одновременно</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbUp}`}>
                <img src="/assets/icon_glike.png" alt="" /></span>5–30 постов в день</div>
              <div className={styles.listItem}><span className={`${styles.iconThumb} ${styles.thumbUp}`}>
                <img src="/assets/icon_glike.png" alt="" /></span>Работает стабильно 24/7/365</div>
            </div>

            <button className={styles.resultBtn}>
                <img src="/assets/icon_up.png" alt="" /> ВЗРЫВНОЙ РОСТ</button>
          </article>
        </div>
      </div>
    </section>
  );
}