'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((
    eventName: string,
    eventData: Record<string, any> = {}
  ) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_title: document.title
      });
    }
  }, []);

  const trackConversion = useCallback((conversionId: string, conversionLabel: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_id: conversionId,
        conversion_label: conversionLabel
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
};
