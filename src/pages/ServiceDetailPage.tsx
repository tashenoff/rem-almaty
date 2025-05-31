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

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-accent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            {service.description}
          </p>
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