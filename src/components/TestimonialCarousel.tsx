import Slider from "react-slick";
import { useState } from 'react';
import { TestimonialCard } from "./TestimonialCard";
import card1 from '../assets/bootstrap-profile-card-image.jpg';
import card2 from '../assets/square-headshot-1.png';
import card3 from '../assets/square-headshot-2.png';

const testimonials = [
  {
    id: 1,
    name: "Eliska Trebalska",
    role: "Mother",
    content: "With Realitoo we have been able move to another country in a 4 weeks. Incredible!",
    rating: 5,
    date: "8:35 PM • Jan 4, 2022",
    avatar: card1, // use imported image
  },
  {
    id: 2,
    name: "Jurek Jasinski",
    role: "Developer",
    content: "First touch with Realitoo and their passion with customers. Everyone and you fit...",
    rating: 5,
    date: "9:00 PM • Jan 6, 2022",
    avatar: card2, // use imported image
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Designer",
    content: "The platform made our relocation seamless. Highly recommend for families!",
    rating: 5,
    date: "2:15 PM • Jan 8, 2022",
    avatar: card3, // use imported image
  }
];

export const TestimonialCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    afterChange: (index: number) => setCurrent(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };

  const [current, setCurrent] = useState(0);

  return (
    <div className="">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => {
          const isCenter = index === current;
          return (
            <div
              key={testimonial.id}
              className={`transition-transform duration-300 ease-in-out slick-slide ${
                isCenter ? "scale-100 opacity-100" : "scale-90 "
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
