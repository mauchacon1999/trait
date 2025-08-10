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
        <section className="relative min-h-screen bg-white overflow-hidden max-w-screen-2xl mx-auto">
            {/* Background Pure Squares & Rectangles - Trait Geometric Identity - SIN GRISES */}
            <div className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {/* STEP 1 - Only 1 square */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-purple-400 opacity-95">1</div>

                {/* STEP 2 - 2 squares */}
                <div className="absolute top-16 right-0 w-16 h-16 bg-slate-purple-500 opacity-90">2</div>
                <div className="absolute top-16 right-16 w-16 h-16 bg-slate-purple-800 opacity-85">3</div>

                {/* STEP 3 - 3 squares */}
                <div className="absolute top-32 right-0 w-16 h-16 bg-slate-purple-600 opacity-85"> 3</div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-slate-purple-500 opacity-50">4</div>
                <div className="absolute top-32 right-32 w-16 h-16 bg-slate-purple-700 opacity-90">5</div>

                {/* STEP 4 - 4 squares */}
                <div className="absolute top-48 right-0 w-16 h-16 bg-slate-purple-500 opacity-50">6</div>
                <div className="absolute top-48 right-16 w-16 h-16 bg-slate-purple-800 opacity-80">7</div>
                <div className="absolute top-48 right-32 w-16 h-16 bg-slate-purple-800 opacity-85">8</div>
                <div className="absolute top-48 right-48 w-16 h-16 bg-slate-purple-600 opacity-70">9</div>

                {/* STEP 5 - 5 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-64 right-0 w-16 h-16 bg-slate-purple-500 opacity-90">10</div>
                <div className="absolute top-64 right-16 w-16 h-16 bg-slate-purple-800 opacity-85">11</div>
                <div className="absolute top-64 right-32 w-16 h-16 bg-slate-purple-700 opacity-95">12</div>
                <div className="absolute top-64 right-48 w-16 h-16 bg-slate-purple-500 opacity-50">13</div>
                <div className="absolute top-64 right-64 w-16 h-16 bg-slate-purple-600 opacity-90">14</div>

                {/* STEP 6 - 6 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-80 right-0 w-16 h-16 bg-slate-purple-800 opacity-85">15</div>
                <div className="absolute top-80 right-16 w-16 h-16 bg-slate-purple-400 opacity-90">16</div>
                <div className="absolute top-80 right-32 w-16 h-16 bg-slate-purple-500 opacity-50">17</div>
                <div className="absolute top-80 right-48 w-16 h-16 bg-slate-purple-400 opacity-60">18</div>
                <div className="absolute top-80 right-64 w-16 h-16 bg-slate-purple-900 opacity-85">19</div>
                <div className="absolute top-80 right-80 w-16 h-16 bg-slate-purple-700 opacity-90">20</div>

                {/* STEP 7 - 7 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-96 right-0 w-16 h-16 bg-slate-purple-600 opacity-80">21</div>
                <div className="absolute top-96 right-16 w-16 h-16 bg-slate-purple-500 opacity-50">22</div>
                <div className="absolute top-96 right-32 w-16 h-16 bg-slate-purple-500 opacity-85">23</div>
                <div className="absolute top-96 right-48 w-16 h-16 bg-slate-purple-600 opacity-80">24</div>
                <div className="absolute top-96 right-64 w-16 h-16 bg-slate-purple-700 opacity-75">25</div>
                <div className="absolute top-96 right-80 w-16 h-16 bg-slate-purple-500 opacity-70">26</div>
                <div className="absolute top-96 right-96 w-16 h-16 bg-slate-purple-600 opacity-65">27</div>

                {/* STEP 8 - 8 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-112 right-0 w-16 h-16 bg-slate-purple-800 opacity-75">28</div>
                <div className="absolute top-112 right-16 w-16 h-16 bg-slate-purple-400 opacity-80">29</div>
                <div className="absolute top-112 right-32 w-16 h-16 bg-slate-purple-500 opacity-50">30</div>
                <div className="absolute top-112 right-48 w-16 h-16 bg-slate-purple-400 opacity-85">31</div>
                <div className="absolute top-112 right-64 w-16 h-16 bg-slate-purple-950">32</div>
                <div className="absolute top-112 right-80 w-16 h-16 bg-slate-purple-800 opacity-70">33</div>
                <div className="absolute top-112 right-96 w-16 h-16 bg-slate-purple-500 opacity-50">34</div>
                <div className="absolute top-112 right-112 w-16 h-16 bg-slate-purple-500 opacity-60">35</div>

                {/* STEP 9 - 9 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-128 right-0 w-16 h-16 bg-slate-purple-700 opacity-70">36</div>
                <div className="absolute top-128 right-16 w-16 h-16 bg-slate-purple-500 opacity-50">37</div>
                <div className="absolute top-128 right-32 w-16 h-16 bg-slate-purple-600 opacity-75">38</div>
                <div className="absolute top-128 right-48 w-16 h-16 bg-slate-purple-800 opacity-70">39</div>
                <div className="logo absolute top-128 right-64 w-16 h-16 bg-slate-purple-950">40</div>
                <div className="absolute top-128 right-80 w-16 h-16 bg-slate-purple-300 opacity-60">41</div>
                <div className="absolute top-128 right-96 w-16 h-16 bg-slate-purple-500 opacity-55">42</div>
                <div className="absolute top-128 right-112 w-16 h-16 bg-slate-purple-500 opacity-50">43</div>
                <div className="absolute top-128 right-128 w-16 h-16 bg-slate-purple-600 opacity-45"></div>

                {/* STEP 10 - 10 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-144 right-0 w-16 h-16 bg-slate-purple-800 opacity-65">44</div>
                <div className="absolute top-144 right-16 w-16 h-16 bg-slate-purple-400 opacity-70">45</div>
                <div className="absolute top-144 right-32 w-16 h-16 bg-slate-purple-500 opacity-50">46</div>
                <div className="logo absolute top-144 right-48 w-16 h-16 bg-slate-purple-950">47</div>
                <div className="absolute top-144 right-64 w-16 h-16">48</div>
                <div className="absolute top-144 right-80 w-16 h-16 bg-slate-purple-700 opacity-60">49</div>
                <div className="absolute top-144 right-96 w-16 h-16 bg-slate-purple-500 opacity-90">50</div>
                <div className="absolute top-144 right-112 w-16 h-16 bg-slate-purple-500 opacity-50">51</div>
                <div className="absolute top-144 right-128 w-16 h-16 bg-slate-purple-800 opacity-45">52</div>
                <div className="absolute top-144 right-144 w-16 h-16 bg-slate-purple-800 opacity-90">53</div>

                {/* STEP 11 - 11 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-160 right-0 w-16 h-16 bg-slate-purple-500 opacity-60">54</div>
                <div className="absolute top-160 right-16 w-16 h-16 bg-slate-purple-500 opacity-50">55</div>
                <div className="absolute top-160 right-32 w-16 h-16 bg-slate-purple-600 opacity-65">56</div>
                <div className="absolute top-160 right-48 w-16 h-16 bg-slate-purple-800 opacity-60">57</div>
                <div className="logo absolute top-160 right-64 w-16 h-16 bg-slate-purple-950">58</div>
                <div className="absolute top-160 right-80 w-16 h-16 bg-slate-purple-700 opacity-80">59</div>
                <div className="absolute top-160 right-96 w-16 h-16 bg-slate-purple-400 opacity-45">60</div>
                <div className="absolute top-160 right-112 w-16 h-16 bg-slate-purple-500 opacity-50">61</div>
                <div className="absolute top-160 right-128 w-16 h-16 bg-slate-purple-300 opacity-35">62</div>
                <div className="absolute top-160 right-144 w-16 h-16 bg-slate-purple-800 opacity-70">63</div>
                <div className="absolute top-160 right-160 w-16 h-16 bg-slate-purple-600 opacity-25">64</div>

                {/* STEP 12 - 12 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-176 right-0 w-16 h-16 bg-slate-purple-700 opacity-80">65</div>
                <div className="absolute top-176 right-16 w-16 h-16 bg-slate-purple-300 opacity-60">66</div>
                <div className="absolute top-176 right-32 w-16 h-16 bg-slate-purple-500 opacity-50">67</div>
                <div className="absolute top-176 right-48 w-16 h-16 bg-slate-purple-500 opacity-65">68</div>
                <div className="absolute top-176 right-64 w-16 h-16 bg-slate-purple-950">69</div>
                <div className="absolute top-176 right-80 w-16 h-16 bg-slate-purple-600 opacity-50">70</div>
                <div className="absolute top-176 right-96 w-16 h-16 bg-slate-purple-700 opacity-80">71</div>
                <div className="absolute top-176 right-112 w-16 h-16 bg-slate-purple-400 opacity-40">72</div>
                <div className="absolute top-176 right-128 w-16 h-16 bg-slate-purple-500 opacity-80">73</div>
                <div className="absolute top-176 right-144 w-16 h-16 bg-slate-purple-700 opacity-30">74</div>
                <div className="absolute top-176 right-160 w-16 h-16 bg-slate-purple-800 opacity-70">75</div>
                <div className="absolute top-176 right-176 w-16 h-16 bg-slate-purple-500 opacity-90">76</div>

                {/* STEP 13 - 13 squares - PATRÓN DINÁMICO */}
                <div className="absolute top-192 right-0 w-16 h-16 bg-slate-purple-400 opacity-50">77</div>
                <div className="absolute top-192 right-16 w-16 h-16 bg-slate-purple-500 opacity-50">78</div>
                <div className="absolute top-192 right-32 w-16 h-16 bg-slate-purple-600 opacity-55">79</div>
                <div className="absolute top-192 right-48 w-16 h-16 bg-slate-purple-800 opacity-50">80</div>
                <div className="absolute top-192 right-64 w-16 h-16 bg-slate-purple-600 opacity-45">81</div>
                <div className="absolute top-192 right-80 w-16 h-16 bg-slate-purple-700 opacity-80">82</div>
                <div className="absolute top-192 right-96 w-16 h-16 bg-slate-purple-300 opacity-35">83</div>
                <div className="absolute top-192 right-112 w-16 h-16 bg-slate-purple-600 opacity-50">84</div>
                <div className="absolute top-192 right-128 w-16 h-16 bg-slate-purple-700 opacity-25">85</div>
                <div className="absolute top-192 right-144 w-16 h-16 bg-slate-purple-800 opacity-20">86</div>
                <div className="absolute top-192 right-160 w-16 h-16 bg-slate-purple-600 opacity-15">87</div>
                <div className="absolute top-192 right-176 w-16 h-16 bg-slate-purple-700 opacity-80">88</div>
                <div className="absolute top-192 right-192 w-16 h-16 bg-slate-purple-600 opacity-90">89</div>

            </div>

            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
                <div className="flex items-center space-x-3">
                    {/* Logo */}
                    <Image src={logoTrait} alt="trait" width={120} height={120} />
                </div>

                {/* CTA Button */}
                <button
                    onClick={handleQuoteRequest}
                    className="bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Pide presupuesto
                </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-40 flex-1 flex items-center px-8 lg:px-16 min-h-[calc(100vh-120px)]">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Headline */}
                        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-navy-900">
                                Agencia de
                                <br />
                                Marketing
                                <br />
                                <span className="text-slate-purple-500">
                                    Digital 360
                                </span>
                            </h1>
                        </div>

                        {/* Story Text */}
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="space-y-4 text-navy-600 text-lg lg:text-xl leading-relaxed max-w-xl">
                                <p>
                                    Érase, una vez, una idea loca que se hizo realidad y triunfó como la Coca Cola.
                                </p>
                                <p>
                                    ¿Nos la cuentas? Quizás este es el principio de tu historia...
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={handleWhatsAppContact}
                                className="bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                ¡Te escuchamos!
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Floating Elements */}
            <div className="absolute bottom-8 left-8 right-8 z-30 pointer-events-none">
                <div className="flex justify-between items-end">
                    {/* WhatsApp Float */}
                    <div className="bg-slate-purple-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-transform" onClick={handleWhatsAppContact}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                    </div>

                    {/* Chat Float */}
                    <div className="bg-navy-700 px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg pointer-events-auto cursor-pointer hover:scale-105 transition-transform" onClick={handleWhatsAppContact}>
                        <span className="text-white font-semibold">Chat</span>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}