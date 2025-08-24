'use client'

import { useState, useEffect, useRef } from 'react'

export default function AboutSection() {
    const [sectionVisible, setSectionVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true)
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const stats = [
        { number: "5+", label: "Años de experiencia", icon: "📅" },
        { number: "200+", label: "Proyectos completados", icon: "🚀" },
        { number: "98%", label: "Clientes satisfechos", icon: "😊" },
        { number: "4.8x", label: "ROI promedio", icon: "📈" }
    ]

    const whyChooseUs = [
        {
            title: "Expertise Comprobado",
            description: "Años de experiencia manejando presupuestos importantes en Meta Ads y desarrollando soluciones web escalables.",
            icon: "🎯"
        },
        {
            title: "Desarrollo Propio",
            description: "No dependemos de terceros. Desarrollamos internamente todas las soluciones web que necesitas.",
            icon: "⚡"
        },
        {
            title: "Resultados Medibles",
            description: "Cada campaña, cada desarrollo, cada estrategia está orientada a métricas claras y resultados tangibles.",
            icon: "📊"
        },
        {
            title: "Enfoque en ROI",
            description: "Tu inversión debe generar retorno. Optimizamos cada euro para maximizar tu rentabilidad.",
            icon: "💰"
        }
    ]

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-purple-900 text-white relative overflow-hidden">

            {/* Background Elements with Dynamic Animation */}
            <div className={`absolute inset-0 overflow-hidden transition-all duration-2000 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                {/* Animated Background Circles */}
                <div className={`absolute top-20 left-20 w-40 h-40 bg-slate-purple-400 rounded-full opacity-15 transition-all duration-3000 ease-in-out transform ${sectionVisible
                    ? 'animate-pulse scale-110 translate-x-4 translate-y-2'
                    : 'scale-100 translate-x-0 translate-y-0'
                    }`}></div>

                <div className={`absolute bottom-20 right-20 w-60 h-60 bg-navy-400 rounded-full opacity-10 transition-all duration-4000 ease-in-out transform ${sectionVisible
                    ? 'scale-125 -translate-x-6 -translate-y-4'
                    : 'scale-100 translate-x-0 translate-y-0'
                    }`}></div>

                <div className={`absolute top-1/2 left-10 w-20 h-20 bg-slate-purple-300 rounded-full opacity-20 transition-all duration-2500 ease-in-out transform ${sectionVisible
                    ? 'scale-150 translate-x-8 translate-y-6'
                    : 'scale-100 translate-x-0 translate-y-0'
                    }`}></div>

                {/* Additional Floating Elements */}
                <div className={`absolute top-1/4 right-1/4 w-16 h-16 bg-slate-purple-500 rounded-full opacity-10 transition-all duration-3500 ease-in-out transform ${sectionVisible
                    ? 'scale-200 -translate-x-4 translate-y-8'
                    : 'scale-100 translate-x-0 translate-y-0'
                    }`}></div>

                <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-navy-300 rounded-full opacity-15 transition-all duration-3000 ease-in-out transform ${sectionVisible
                    ? 'scale-175 translate-x-6 -translate-y-4'
                    : 'scale-100 translate-x-0 translate-y-0'
                    }`}></div>

                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-slate-purple-500/5 via-transparent to-navy-500/5 transition-all duration-5000 ease-in-out ${sectionVisible ? 'opacity-100' : 'opacity-0'
                    }`}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className={`text-center group transition-all duration-1000 ease-out transform ${sectionVisible
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-12 opacity-0 scale-95'
                            }`} style={{ transitionDelay: `${index * 200}ms` }}>
                            <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl lg:text-5xl font-bold text-slate-purple-300 mb-2 group-hover:text-white transition-colors">
                                {stat.number}
                            </div>
                            <div className="text-gray-300 text-sm lg:text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
               {/*  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    Left Content 
                    <div className={`space-y-8 transition-all duration-1000 ease-out transform ${sectionVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-full opacity-0'
                        }`} style={{ transitionDelay: '800ms' }}>
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                                ¿Por qué elegir
                                <span className="text-slate-purple-400"> Trait</span>?
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Somos más que una agencia de marketing digital. Somos tu socio estratégico
                                en el crecimiento digital, combinando creatividad, tecnología y resultados.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {whyChooseUs.slice(0, 2).map((item, index) => (
                                <div key={index} className={`flex items-start space-x-4 group transition-all duration-700 ease-out transform ${sectionVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                    }`} style={{ transitionDelay: `${1000 + (index * 200)}ms` }}>
                                    <div className="w-12 h-12 bg-slate-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-purple-400 transition-colors">
                                        <span className="text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-slate-purple-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Right Content
                    <div className={`space-y-6 transition-all duration-1000 ease-out transform ${sectionVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                        }`} style={{ transitionDelay: '1200ms' }}>
                        {whyChooseUs.slice(2).map((item, index) => (
                            <div key={index} className={`flex items-start space-x-4 group transition-all duration-700 ease-out transform ${sectionVisible
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-full opacity-0'
                                }`} style={{ transitionDelay: `${1400 + (index * 200)}ms` }}>
                                <div className="w-12 h-12 bg-navy-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy-400 transition-colors">
                                    <span className="text-xl">{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-slate-purple-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className={`bg-white/15 backdrop-blur-md rounded-3xl p-8 mt-8 border border-white/30 shadow-lg transition-all duration-1000 ease-out transform ${sectionVisible
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-12 opacity-0 scale-95'
                            }`} style={{ transitionDelay: '1800ms' }}>
                            <h3 className="text-2xl font-bold mb-4">¿Listo para crecer?</h3>
                            <p className="text-gray-300 mb-6">
                                Hablemos de tu proyecto y descubre cómo podemos impulsar tu negocio digital.
                            </p>
                            <button className="bg-slate-purple-500 hover:bg-slate-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full lg:w-auto">
                                Agendar consulta gratuita
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* Process Timeline 
                <div className={`mt-24 transition-all duration-1000 ease-out transform ${sectionVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                    }`} style={{ transitionDelay: '2000ms' }}>
                    <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                        Nuestro proceso de trabajo
                    </h3>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Análisis", desc: "Estudiamos tu negocio y definimos objetivos" },
                            { step: "02", title: "Estrategia", desc: "Creamos un plan personalizado y medible" },
                            { step: "03", title: "Ejecución", desc: "Implementamos y optimizamos en tiempo real" },
                            { step: "04", title: "Resultados", desc: "Medimos, reportamos y escalamos el éxito" }
                        ].map((process, index) => (
                            <div key={index} className={`text-center group transition-all duration-700 ease-out transform ${sectionVisible
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-12 opacity-0 scale-95'
                                }`} style={{ transitionDelay: `${2200 + (index * 150)}ms` }}>
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-slate-purple-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:bg-slate-purple-400 transition-colors border border-slate-purple-300/30">
                                        <span className="text-xl font-bold">{process.step}</span>
                                    </div>
                                    {index < 3 && (
                                        <div className={`hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-purple-300 transition-all duration-1000 ease-out ${sectionVisible ? 'opacity-30' : 'opacity-0'
                                            }`} style={{ transitionDelay: `${2400 + (index * 150)}ms` }}></div>
                                    )}
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-slate-purple-300 transition-colors">
                                    {process.title}
                                </h4>
                                <p className="text-gray-300 text-sm">
                                    {process.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                */}
            </div>
        </section>
    )
}
