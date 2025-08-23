import logoTrait from '@/public/logos/logo-azul-marino.png'
import Image from 'next/image'
import HeroRightVisual from './example'

export default function HeroSection() {

    return (
        <div className='w-full justify-center items-center bg-gradient-to-br from-white via-navy-50 to-slate-purple-50'>
            <section className="relative min-h-screen overflow-hidden max-w-screen-2xl mx-auto">
                {/* Background Geometric Shapes - Enhanced with better animations */}
                <div className="absolute hidden lg:block inset-0 overflow-hidden pointer-events-none">
                    {/* Top Right - Large Purple Square */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-slate-purple-300 to-slate-purple-500 transform rotate-12 opacity-80 animate-fall-1 group hover:scale-110 transition-transform duration-500"></div>

                    {/* Middle Right - Navy Rectangle */}
                    <div className="absolute top-64 right-0 w-80 h-40 bg-gradient-to-bl from-navy-600 to-navy-800 transform translate-x-1/2 rotate-6 animate-fall-2 group hover:scale-105 transition-transform duration-500"></div>
                    {/* Floating particles - New */}
                    <div className="absolute top-20 right-1/3 w-8 h-8 bg-slate-purple-400 opacity-60 animate-fall-8 group hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-28 right-1/3 w-8 h-8 bg-navy-600 opacity-60 ml-2 animate-fall-9 group hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute bottom-40 left-1/4 w-12 h-4 bg-slate-purple-300 transform rotate-45 opacity-50 animate-fall-10 group hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute bottom-44 left-1/4 w-12 h-4 bg-navy-500 transform rotate-45 opacity-50 ml-3 animate-fall-11 group hover:scale-125 transition-transform duration-300"></div>

                    {/* Background blur elements */}
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-navy-400  opacity-8"></div>
                    <div className="absolute top-1/2 left-10 w-20 h-20 bg-slate-purple-300  opacity-15"></div>
                </div>
                {/* Navigation - Enhanced */}
                <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
                    <div className="flex items-center space-x-3 group">
                        {/* Logo with hover effect */}
                        <div className="group-hover:scale-105 transition-transform duration-300">
                            <Image src={logoTrait} alt="trait" width={120} height={120} />
                        </div>
                    </div>

                    {/* CTA Button - Enhanced */}
                    <button
                        className="bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-700 hover:to-navy-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-navy-700/30"
                    >
                        Pide presupuesto
                    </button>
                </nav>

                {/* Hero Content - Enhanced */}
                <div className="relative z-40 flex-1 flex items-center px-8 lg:px-16 min-h-[calc(100vh-120px)]">
                    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {/* Main Headline - Enhanced */}
                            <div className={`space-y-6 transition-all duration-1000 `}>
                                <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-navy-900 group">
                                    Agencia de
                                    <br />
                                    Marketing
                                    <br />
                                    <span className="text-slate-purple-500 group-hover:text-slate-purple-600 transition-colors duration-300">
                                        Digital 360
                                    </span>
                                </h1>
                            </div>

                            {/* Story Text - Enhanced */}
                            <div className={`transition-all duration-1000 delay-200 `}>
                                <div className="space-y-4 text-navy-600 text-lg lg:text-xl leading-relaxed max-w-xl">
                                    <p className="group hover:text-navy-800 transition-colors duration-300">
                                        Érase, una vez, una idea loca que se hizo realidad y triunfó como la Coca Cola.
                                    </p>
                                    <p className="group hover:text-navy-800 transition-colors duration-300">
                                        ¿Nos la cuentas? Quizás este es el principio de tu historia...
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button - Enhanced */}
                            <div className={`transition-all duration-1000 delay-300 `}>
                                <button
                                    className="bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-slate-purple-400/30 group"
                                >
                                    <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
                                        ¡Te escuchamos!
                                    </span>
                                </button>
                            </div>

                            {/* Quick Stats - New */}
                            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-400 `}>
                                {[
                                    { number: "5+", label: "Años", icon: "📅" },
                                    { number: "200+", label: "Proyectos", icon: "🚀" },
                                    { number: "98%", label: "Satisfacción", icon: "😊" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-slate-purple-600 group-hover:text-slate-purple-700 transition-colors">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-navy-600 group-hover:text-navy-700 transition-colors">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <HeroRightVisual />
                    </div>
                </div>

            </section>
        </div>



    )
}