"use client";
import React from "react";
import { motion } from "framer-motion";

interface RevealStaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string; // Добавляем поддержку классов
}

export const RevealStagger = ({ 
  children, 
  stagger = 0.2, 
  delay = 0, 
  className 
}: RevealStaggerProps) => {
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.div
      className={className} // Применяем ваши стили (grid, flex и т.д.)
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {React.Children.map(children, (child) => {
        // Проверка на валидность элемента, чтобы не упасть на пустых строках или null
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div variants={item}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};