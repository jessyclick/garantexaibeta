import Link from "next/link";
import styles from "./cta.module.scss";

type Props = {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({ href, icon, children, className }: Props) {
  return (
    <Link href={href} className={`${styles.cta} ${className ?? ""}`}>
      {icon ? <span className={styles.ctaIcon} aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </Link>
  );
}
