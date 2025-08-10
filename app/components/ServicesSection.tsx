'use client'

import { useState } from 'react'

export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    const services = [
        {
            icon: "🎯",
            title: "Meta Ads",
            subtitle: "Campañas que convierten",
            description: "Estrategias publicitarias en Facebook e Instagram que maximizan tu ROI y generan leads cualificados.",
            features: ["Segmentación avanzada", "Optimización automática", "Reportes detallados"]
        },
        {
            icon: "💻",
            title: "Desarrollo Web",
            subtitle: "Sitios que venden",
            description: "Desarrollamos sitios web optimizados para conversión, rápidos y adaptados a todos los dispositivos.",
            features: ["Diseño responsive", "SEO optimizado", "Alta velocidad"]
        },
        {
            icon: "📈",
            title: "Marketing 360°",
            subtitle: "Estrategia integral",
            description: "Estrategias completas de marketing digital que abarcan desde la captación hasta la fidelización.",
            features: ["Email marketing", "Social media", "Analítica avanzada"]
        },
        {
            icon: "🚀",
            title: "Automatización",
            subtitle: "Procesos inteligentes",
            description: "Automatizamos tus procesos de marketing y ventas para que puedas escalar sin límites.",
            features: ["CRM integrado", "Flujos automáticos", "Lead scoring"]
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-navy-100 mb-6 drop-shadow-sm">
                        Servicios que
                        <span className="text-slate-purple-500"> impulsan</span> tu negocio
                    </h2>
                    <p className="text-xl text-navy-600 leading-relaxed">
                        Combinamos creatividad, tecnología y datos para crear experiencias digitales
                        que convierten visitantes en clientes fieles.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer transition-all duration-500 transform hover:scale-105 flex"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            {/* Card */}
                            <div className="relative bg-white/98 backdrop-blur-md rounded-3xl p-8 border border-white/50 transition-all duration-500 w-full flex flex-col shadow-lg shadow-slate-purple-500/20 group-hover:shadow-xl group-hover:shadow-slate-purple-500/30 group-hover:border-white/70">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 bg-slate-purple-100 group-hover:bg-slate-purple-400 group-hover:shadow-lg">
                                    <span className="group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <h3 className="text-2xl font-bold text-navy-900 mb-2 group-hover:text-slate-purple-500 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-purple-500">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-navy-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-navy-600">
                                                <span className="w-2 h-2 rounded-full mr-3 bg-slate-purple-500"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover Arrow */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 shadow-lg bg-slate-purple-500 group-hover:bg-slate-purple-400">
                                    <span className="text-white text-sm">→</span>
                                </div>
                            </div>

                            {/* Background Decoration */}
                            <div className="absolute -inset-1 rounded-3xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-slate-purple-300 to-slate-purple-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-navy-600 mb-6">¿No encuentras lo que buscas?</p>
                    <button className="bg-slate-purple-500 hover:bg-slate-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Hablemos de tu proyecto
                    </button>
                </div>
            </div>
        </section>
    )
}
