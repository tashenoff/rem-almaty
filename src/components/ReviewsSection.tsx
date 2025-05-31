import React from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews: Review[];
  className?: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  title = 'Отзывы наших клиентов',
  subtitle = 'Узнайте, что говорят о нас клиенты, которые уже воспользовались нашими услугами',
  reviews,
  className = ''
}) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              date={review.date}
              text={review.text}
              service={review.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 