// components/Reveal.tsx
"use client";
import { motion } from "framer-motion";

export const Reveal = ({ 
  children, 
  delay = 0, 
  threshold = 0.3 // Секция начнет проявляться, когда видна на 20%
}: { 
  children: React.ReactNode, 
  delay?: number,
  threshold?: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Чуть увеличил смещение для мягкости
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ 
        duration: 1, 
        delay, 
        ease: "easeOut" // Добавлена функция плавности
      }}
    >
      {children}
    </motion.div>
  );
};