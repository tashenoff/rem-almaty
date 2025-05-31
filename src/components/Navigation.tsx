import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = '+7 777 123 45 67';
  const whatsappLink = 'https://wa.me/77771234567';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              РемБытТехника
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-accent">
              Главная
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-accent">
              Услуги
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-accent">
              О нас
            </Link>
            <Link to="/contacts" className="text-gray-900 hover:text-accent">
              Контакты
            </Link>
            <a href="tel:+77771234567" className="text-gray-900 hover:text-accent">
              +7 777 123 45 67
            </a>
            <a
              href="https://wa.me/77771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300"
            >
              Написать в WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-accent focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-900 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-900 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-900 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 text-gray-900 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <a
              href="tel:+77771234567"
              className="block px-3 py-2 text-gray-900 hover:text-accent"
            >
              +7 777 123 45 67
            </a>
            <a
              href="https://wa.me/77771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white bg-accent hover:bg-accent-dark rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 