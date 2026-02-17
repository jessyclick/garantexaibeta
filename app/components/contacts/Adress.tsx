"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "./adress.module.scss";

// Динамически импортируем карту, чтобы она не ломала Next.js при сборке
const MapCustom = dynamic(() => import("../map"), { 
  ssr: false, 
  loading: () => <div className={styles.mapLoading}>Загрузка карты...</div>
});

export default function Adress() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cardLeft}>
          <h2 className={styles.header}>ОФИС И ВРЕМЯ РАБОТЫ</h2>

          <div className={styles.item}>
            <div className={styles.iconWrap}>
              <img src="/assets/icon_address.png" alt="location" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>АДРЕС</h3>
              <p className={styles.text}>
                198205, Россия, Санкт-Петербург,
                <br /> ул. Партизана Германа, д. 10, корп. 1, кв. 159
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconWrap}>
              <img src="/assets/icon_time1.png" alt="clock" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>ВРЕМЯ РАБОТЫ</h3>
              <p className={styles.text}>
                <strong>Пн–Пт:</strong> 9:00 – 18:00 (МСК)
                <br />
                <strong>Сб–Вс:</strong> выходной
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cardRight}>
          <div className={styles.mapPlaceholder}>
            {/* Отрисовываем нашу карту вместо текста */}
            <MapCustom />
          </div>
        </div>
      </div>
    </section>
  );
}