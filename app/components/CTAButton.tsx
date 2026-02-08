import Link from "next/link";
import styles from "./styles/cta.module.scss";

type Props = {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  
  variant?: 'primary' | 'outline'; // Добавляем вариант
};

export default function CTAButton({ href, icon, children, className, variant = 'primary' }: Props) {
  // Динамически формируем классы
  const buttonClasses = [
    styles.cta,
    styles[variant], // добавит styles.outline или styles.primary
    
    className
  ].filter(Boolean).join(" ");

  return (
    <Link href={href} className={buttonClasses}>
      {icon ? <span className={styles.ctaIcon} aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </Link>
  );
}