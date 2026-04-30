'use client';
import { fadeUp } from '@/styles/animations';
import { motion } from 'framer-motion';

export default function SectionHeader({ title , className }: { title: string , className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className={`flex flex-col items-center md:items-start text-center md:text-left px-4 ${className}`}
    >
      <motion.h1
        variants={fadeUp}
        className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold capitalize leading-tight max-w-2xl"
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}
