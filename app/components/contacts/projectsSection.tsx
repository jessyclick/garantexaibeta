import Image from 'next/image'
import styles from './projectsSection.module.scss'

type Platform = {
  id: string
  name: string
  img: string
}

const left: Platform[] = [
  { id: 'vk', name: 'VK', img: '/assets/icon_c-vk.png' },
  { id: 'ok', name: 'Одноклассники', img: '/assets/icon_c-odno.png' },
]

const center: Platform[] = [
  { id: 'dzen', name: 'Яндекс Дзен', img: '/assets/icon_c-dzen.png' },
  { id: 'tenchat', name: 'TenChat', img: '/assets/icon_c-habr.png' },
  { id: 'habr', name: 'Habr', img: '/assets/habr.png' },
]

const right: Platform[] = [
  { id: 'youtube', name: 'YouTube', img: '/assets/icon_c-youtube.png' },
  { id: 'vkvideo', name: 'VK Video', img: '/assets/icon_c-vk-video.png' },
  { id: 'rutube', name: 'Rutube', img: '/assets/icon_c-rutube.png' },
]

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>СОЦИАЛЬНЫЕ СЕТИ</h3>
          {left.map((p) => (
            <div key={p.id} className={styles.item}>
              <div className={styles.iconWrap}>
                <Image src={p.img} alt={p.name} width={36} height={36} />
                <div className={styles.ellipse} />
              </div>
              <div className={styles.name}>{p.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>ПРОФЕССИОНАЛЬНЫЕ ПЛАТФОРМЫ</h3>
          {center.map((p) => (
            <div key={p.id} className={styles.item}>
              <div className={styles.iconWrap}>
                <Image src={p.img} alt={p.name} width={36} height={36} />
                <div className={styles.ellipse} />
              </div>
              <div className={styles.name}>{p.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>ВИДЕО-ПЛАТФОРМЫ</h3>
          {right.map((p) => (
            <div key={p.id} className={styles.item}>
              <div className={styles.iconWrap}>
                <Image src={p.img} alt={p.name} width={36} height={36} />
                <div className={styles.ellipse} />
              </div>
              <div className={styles.name}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
