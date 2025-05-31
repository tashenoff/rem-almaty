import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, date, text, service }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
      {/* Рейтинг */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${
                index < rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Текст отзыва */}
      <p className="text-gray-600 flex-grow mb-4">{text}</p>

      {/* Информация об авторе и дате */}
      <div className="mt-auto">
        <div className="font-medium text-gray-900">{author}</div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <time dateTime={date}>{date}</time>
          {service && (
            <>
              <span className="mx-2">&middot;</span>
              <span>{service}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard; 