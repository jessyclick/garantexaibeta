import Image from "next/image"; // Рекомендуется для Next.js
import styles from "./whyImportant.module.scss";

// 1. Импортируем иконки (убедитесь, что пути верны)


type FeatureCard = {
  icon: string; // Теперь здесь будет путь к файлу
  title: string;
  description: string;
};

type Props = {
  features?: FeatureCard[];
  imageUrl?: string;
  calloutText?: string;
  mainTitle?: string;
  mainTitleAccent?: string;
  subtitle?: string;
};

// 2. Обновляем дефолтные данные путями к картинкам
const defaultFeatures: FeatureCard[] = [
  {
    icon: "/assets/icon_c1.png",
    title: "НАШИ ПОЗНАНИЯ",
    description:
      "Мы не теоретики — услуги с ИИ которые мы оказываем, приносят коммерческий результат нам и клиентам, повысив их продуктивность и экономию.",
  },
  {
    icon: "/assets/icon_c2.png",
    title: "ПОКАЗЫВАЕМ. КАК ЭТО ДЕЛАЕТСЯ",
    description:
      "Создание контента и креативов, автоматизация процессов и задач — всё наглядно и по шагам.",
  },
  {
    icon: "/assets/icon_c3.png",
    title: "ГОТОВЫЕ РЕШЕНИЯ ДЛЯ ВНЕДРЕНИЯ",
    description:
      "Практические гайды и материалы для работы с ИИ — конкируйте и применяйте в своём контенте, SEO и SMM уже сегодня.",
  },
  {
    icon: "/assets/icon_c4.png",
    title: "РАЗБОРЫ КЕЙСОВ",
    description:
      "Показываем путь от запуска до результата: какие инструменты использовали, что и как сделали, сколько клиент заработал или сэкономил.",
  },
];

export default function WhyImportantSection({
  features = defaultFeatures,
  imageUrl = "/assets/contact-p.png",
  calloutText = "Оставаясь с нами на связи, вы всегда будете получать актуальные, полезные и практические знания из мира ИИ.",
  mainTitle = "ЧТОБЫ НЕ ПОТЕРЯТЬ НАШ КОНТАКТ, ПОЖАЛУЙСТА,",
  mainTitleAccent = "ПОДПИШИТЕСЬ НА НАШ TELEGRAM-КАНАЛ",
  subtitle = "Транслируем реальный опыт внедрения ИИ в бизнес и жизнь — показываем процесс и даём инструменты. Делимся только тем, что действительно работает на практике.",
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.background} />

      <div className={styles.container}>
        <div className={styles.headerSection}>
          <div className={styles.badge}>ЭТО ВАЖНО</div>
          <h2 className={styles.mainTitle}>
            {mainTitle}
            <br />
            <span className={styles.accent}>{mainTitleAccent}</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.leftColumn}>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  {/* 3. Отрисовываем картинку вместо текста */}
                  <div className="flex items-center gap-2">
                        <div className={styles.cardIcon}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className={styles.iconImage} 
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  </div>
                  
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <img src={imageUrl} alt="AI Technology" className={styles.image} />
              <div className={styles.calloutBox}>
                <p className={styles.calloutText}>{calloutText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
    </section>
  );
}