'use client';

import { useState } from 'react';
import styles from './faq.module.scss';
import HeaderWrapper from '../headerWrapper';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Подойдёт ли эта система моему бизнесу??',
      answer: 'Наша система использует передовые алгоритмы обработки естественного языка для создания оригинального контента, который звучит естественно и не воспринимается как робототехнический.'
    },
    {
      id: '2',
      question: 'Это безопасно? Не получу ли я санкции от Яндекса и Google?',
      answer: 'Да, абсолютно безопасно. Мы используем официальные API социальных сетей и полностью соблюдаем их правила. Ваш аккаунт не будет заблокирован.'
    },
    {
      id: '3',
      question: 'Чем это лучше обычного SEO-агентства?',
      answer: 'У нас есть полная система резервного копирования и отказоустойчивости. Все критические функции имеют резервные каналы. Мы также предоставляем техническую поддержку 24/7.'
    },
    {
      id: '4',
      question: 'Сколько времени нужно с моей стороны?',
      answer: 'Да, вы можете загрузить свой собственный контент и использовать его с нашей системой автоматизации. Она будет адаптировать его для разных платформ.'
    },
    {
      id: '5',
      question: 'Что будет, если я уже веду SEO с другим подрядчиком?',
      answer: 'Да, мы предоставляем подробную аналитику, отслеживание метрик, отчеты об эффективности и рекомендации по улучшению вашей стратегии социальных сетей.'
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Вопрос-ответ"
          title="ЧАСТЫЕ ВОПРОСЫ"
          titleAccent="И ОТВЕТЫ"
          align="center"
          withBr={false}
        />

        <div className={styles.faqContent}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${expanded === item.id ? styles.active : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleExpanded(item.id)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.toggleIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {expanded === item.id && (
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
