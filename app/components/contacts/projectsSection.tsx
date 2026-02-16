import styles from "./projectsSection.module.scss";

type ProjectCard = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLabel?: string;
};

type Props = {
  projects?: ProjectCard[];
  imageUrls?: string[];
};

const defaultProjects: ProjectCard[] = [
  {
    badge: "ОСНОВАТЕЛЬ И СЕО",
    title: "ТИХОНОВ ВАДИМ",
    subtitle: "GARANTEX AI",
    description:
      "Мы создали агентство, которое говорит на языке результата, а не обещаний. Каждая наша услуга прошла проверку реальными проектами и принесла измеримую пользу клиентам.",
    buttonLabel: "Сохранить наши проекты",
  },
  {
    badge: "",
    title: "",
    subtitle: "COMPLEX AI",
    description:
      "А ещё мы строим бесплатное нейро-комьюнити — живую экосистему из 1000+ специалистов, где каждый день публикуем новости, промпты, шаблоны автоматизации и проводим еженедельные встречи, где мы можем поообщаться вживую. Присоединяйтесь!",
    buttonLabel: "Сохранить наши проекты",
  },
];

export default function ProjectsSection({
  projects = defaultProjects,
  imageUrls = ["/assets/project-1.png", "/assets/project-2.png"],
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.background} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Images */}
          <div className={styles.imageColumn}>
            <div className={styles.imagesStack}>
              {imageUrls.map((url, index) => (
                <div key={index} className={styles.imageCard}>
                  <img src={url} alt={`Project ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className={styles.decorElement} />
          </div>

          {/* Right side - Project cards */}
          <div className={styles.projectsColumn}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.cardBadge}>{project.badge}</div>

                <h3 className={styles.projectTitle}>{project.title}</h3>

                {project.subtitle && (
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                )}

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {index === 1 && (
                  <button className={styles.ctaButton}>
                    {project.buttonLabel}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.decorTopRight} />
      <div className={styles.decorBottomRight} />
    </section>
  );
}
