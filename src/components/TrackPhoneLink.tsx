import React from 'react';

interface TrackPhoneLinkProps {
  phone: string; // например, '+77001234567'
  children: React.ReactNode; // текст или элемент для отображения
  className?: string;
}

export const TrackPhoneLink: React.FC<TrackPhoneLinkProps> = ({ phone, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(undefined, 'AW-17137992121/lqbDCNuc49QaELmDhOw_');
    }
    // переход по tel-ссылке произойдет автоматически
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
      tabIndex={0}
      aria-label={`Позвонить по номеру ${phone}`}
    >
      {children}
    </a>
  );
}; 