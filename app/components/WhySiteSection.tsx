import HeaderWrapper from "./headerWrapper";
import styles from "./styles/whySite.module.scss";

interface ReasonCard {
  number: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    number: "01",
    title: "ДОРОГАЯ КОНТЕКСТНАЯ РЕКЛАМА",
    description:
      'Остановили оплату — трафик обнулился. Конкуренты "скликивают" и сливают ваш баланс, а долгосрочного актива не появляется.',
  },
  {
    number: "02",
    title: "КОНТЕНТ БЕЗ СИСТЕМЫ НЕ ДАЁТ РЕЗУЛЬТАТА",
    description:
      "Когда статьи публикуются хаотично, поисковики не видят стабильности, а клиенты — экспертности. Без регулярности даже хороший контент теряет ценность.",
  },
  {
    number: "03",
    title: "КОНКУРЕНТЫ ЗАНИМАЮТ ПЕРВЫЕ СТРОЧКИ",
    description:
      "У них больше контента и он закрывает все вопросы клиента. Ваш сайт остаётся «невидимкой» — заявки уходят к ним.",
  },
  {
    number: "04",
    title: "РУЧНОЕ SEO УСТАРЕЛО",
    description:
      "Пока специалисты неделями подбирают ключи и пишут статьи, ИИ-системы создают сотни оптимизированных материалов и выводят сайты в топ в разы быстрее.",
  },
];

export default function WhySiteSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          href="#"
          kicker="#Причина"
          title="ПОЧЕМУ ВАШ САЙТ ДО СИХ ПОР"
          titleAccent="НЕ ПРИНОСИТ КЛИЕНТОВ"
        />

        <div className={styles.grid}>
          {reasonsData.map((reason) => (
            <article key={reason.number} className={styles.card}>
              <div className={styles.badge}>{reason.number}</div>
              <div className="flex flex-col gap-4">
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
