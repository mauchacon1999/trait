'use client';

import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    serviceType: string;
}

export default function ServiceCard({ title, description, icon, serviceType }: ServiceCardProps) {
    const { trackEvent } = useGoogleAnalytics();

    const handleInterestClick = () => {
        trackEvent('me_interesa_servicio', {
            service_name: title,
            service_type: serviceType,
            button_location: 'service_card'
        });
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-slate-purple-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
            </p>
            <button
                onClick={handleInterestClick}
                className="bg-slate-purple-500 hover:bg-slate-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
                Me interesa este servicio
            </button>
        </div>
    );
}
