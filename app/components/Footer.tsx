'use client'
import { useState } from 'react'
import logoTrait from '@/public/logos/logo-azul-marino.png'
import Image from 'next/image'

export default function Footer() {

    const [formData, setFormData] = useState({
        service: '',
        budget: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        mobile: '',
        message: '',
        source: '',
        acceptPolicy: false
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setFormData(prev => ({ ...prev, [name]: checked }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData)
    }


    return (
        <footer className="bg-navy-900 text-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className={`space-y-4 transition-all duration-1000 ease-out transform`}>
                            <Image src={logoTrait} alt="Trait" width={120} height={120} />
                            <h2 className="text-3xl lg:text-4xl font-bold">
                                Potenciamos tu Negocio
                                <br />
                                ¡No te conformes!
                            </h2>
                        </div>

                        {/* Información de Contacto */}
                        <div className={`space-y-6 transition-all duration-1000 ease-out delay-300 transform `}>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Santiago, Chile</p>
                                    <p className="text-gray-300">Apoquindo 6410 Of 1004 Ps 10 Comuna Las Condes</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Bucaramanga, Colombia</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Telefono: +56972160435</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">contacto@trait.info</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className={`flex space-x-4 transition-all duration-1000 ease-out delay-500 transform `}>
                            <a href="#" className="text-gray-300 hover:text-slate-purple-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-slate-purple-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-slate-purple-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-slate-purple-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-slate-purple-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha - Formulario */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Servicio */}
                            <div className={`transition-all duration-700 ease-out transform `} >
                                <label className="block text-sm font-medium mb-2">
                                    ¿Qué servicio te interesa?*
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                    required
                                >
                                    <option value="">Selecciona una o más opciones</option>
                                    <option value="marketing">Marketing Digital</option>
                                    <option value="tecnologia">Tecnología</option>
                                    <option value="diseno">Diseño</option>
                                    <option value="contenido">Contenido</option>
                                </select>
                            </div>

                            {/* Presupuesto */}
                            <div className={`transition-all duration-700 ease-out transform `} >
                                <label className="block text-sm font-medium mb-2">
                                    Presupuesto mensual*
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                    required
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="2000-4000">$2.000 - $4.000 USD</option>
                                    <option value="4100-8000">$4.100 - $8.000 USD</option>
                                    <option value="8100-12000">$8.100 - $12.000 USD</option>
                                    <option value="12100+"> $12.100 USD</option>
                                </select>
                            </div>

                            {/* Nombre y Apellidos */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ease-out transform `} >
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nombre*
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Apellidos*
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Compañía y Email */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ease-out transform `} >
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Compañía*
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Correo corporativo*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Usa un correo corporativo"
                                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className={`transition-all duration-700 ease-out transform `} >
                                <label className="block text-sm font-medium mb-2">
                                    Teléfono*
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                    required
                                />
                            </div>

                            {/* Mensaje */}
                            <div className={`transition-all duration-700 ease-out transform `} >
                                <label className="block text-sm font-medium mb-2">
                                    Cuéntanos sobre tu proyecto
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-slate-purple-500"
                                />
                            </div>

                            {/* Política de Privacidad */}
                            <div className={`flex items-start space-x-3 transition-all duration-700 ease-out transform `} >
                                <input
                                    type="checkbox"
                                    name="acceptPolicy"
                                    checked={formData.acceptPolicy}
                                    onChange={handleInputChange}
                                    className="mt-1 w-4 h-4 text-slate-purple-600 bg-navy-800 border-navy-700 rounded focus:ring-slate-purple-500"
                                    required
                                />
                                <label className="text-sm text-gray-300">
                                    He leído y acepto la Política de Tratamiento de Datos Personales.
                                </label>
                            </div>

                            {/* Botón Enviar */}
                            <div className={`transition-all duration-700 ease-out transform `} >
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

            {/* Copyright */}
            < div className={`border-t border-navy-800 transition-all duration-1000 ease-out delay-800 transform`
            }>
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
                    <p className="text-center text-gray-400 text-sm">
                        2025 - DISEÑO Y DESARROLLO POR TRAIT
                    </p>
                </div>
            </div >
        </footer >
    )
}
