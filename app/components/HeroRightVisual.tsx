"use client";
import { motion } from "framer-motion";
import { logos } from "./logos";

export default function HeroRightVisual() {
    return (
        <div className="relative w-full h-1/2 items-center justify-center hidden lg:block">
            {/* Fondo suave */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-purple-200/40 to-blue-200/40 blur-3xl"></div>

            {logos.map(({ Icon, label, size, x, y, delay, isCenter }, i) => (
                <motion.div
                    key={i}
                    className={`absolute flex items-center justify-center rounded-full shadow-lg ${
                        isCenter 
                            ? 'bg-gradient-to-br from-navy-600 to-navy-800 text-white p-6 border-4 border-slate-purple-300' 
                            : 'bg-white text-slate-600 p-4 border-2 border-gray-100 hover:border-slate-purple-300'
                    }`}
                    style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        fontSize: size,
                    }}
                    initial={{ y: 0, scale: isCenter ? 1 : 0.8, opacity: isCenter ? 1 : 0 }}
                    animate={{
                        y: [0, -10, 0],
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        delay,
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    whileHover={{ 
                        scale: isCenter ? 1.1 : 1.05,
                        transition: { duration: 0.2 }
                    }}
                >
                    <Icon 
                        title={label} 
                        className={`${isCenter ? 'text-white' : 'text-slate-600'} opacity-100`} 
                        size={size} 
                    />
                </motion.div>
            ))}
        </div>
    );
}
