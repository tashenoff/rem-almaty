import React from 'react';

const PHONE_NUMBER = '+77073970675';
const CONVERSION_LABEL = 'AW-17137992121/lqbDCNuc49QaELmDhOw_';

export const FloatingPhoneButton: React.FC = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(undefined, CONVERSION_LABEL);
    }
    // переход по tel-ссылке произойдет автоматически
  };

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={handleClick}
      className="fixed z-50 bottom-6 right-6 bg-accent hover:bg-accent-dark text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
      aria-label="Позвонить"
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  );
}; 