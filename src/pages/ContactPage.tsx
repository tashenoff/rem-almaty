import React from 'react';
import { TrackPhoneLink } from '../components/TrackPhoneLink';

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-accent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Контакты
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Свяжитесь с нами любым удобным способом. Мы работаем ежедневно с 8:00 до 22:00
          </p>
        </div>
      </div>

      {/* Contact section */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Наши контакты
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Телефон</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-3">
                      <TrackPhoneLink phone="+77777777777" className="hover:text-gray-900">
                        +7 (777) 777-77-77
                      </TrackPhoneLink>
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">WhatsApp</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-3">
                      <a
                        href="https://wa.me/77777777777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900"
                      >
                        WhatsApp
                      </a>
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="ml-3">
                      <a
                        href="mailto:info@remalmaty.kz"
                        className="hover:text-gray-900"
                      >
                        info@remalmaty.kz
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                    placeholder="Ваш телефон"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                    placeholder="Опишите проблему"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 