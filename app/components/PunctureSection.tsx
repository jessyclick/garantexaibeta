import styles from "./styles/puncture.module.scss";
import HeaderWrapper from "./headerWrapper";

type FeatureBox = {
  icon: React.ReactNode;
  title: string;
  description: string;
  size?: "large" | "small";
};

type Props = {
  imageUrl?: string;
  mainFeature?: FeatureBox;
  secondaryFeatures?: FeatureBox[];
};

const defaultMainFeature: FeatureBox = {
  icon: "/assets/icon_shesterenka.png",
  title: "ПРИНЦИП РАБОТЫ",
  description:
    "Нейросеть подбирает темы под реальные поисковые запросы, ИИ-копирайтер пишет тексты в вашем стиле и делает их SEO / GEO / AEO-оптимизированными.. Система публикует статьи автоматически по расписанию, создавая стабильный поток контента без вашего участия.",
  size: "large",
};

const defaultSecondaryFeatures: FeatureBox[] = [
  {
    icon: "/assets/icon_stairs.png",
    title: "РОСТ БЕЗ ЗАТРАТ",
    description:
      "Постепенное увеличение органического трафика без необходимости вложений в рекламу. Контент сам привлекает аудиторию.",
    size: "small",
  },
  {
    icon: "/assets/icon_tower.png",
    title: "РАБОТАЕТ ГОДАМИ",
    description:
      "Созданные статьи сохраняют позиции в поиске и продолжают приносить посетителей долгое время после публикации.",
    size: "small",
  },
];

export default function PunctureSection({
  imageUrl,
  mainFeature = defaultMainFeature,
  secondaryFeatures = defaultSecondaryFeatures,
}: Props) {
  return (
    <section className={styles.punctureSection}>
      <div className={styles.container}>
        {/* Левая часть - изображение */}
        <div className={styles.imageColumn}>
          <img src="/assets/right-side.png" alt="" />
        </div>

        {/* Правая часть - контент */}
        <div className={styles.contentColumn}>
          <HeaderWrapper
            align="left"
            withBr={false}
            href=""
            kicker="#Решение"
            title="ЧТО ЭТО И ПОЧЕМУ"
            titleAccent="ЭТО РАБОТАЕТ"
          />

          {/* Главный бокс */}
          <div className={`${styles.featureBox} ${styles.mainFeature}`}>
            <div className={styles.mainHeaderRow}>
              {typeof mainFeature.icon === 'string' ? (
                <img
                  src={mainFeature.icon}
                  alt={mainFeature.title}
                  className={styles.mainIcon}
                />
              ) : (
                <div className={styles.iconWrapper}>{mainFeature.icon}</div>
              )}

              <h3 className={styles.featureTitle}>{mainFeature.title}</h3>
            </div>

            <p className={styles.featureDescription}>{mainFeature.description}</p>
          </div>

          {/* Два вторичных боксa внизу */}
          <div className={styles.secondaryFeatures}>
            {secondaryFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureBox} ${styles.secondaryFeature}`}
              >
                <div className={styles.mainHeaderRow}>
              {typeof feature.icon === 'string' ? (
                <img
                  src={feature.icon}
                  alt={mainFeature.title}
                  className={styles.mainIcon}
                />
              ) : (
                <div className={styles.iconWrapper}>{feature.icon}</div>
              )}

              <h3 className={styles.featureTitle}>{feature.title}</h3>
            </div>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
