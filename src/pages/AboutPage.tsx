import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-accent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            О нас
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Мы - команда профессиональных мастеров по ремонту бытовой техники с многолетним опытом работы
          </p>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col gap-24 px-4 sm:px-6 lg:px-8">
          {/* Блок опыт */}
          <section>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-accent mb-6">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Наш опыт
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Более 10 лет мы занимаемся ремонтом бытовой техники в Алматы. За это время мы накопили огромный опыт
              в ремонте холодильников, стиральных и посудомоечных машин всех марок и моделей.
            </p>
          </section>
          {/* Блок преимущества */}
          <section>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-accent mb-6">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Наши преимущества
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Мы гарантируем качество работы и используем только оригинальные запчасти.
              Наши мастера регулярно проходят обучение и повышают квалификацию.
              Мы ценим время наших клиентов и всегда приезжаем вовремя.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 