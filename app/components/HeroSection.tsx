'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleWhatsAppContact = () => {
        const message = encodeURIComponent("¡Hola! Me interesa impulsar mi negocio con resultados reales. ¿Cuándo podemos conversar?")
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
    }

    return (
        <section className="relative h-screen bg-white overflow-hidden flex flex-col">

            {/* Minimal Geometric Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 bg-slate-purple-100 rounded-full opacity-30"></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 bg-navy-100 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-slate-purple-200 rounded-full opacity-25"></div>
            </div>

            {/* Clean Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-8 py-8 lg:px-16 flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <span className="text-2xl font-bold text-navy-900">trait</span>
                </div>

                <button
                    onClick={handleWhatsAppContact}
                    className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                    Contactar
                </button>
            </nav>

            {/* Hero Content - Left Aligned */}
            <div className="relative z-40 flex-1 flex items-center px-8 lg:px-16">
                <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Headline - Typography as Hero */}
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                <span className="block text-navy-900 mb-3">Transformamos</span>
                                <span className="block text-slate-purple-500 mb-3">ideas digitales</span>
                                <span className="block text-navy-900">en resultados</span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-navy-600 font-light max-w-2xl leading-relaxed">
                                Agencia especializada en <span className="text-slate-purple-500 font-medium">Meta Ads</span> y <span className="text-slate-purple-500 font-medium">desarrollo web</span> para empresas que buscan crecimiento real y medible.
                            </p>
                        </div>

                        {/* Single Elegant CTA */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={handleWhatsAppContact}
                                className="bg-slate-purple-500 hover:bg-slate-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Empezar mi proyecto
                            </button>
                            <p className="text-navy-500 text-base mt-4">
                                Consulta estratégica gratuita • Sin compromisos
                            </p>
                        </div>

                        {/* Clean Stats */}
                        <div className={`grid grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-slate-purple-500 mb-2">200+</div>
                                <div className="text-navy-600 font-medium text-sm">Proyectos exitosos</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-slate-purple-500 mb-2">4.8x</div>
                                <div className="text-navy-600 font-medium text-sm">ROAS promedio</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-slate-purple-500 mb-2">98%</div>
                                <div className="text-navy-600 font-medium text-sm">Satisfacción</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Social Proof */}
                    <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                    </div>
                </div>
            </div>

        </section>
    )
}