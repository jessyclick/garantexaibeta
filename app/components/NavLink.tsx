import Link from "next/link";
import styles from "./styles/header.module.scss";

type Props = {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function NavLink({ href, icon, children }: Props) {
  return (
    <Link href={href} className={styles.navLink}>
      {icon ? <span className={styles.navIcon}>{icon}</span> : null}
      <span className={styles.navText}>{children}</span>
    </Link>
  );
}
