import React from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import { reviews } from '../data/reviews';
import { faqs } from '../data/faqs';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div 
        style={{ 
          height: '600px',
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ремонт бытовой техники в Алматы
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Профессиональный ремонт холодильников, стиральных машин, духовок и другой бытовой техники.
              Выезд мастера в день обращения. Гарантия на все виды работ.
            </p>
            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Преимущества
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Почему выбирают нас
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Оперативность</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Выезд мастера в день обращения. Быстрая диагностика и ремонт.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Гарантия качества</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Предоставляем гарантию на все виды выполненных работ.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Доступные цены</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Честные цены без скрытых платежей. Выезд и диагностика бесплатно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Отзывы */}
      <ReviewsSection 
        reviews={reviews}
        className="bg-gray-50"
      />

      {/* FAQ */}
      <FAQSection 
        faqs={faqs}
        className="bg-white"
      />

      {/* CTA Banner */}
      <CTABanner 
        title="Нужен срочный ремонт?"
      />
    </div>
  );
};

export default HomePage; 