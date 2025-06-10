import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import ProblemCard from '../components/ProblemCard';
import CTABanner from '../components/CTABanner';
import servicesData from '../data/services.json';
import { 
  refrigeratorReviews, 
  washingMachineReviews, 
  dishwasherReviews 
} from '../data/serviceReviews';
import { 
  refrigeratorFaqs, 
  washingMachineFaqs, 
  dishwasherFaqs 
} from '../data/serviceFaqs';

interface ServiceData {
  title: string;
  description: string;
  commonIssues: string[];
  reviews: any[];
  faqs: any[];
}

const serviceData: { [key: string]: ServiceData } = {
  'refrigerators': {
    ...servicesData.services.find(s => s.id === 'refrigerators')!,
    reviews: refrigeratorReviews,
    faqs: refrigeratorFaqs
  },
  'industrial-refrigerators': {
    ...servicesData.services.find(s => s.id === 'industrial-refrigerators')!,
    reviews: refrigeratorReviews,
    faqs: refrigeratorFaqs
  },
  'freezers': {
    ...servicesData.services.find(s => s.id === 'freezers')!,
    reviews: refrigeratorReviews,
    faqs: refrigeratorFaqs
  },
  'air-conditioners': {
    ...servicesData.services.find(s => s.id === 'air-conditioners')!,
    reviews: [],
    faqs: []
  },
  'washing-machines': {
    ...servicesData.services.find(s => s.id === 'washing-machines')!,
    reviews: washingMachineReviews,
    faqs: washingMachineFaqs
  },
  'microwaves': {
    ...servicesData.services.find(s => s.id === 'microwaves')!,
    reviews: [],
    faqs: []
  },
  'ovens': {
    ...servicesData.services.find(s => s.id === 'ovens')!,
    reviews: [],
    faqs: []
  },
  'dishwashers': {
    ...servicesData.services.find(s => s.id === 'dishwashers')!,
    reviews: dishwasherReviews,
    faqs: dishwasherFaqs
  },
  'electric-stoves': {
    ...servicesData.services.find(s => s.id === 'electric-stoves')!,
    reviews: [],
    faqs: []
  },
  'hood': {
    ...servicesData.services.find(s => s.id === 'hood')!,
    reviews: [],
    faqs: []
  }
};

const WHATSAPP_NUMBER = '77073970675';
const WHATSAPP_CONVERSION_LABEL = 'AW-17137992121/Lo3xCP6H7tQaELmDhOw_';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  // Определяем стиль hero-блока
  const heroStyle = id === 'refrigerators'
    ? {
        backgroundImage: "url('/images/bg-holod.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  // Определяем стиль маски
  const maskStyle = id === 'refrigerators'
    ? { background: 'rgba(0,0,0,0.65)' }
    : undefined;

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(undefined, WHATSAPP_CONVERSION_LABEL);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-accent" style={heroStyle}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={maskStyle} />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 sm:py-40 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          {id === 'refrigerators' && (
            <div className="mt-4 inline-block bg-black text-white font-extrabold text-2xl rounded-lg px-3 py-1 shadow-md">
              от <span className="ml-1">2500 ₸</span>
            </div>
          )}
          <p className="mt-6 text-xl text-white max-w-3xl">
            {service.description}
          </p>
          {id === 'refrigerators' && (
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать специалисту
            </a>
          )}
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Частые проблемы */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Частые проблемы</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.commonIssues.map((issue, index) => (
              <ProblemCard
                key={index}
                problem={issue}
                serviceType={id || ''}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Отзывы */}
      {service.reviews.length > 0 && (
        <ReviewsSection 
          reviews={service.reviews}
          title={`Отзывы о услуге "${service.title}"`}
          subtitle="Отзывы наших клиентов о качестве работы"
          className="bg-white"
        />
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <FAQSection 
          faqs={service.faqs}
          title="Частые вопросы"
          subtitle={`Ответы на популярные вопросы о ${service.title.toLowerCase()}`}
          className="bg-gray-50"
        />
      )}

      {/* CTA Banner */}
      <CTABanner serviceTitle={service.title} />
    </div>
  );
};

export default ServiceDetailPage; 