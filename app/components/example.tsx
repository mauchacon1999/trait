"use client";
import { motion } from "framer-motion";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiFacebook,
    SiLaravel,
    SiMeta,
    SiOpenai,
    SiPostgresql,
} from "react-icons/si";
import { N8n } from "@lobehub/icons";

const logos = [
    { Icon: SiTypescript, label: "TypeScript", size: 60, x: 0, y: -140, delay: 0 },
    { Icon: SiReact, label: "React", size: 70, x: 100, y: -100, delay: 0.2 },
    { Icon: N8n, label: "n8n", size: 65, x: 140, y: 0, delay: 0.4 },
    { Icon: SiPostgresql, label: "JavaScript", size: 60, x: 100, y: 100, delay: 0.6 },
    { Icon: SiNextdotjs, label: "Next.js", size: 75, x: 0, y: 140, delay: 0.8 },
    { Icon: SiFacebook, label: "Facebook Ads", size: 65, x: -100, y: 100, delay: 1.0 },
    { Icon: SiLaravel, label: "Laravel", size: 70, x: -140, y: 0, delay: 1.2 },
    { Icon: SiMeta, label: "Meta", size: 70, x: 0, y: -0, delay: 1.4 },
    { Icon: SiOpenai, label: "OpenAI / Chatbot", size: 70, x: -100, y: -100, delay: 1.4 },
];

export default function HeroRightVisual() {
    return (
        <div className="relative w-full h-1/2   items-center justify-center   hidden md:block">
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
