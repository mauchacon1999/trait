'use client';

import ServiceCard from './ServiceCard';

const services = [
    {
        title: "Facebook Ads",
        description: "Creamos y optimizamos campañas publicitarias en Facebook e Instagram para maximizar tu ROI.",
        icon: "📘",
        serviceType: "social_media_ads"
    },
    {
        title: "Google Ads",
        description: "Gestionamos campañas de búsqueda y display en Google para captar clientes cualificados.",
        icon: "🔍",
        serviceType: "search_ads"
    },
    {
        title: "Página Web",
        description: "Diseñamos y desarrollamos páginas web profesionales que convierten visitantes en clientes.",
        icon: "🌐",
        serviceType: "web_development"
    },
    {
        title: "Automatización de Ventas",
        description: "Implementamos sistemas automatizados para convertir leads en clientes 24/7.",
        icon: "🤖",
        serviceType: "automation"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50 lg:hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluciones integrales de marketing digital para hacer crecer tu negocio
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            serviceType={service.serviceType}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
