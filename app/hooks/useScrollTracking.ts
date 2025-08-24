'use client';

import { useEffect, useRef } from 'react';
import { useGoogleAnalytics } from './useGoogleAnalytics';

export const useScrollTracking = () => {
    const { trackEvent } = useGoogleAnalytics();
    const hasTrackedFooter = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Track when user scrolls to 90% of the page (near footer)
            if (scrollPosition >= documentHeight * 0.9 && !hasTrackedFooter.current) {
                trackEvent('bajo_hasta_footer', {
                    scroll_percentage: 90,
                    page_url: window.location.pathname
                });
                hasTrackedFooter.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [trackEvent]);
};
