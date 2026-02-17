import React from 'react';
import styles from './education.module.scss';
import HeaderWrapper from '../headerWrapper';
import { style } from 'motion/react-client';

const educationData = [
  {
    icon: '/assets/ed-1.png',
    title: 'РЕГУЛЯРНЫЙ НЕТВОРКИНГ',
    description: (
      <>
        Мы организуем <b>открытые онлайн-встречи</b> для общения, знакомств и обмена опытом между участниками. А так же отвечаем на ваши вопросы и наглядно демонстрируем процессы работы с ИИ инструментами
      </>
    ),
  },
  {
    icon: '/assets/ed-2.png',
    title: 'ДОСТУПНАЯ БАЗА ЗНАНИЙ',
    description: (
      <>
        Мы ведем <b>открытый архив знаний и инструментов</b> в Telegram (подробнее о нем расскажем в блоке ниже), чтобы любой мог начать погружение в тему ИИ бесплатно и продуктивно.
      </>
    ),
  },
];

const Education = () => (
  <section className={styles.educationSection}>
    <div className={styles.container}>
<HeaderWrapper
                     href=""
                     withBr={false}
                     kicker="#Education"
                     title="Образовательная  "
                     titleAccent="деятельность"
                   />
    <div className={styles.subtitle}>
      Мы придерживаемся принципа <b>радикальной открытости</b>.<br />
      Мы не прячем свои методы — мы делимся и транслируем эту идею <span style={{ color: '#FFA726' }}>в нашем комьюнити</span>.
    </div>
    <div className={styles.cards}>
      {educationData.map((item, idx) => (
        <div className={styles.card} key={idx}>
            <div className="flex items-center gap-4">
<img src={item.icon} alt={item.title} className={styles.icon} />
          <div className={styles.cardTitle}>{item.title}</div>
            </div>
          
          <div className={styles.cardDesc}>{item.description}</div>
        </div>
      ))}
    </div>
    </div>
    
  </section>
);

export default Education;
