"use client";
import { motion } from "framer-motion";
import { logos } from "./logos";




export default function HeroRightVisual() {
    return (
        <div className="relative w-full h-1/2   items-center justify-center   hidden lg:block">
            {/* Fondo suave */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-purple-200/40 to-blue-200/40 blur-3xl"></div>

            {logos.map(({ Icon, label, size, x, y, delay }, i) => (
                <motion.div
                    key={i}
                    className="absolute flex items-center justify-center text-blue-600 dark:text-white opacity-100 bg-white rounded-full p-4 shadow-lg"
                    style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        fontSize: size,
                    }}
                    initial={{ y: 0 }}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        delay,
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                >
                    <Icon title={label} className='text-slate-500 opacity-100' size={size} />
                </motion.div>
            ))}
        </div>
    );
}
