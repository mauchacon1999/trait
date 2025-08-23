"use client"
import { motion } from "framer-motion";
import { logos } from "./logos";

export default function IconosMobile() {
    return (
        <div className="lg:hidden flex w-full mx-auto px-4 space-y-4 items-center justify-center mt-10 flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Vanguardia en tecnología y marketing
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-9 place-items-center gap-4 w-full text-slate-500 opacity-100">

                {logos.map(({ Icon, label, delay }, i) => (
                    <motion.div
                        className="  flex items-center justify-center text-blue-600 dark:text-white opacity-100 bg-white rounded-full p-4 shadow-lg"
                        key={i}
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
                        <Icon key={i} title={label} className='text-slate-500 opacity-100' size={40} />
                    </motion.div>
                ))}

            </div>
        </div>




    );
}