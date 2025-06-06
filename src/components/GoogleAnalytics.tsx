import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Create script elements
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

    // Append scripts to document head
    document.head.appendChild(gtagScript);
    document.head.appendChild(configScript);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(configScript);
    };
  }, []);

  return null;
}; 