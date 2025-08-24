export default function ServicesSectionV2() {


    const services = [
        {
            id: 'marketing',
            title: 'Publicidad Digital',
            subtitle: 'Estrategias completas para aumentar el tráfico y conversiones',
            description: 'Creamos, optimizamos y automatizamos tus campañas de Facebook Ads, Google Ads y TikTok Ads para que vendas más y gastes menos en publicidad',
            features: [
                'Facebook Ads',
                'Google Ads',
                'TikTok Ads',
                'Youtube Ads',
                'Trackeamos los eventos de tu web',
            ],
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            )
        },
        {
            id: 'desarrollo',
            title: 'Desarrollo de Software',
            subtitle: 'Realizamos desarrollo de software a la medida de tus necesidades',
            description: 'Si tu negocio necesita un software para automatizar procesos, o una web para tu negocio, te podemos ayudar',
            features: [
                'Desarrollo Pagina web',
                'Desarrollo de landing pages',
                'Optimización de Rendimiento',
                'Integraciones con tus herramientas',
                'Desarrollo de Bots'
            ],
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
            )
        },
        {
            id: 'diseno',
            title: 'Diseño & Branding',
            subtitle: 'Identidad visual que conecta con tu audiencia',
            description: 'Diseñamos experiencias visuales memorables que fortalecen tu marca. Desde la identidad corporativa hasta interfaces de usuario, creamos diseños que impactan.',
            features: [
                'Branding Corporativo',
                'Diseño UI/UX',
                'Identidad Visual',
                'Material Promocional',
                'Diseño Web',
                'Ilustración Digital'
            ],
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            )
        },
        {
            id: 'contenido',
            title: 'Content Marketing',
            subtitle: 'Contenido estratégico que genera engagement',
            description: 'Desarrollamos estrategias de contenido que educan, entretienen y convierten. Creamos contenido relevante que posiciona tu marca como autoridad en tu industria.',
            features: [
                'Estrategia de Contenido',
                'Copywriting',
                'Blog y Artículos',
                'Videos y Podcasts',
                'Redes Sociales',
                'Email Marketing'
            ],
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-10 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-bold text-navy-900 mb-6 transition-all duration-1000 ease-out`}>
                        NUESTROS SERVICIOS
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`bg-gradient-to-br from-navy-50 to-slate-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-700 ease-out transform hover:scale-105 flex flex-col h-full`}
                        >
                            <div className="text-slate-purple-500 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                            <p className="text-navy-600 mb-4">{service.subtitle}</p>
                            <p className="text-navy-700 leading-relaxed mb-6 flex-1">
                                {service.description}
                            </p>
                            <div className="space-y-2 mb-6">
                                {service.features.slice(0, 4).map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-slate-purple-500 rounded-full"></div>
                                        <span className="text-navy-800 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-gradient-to-r from-slate-purple-500 to-slate-purple-600
                             hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                                Me interesa este servicio
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center transition-all duration-1000 ease-out delay-800 transform`}>
                    <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-white">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                            ¿Listo para transformar tu negocio?
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Contacta con nosotros para realizar todos tus proyectos. Te esperamos.
                        </p>
                        <button className="bg-gradient-to-r from-slate-purple-500 to-slate-purple-600 hover:from-slate-purple-600 hover:to-slate-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                            Contáctanos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
