'use client'

import { useState, useEffect } from 'react'
import logoTrait from '@/public/logos/logo-blaco.png'
import Image from 'next/image'

export default function HeroSectionV2() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleWhatsAppContact = () => {
        const message = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios de marketing digital.")
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
    }

    return (
        <section className="relative min-h-screen bg-navy-900 overflow-hidden">
            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
                <div className="flex items-center space-x-3">
                    {/* Logo */}
                    <Image src={logoTrait} alt="trait" width={120} height={120} />

                </div>

                {/* Navigation Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#inicio" className="text-white hover:text-slate-purple-400 transition-colors">Inicio</a>
                    <a href="#nosotros" className="text-white hover:text-slate-purple-400 transition-colors">Nosotros</a>
                    <a href="#soluciones" className="text-white hover:text-slate-purple-400 transition-colors">Soluciones</a>
                    <a href="#proyectos" className="text-white hover:text-slate-purple-400 transition-colors">Proyectos</a>
                    <a href="#blog" className="text-white hover:text-slate-purple-400 transition-colors">Blog</a>
                    <button
                        onClick={handleWhatsAppContact}
                        className="bg-slate-purple-500 hover:bg-slate-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                        Contacto
                    </button>
                </div>

                {/* Mobile menu button */}
                <button className="lg:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-40 flex-1 flex items-center px-8 lg:px-16 min-h-[calc(100vh-120px)]">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Headline */}
                        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-white">
                                Somos tu agencia digital
                                <br />
                                <span className="text-slate-purple-400 font-extrabold">
                                    B2B Full Service
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-xl lg:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
                                Atraemos y fidelizamos tus clientes B2B con tecnología y equipos ágiles dedicados.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={handleWhatsAppContact}
                                className="group inline-flex items-center space-x-2 text-white hover:text-slate-purple-400 transition-all duration-300 text-lg font-medium"
                            >
                                <span className="border-b border-white group-hover:border-slate-purple-400 transition-colors">
                                    Explora nuestro trabajo
                                </span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - 3D Abstract Element */}
                    <div className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {/* Main 3D Shape */}
                        <div className="relative w-96 h-96">
                            {/* Abstract 3D Shape - Inspired by the flowing design */}
                            <div className="absolute inset-0">
                                {/* Main flowing shape */}
                                <div className="w-full h-full relative">
                                    {/* Large flowing element */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-slate-purple-500/30 to-slate-purple-700/30 rounded-full blur-3xl"></div>

                                    {/* Flowing curves */}
                                    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-tr from-slate-purple-400/40 to-transparent rounded-full transform rotate-45"></div>
                                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-bl from-slate-purple-300/50 to-transparent rounded-full transform -rotate-12"></div>

                                    {/* Accent elements */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 rounded-full opacity-70 animate-pulse"></div>

                                    {/* Flowing lines */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute top-20 left-20 w-40 h-1 bg-gradient-to-r from-transparent via-slate-purple-400 to-transparent transform rotate-45 opacity-60"></div>
                                        <div className="absolute bottom-20 right-20 w-32 h-1 bg-gradient-to-r from-transparent via-slate-purple-300 to-transparent transform -rotate-12 opacity-40"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Logos Section */}


            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-slate-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-slate-purple-400/5 rounded-full blur-2xl"></div>
            </div>
        </section>
    )
}
