'use client'

import { useState, useEffect } from 'react'
import logoTrait from '@/public/logos/logo-azul-marino.png'
import Image from 'next/image'

export default function HeroSectionV3() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleWhatsAppContact = () => {
        const message = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios de marketing digital.")
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
    }

    const handleQuoteRequest = () => {
        const message = encodeURIComponent("Hola, me gustaría solicitar un presupuesto para mi proyecto.")
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-navy-50 to-slate-purple-50 overflow-hidden max-w-screen-2xl mx-auto">
            {/* Background Geometric Shapes - Enhanced with better animations */}
            <div className="absolute hidden lg:block inset-0 overflow-hidden pointer-events-none">
                {/* Top Right - Large Purple Square */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-slate-purple-300 to-slate-purple-500 transform rotate-12 opacity-80 animate-fall-1 group hover:scale-110 transition-transform duration-500"></div>

                {/* Middle Right - Navy Rectangle */}
                <div className="absolute top-64 right-0 w-80 h-40 bg-gradient-to-bl from-navy-600 to-navy-800 transform translate-x-1/2 rotate-6 animate-fall-2 group hover:scale-105 transition-transform duration-500"></div>

                {/* Middle Right - Purple Square */}
                <div className="absolute top-80 right-20 w-64 h-64 bg-gradient-to-br from-slate-purple-500 to-slate-purple-700 transform rotate-45 opacity-90 animate-fall-3 group hover:scale-110 transition-transform duration-500"></div>

                {/* Bottom Left - Light Purple Rectangle */}
                <div className="absolute bottom-32 -left-16 w-64 h-32 bg-gradient-to-tr from-slate-purple-200 to-slate-purple-400 transform -rotate-12 opacity-70 animate-fall-5 group hover:scale-110 transition-transform duration-500"></div>

                {/* Additional accent shapes - Enhanced */}
                <div className="absolute bottom-1/4 right-32 w-48 h-12 bg-gradient-to-r from-navy-500 to-navy-700 transform rotate-12 opacity-50 animate-fall-6 group hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-1/2 right-0 w-24 h-48 bg-gradient-to-b from-slate-purple-300 to-slate-purple-500 transform translate-x-1/2 opacity-40 animate-fall-7 group hover:scale-110 transition-transform duration-500"></div>

                {/* Floating particles - New */}
                <div className="absolute top-20 right-1/3 w-8 h-8 bg-slate-purple-400 opacity-60 animate-fall-8 group hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute top-28 right-1/3 w-8 h-8 bg-navy-600 opacity-60 ml-2 animate-fall-9 group hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-40 left-1/4 w-12 h-4 bg-slate-purple-300 transform rotate-45 opacity-50 animate-fall-10 group hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-44 left-1/4 w-12 h-4 bg-navy-500 transform rotate-45 opacity-50 ml-3 animate-fall-11 group hover:scale-125 transition-transform duration-300"></div>

                {/* Background blur elements */}
                <div className="absolute top-20 left-20 w-40 h-40 bg-slate-purple-400 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-navy-400 rounded-full opacity-8"></div>
                <div className="absolute top-1/2 left-10 w-20 h-20 bg-slate-purple-300 rounded-full opacity-15"></div>
            </div>
            <div className="absolute block lg:hidden inset-0 overflow-hidden pointer-events-none">
                {/* Top Right - Large Purple Square */}
                <div className="absolute -top-32 -right-32 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-slate-purple-300 to-slate-purple-500 transform rotate-12 opacity-80 animate-fall-1 group hover:scale-110 transition-transform duration-500"></div>

                {/* Middle Right - Navy Rectangle */}
                <div className="absolute top-64 right-0 w-40 h-20 lg:w-80 lg:h-40 bg-gradient-to-bl from-navy-600 to-navy-800 transform translate-x-1/2 rotate-6 animate-fall-2 group hover:scale-105 transition-transform duration-500"></div>

                {/* Middle Right - Purple Square */}
                <div className="absolute top-80 right-20 lg:w-64 lg:h-64 bg-gradient-to-br from-slate-purple-500 to-slate-purple-700 transform rotate-45 opacity-90 animate-fall-3 group hover:scale-110 transition-transform duration-500"></div>

                {/* Bottom Left - Light Purple Rectangle */}
                <div className="absolute bottom-1 lg:bottom-32 -left-16 w-40 h-20 lg:w-64 lg:h-32 bg-gradient-to-tr from-slate-purple-200 to-slate-purple-400 transform -rotate-12 opacity-70 animate-fall-5 group hover:scale-110 transition-transform duration-500"></div>

                {/* Additional accent shapes - Enhanced */}
                <div className="absolute bottom-1 lg:bottom-1/2 right-32 w-48 h-12 bg-gradient-to-r from-navy-500 to-navy-700 transform rotate-12 opacity-50 animate-fall-6 group hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-1/2 lg:top-1/2 right-0 w-24 h-48 bg-gradient-to-b from-slate-purple-300 to-slate-purple-500 transform translate-x-1/2 opacity-40 animate-fall-7 group hover:scale-110 transition-transform duration-500"></div>

                {/* Floating particles - New */}
                <div className="absolute top-20  hidden lg:flex  right-1/3 w-8 h-8 bg-slate-purple-400 opacity-60 animate-fall-8 group hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute top-28 hidden lg:flex right-1/3 w-8 h-8 bg-navy-600 opacity-60 ml-2 animate-fall-9 group hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-40  hidden lg:flex left-1/4 w-12 h-4 bg-slate-purple-300 transform rotate-45 opacity-50 animate-fall-10 group hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-44 hidden lg:flex left-1/4 w-12 h-4 bg-navy-500 transform rotate-45 opacity-50 ml-3 animate-fall-11 group hover:scale-125 transition-transform duration-300"></div>

                {/* Background blur elements */}
                <div className="absolute top-20   left-20   w-20 h-20 lg:w-40 lg:h-40 bg-slate-purple-400 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20  right-20 w-40 h-40 lg:w-60 lg:h-60 bg-navy-400 rounded-full opacity-8"></div>
                <div className="absolute top-1/2   left-10 w-10 h-10 lg:w-20 lg:h-20 bg-slate-purple-300 rounded-full opacity-15"></div>
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
                    onClick={handleQuoteRequest}
                    className="bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-700 hover:to-navy-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-navy-700/30"
                >
                    Pide presupuesto
                </button>
            </nav>

            {/* Hero Content - Enhanced */}
            <div className="relative z-40 flex-1 flex items-center px-8 lg:px-16 min-h-[calc(100vh-120px)]">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content - Enhanced */}
                    <div className="space-y-8">
                        {/* Main Headline - Enhanced */}
                        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={handleWhatsAppContact}
                                className="bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-slate-purple-400/30 group"
                            >
                                <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
                                    ¡Te escuchamos!
                                </span>
                            </button>
                        </div>

                        {/* Quick Stats - New */}
                        <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

                </div>
            </div>

            {/* Bottom Floating Elements - Enhanced */}
            <div className="fixed bottom-8 left-8 right-8 z-30 pointer-events-none">
                <div className="flex sticky top-0 justify-end items-end">
                    {/* WhatsApp Float - Enhanced */}
                    <div className="bg-gradient-to-r from-slate-purple-600 to-slate-purple-700 w-16 h-16 rounded-full flex items-center justify-center shadow-xl pointer-events-auto cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-2xl group" onClick={handleWhatsAppContact}>
                        <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-100vh) rotate(0deg) scale(0.8);
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(0) rotate(var(--original-rotate, 0deg)) scale(1);
                        opacity: 1;
                    }
                }
                
                .animate-fall-1 { 
                    animation: fall 2.5s ease-out 0.2s both; 
                    --original-rotate: 12deg;
                }
                .animate-fall-2 { 
                    animation: fall 2.5s ease-out 0.4s both; 
                    --original-rotate: 6deg;
                }
                .animate-fall-3 { 
                    animation: fall 2.5s ease-out 0.6s both; 
                    --original-rotate: 45deg;
                }
                .animate-fall-4 { 
                    animation: fall 2.5s ease-out 0.8s both; 
                }
                .animate-fall-5 { 
                    animation: fall 2.5s ease-out 1.0s both; 
                    --original-rotate: -12deg;
                }
                .animate-fall-6 { 
                    animation: fall 2.5s ease-out 1.2s both; 
                    --original-rotate: 12deg;
                }
                .animate-fall-7 { 
                    animation: fall 2.5s ease-out 1.4s both; 
                }
                .animate-fall-8 { 
                    animation: fall 2.5s ease-out 1.6s both; 
                }
                .animate-fall-9 { 
                    animation: fall 2.5s ease-out 1.8s both; 
                }
                .animate-fall-10 { 
                    animation: fall 2.5s ease-out 2.0s both; 
                    --original-rotate: 45deg;
                }
                .animate-fall-11 { 
                    animation: fall 2.5s ease-out 2.2s both; 
                    --original-rotate: 45deg;
                }
                .animate-fall-12 { 
                    animation: fall 2.5s ease-out 2.4s both; 
                }
                .animate-fall-13 { 
                    animation: fall 2.5s ease-out 2.6s both; 
                }
                .animate-fall-14 { 
                    animation: fall 2.5s ease-out 2.8s both; 
                }
                .animate-fall-15 { 
                    animation: fall 2.5s ease-out 3.0s both; 
                }
                .animate-fall-16 { 
                    animation: fall 2.5s ease-out 3.2s both; 
                }
                .animate-fall-17 { 
                    animation: fall 2.5s ease-out 3.4s both; 
                }
                .animate-fall-18 { 
                    animation: fall 2.5s ease-out 3.6s both; 
                }
                .animate-fall-19 { 
                    animation: fall 2.5s ease-out 3.8s both; 
                }
                .animate-fall-20 { 
                    animation: fall 2.5s ease-out 4.0s both; 
                }
                .animate-fall-21 { 
                    animation: fall 2.5s ease-out 4.2s both; 
                }
                .animate-fall-22 { 
                    animation: fall 2.5s ease-out 4.4s both; 
                }
                .animate-fall-23 { 
                    animation: fall 2.5s ease-out 4.6s both; 
                }
                .animate-fall-24 { 
                    animation: fall 2.5s ease-out 4.8s both; 
                }
                .animate-fall-25 { 
                    animation: fall 2.5s ease-out 5.0s both; 
                }
                .animate-fall-26 { 
                    animation: fall 2.5s ease-out 5.2s both; 
                }
                .animate-fall-27 { 
                    animation: fall 2.5s ease-out 5.4s both; 
                }
                .animate-fall-28 { 
                    animation: fall 2.5s ease-out 5.6s both; 
                }
                .animate-fall-29 { 
                    animation: fall 2.5s ease-out 5.8s both; 
                }
                .animate-fall-30 { 
                    animation: fall 2.5s ease-out 6.0s both; 
                }
                .animate-fall-31 { 
                    animation: fall 2.5s ease-out 6.2s both; 
                }
                .animate-fall-32 { 
                    animation: fall 2.5s ease-out 6.4s both; 
                }
                .animate-fall-33 { 
                    animation: fall 2.5s ease-out 6.6s both; 
                }
                .animate-fall-34 { 
                    animation: fall 2.5s ease-out 6.8s both; 
                }
                .animate-fall-35 { 
                    animation: fall 2.5s ease-out 7.0s both; 
                }
            `}</style>
        </section>
    )
}