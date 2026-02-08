import React from "react";
import clsx from "clsx";
import styles from "./styles/headerWrapper.module.scss";

type Props = {
  href?: string;
  icon?: React.ReactNode;
  kicker: React.ReactNode;
  title: React.ReactNode;
  titleAccent: React.ReactNode;  
  className?: string;
  align?: "left" | "center";
  withBr?: boolean; // Новый проп для управления переносом
};

export default function HeaderWrapper({ 
  kicker, 
  title, 
  titleAccent, 
  className, 
  align = "center",
  withBr = true // По умолчанию перенос есть, как в вашем оригинале
}: Props) {
    
    return (
        <header className={clsx(
            styles.header, 
            styles[align], 
            className
        )}>
            <span className={styles.kicker}>{kicker}</span>
            <h2 className={styles.title}>
                {title}
                {/* Если withBr true — ставим <br />, если false — просто пробел */}
                {withBr ? <br /> : " "}
                <span className={styles.accent}>{titleAccent}</span>
            </h2>
        </header>
    );
}