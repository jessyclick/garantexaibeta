// Импорт локальных изображений
const imgRectangle12 = "/assets/rectangle12.png";
const imgLine33 = "/assets/line33.svg";

import styles from "./test.module.scss";

export default function AvatarBusiness3D() {
	return (
		<div className={styles.avatarSection}>
			<div className={styles.avatarImageWrapper}>
				<img src={imgRectangle12} alt="3D персонаж" className={styles.avatarImage} />
			</div>
			<div className={styles.avatarContent}>
				<h2 className={styles.avatarTitle}>3D-Персонажи для бизнеса</h2>
				<p className={styles.avatarDescription}>
					Разработаем для вашего бизнеса главный актив в борьбе за внимание — уникального 3D-персонажа. На его основе мы будем вручную создавать видео для решения любой вашей бизнес-задачи.
				</p>
				<button className={styles.avatarButton}>Подробнее</button>
			</div>
			<div className={styles.avatarLineWrapper}>
				<img src={imgLine33} alt="line" className={styles.avatarLine} />
			</div>
		</div>
	);
}
