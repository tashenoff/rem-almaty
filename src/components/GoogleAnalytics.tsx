import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string, sendTo?: string) => boolean;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Tag Manager scripts
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17137992121';

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17137992121');
    `;

    document.head.appendChild(gtagScript);
    document.head.appendChild(configScript);

    // Универсальная функция для разных конверсий
    window.gtag_report_conversion = function(url, sendTo) {
      var callback = function () {
        if (typeof(url) !== 'undefined') {
          (window.location as any) = url;
        }
      };
      if (typeof window.gtag === 'function' && sendTo) {
        window.gtag('event', 'conversion', {
          'send_to': sendTo,
          'event_callback': callback
        });
      }
      return false;
    };

    // Cleanup
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(configScript);
      if (window.gtag_report_conversion) delete window.gtag_report_conversion;
    };
  }, []);

  return null;
}; 