import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <div className="space-y-3">
              <p>
                <a href="tel:+77771234567" className="hover:text-white/80">
                  +7 777 123 45 67
                </a>
              </p>
              <p>info@rembytovoi.kz</p>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/refrigerators" className="hover:text-white/80">
                  Ремонт холодильников
                </Link>
              </li>
              <li>
                <Link to="/services/washing-machines" className="hover:text-white/80">
                  Ремонт стиральных машин
                </Link>
              </li>
              <li>
                <Link to="/services/dishwashers" className="hover:text-white/80">
                  Ремонт посудомоечных машин
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white/80">
                  Все услуги
                </Link>
              </li>
            </ul>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Режим работы</h3>
            <div className="space-y-3">
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} Tehno-Sfera.kz Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 