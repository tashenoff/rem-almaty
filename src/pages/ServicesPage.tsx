import React from 'react';
import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-accent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Наши услуги
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Мы предоставляем профессиональный ремонт бытовой техники с выездом на дом.
            Все работы выполняются опытными мастерами с гарантией качества.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 