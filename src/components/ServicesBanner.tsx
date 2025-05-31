import React from 'react';

const ServicesBanner = () => {
  return (
    <div className="relative bg-accent h-[400px] flex items-center">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light">
        <div className="absolute inset-0 bg-[url('/images/services-banner.jpg')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Контент баннера */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ремонт бытовой техники в Алматы
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Профессиональный ремонт холодильников, стиральных машин и другой бытовой техники с гарантией качества
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="tel:+77771234567"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-300"
          >
            Позвонить сейчас
          </a>
          <a
            href="https://wa.me/77771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-300"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner; 