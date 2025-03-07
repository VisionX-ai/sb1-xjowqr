import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Engr.David Ukeje',
    role: 'Lead Auditor, Qesh Standard Limited',
    content: 'VisionForge AI solutions streamlined our processes, boosted efficiency, and delivered outstanding results for our business.',
    image: './qeshlogs.png',
  },
  {
    name: '',
    role: '',
    content: '',
    image: '#',
  },
  {
    name: '',
    role: '',
    content: '',
    image: '#',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-custom-green"
                />
                <p className="text-lg mb-4">{testimonial.content}</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-electric-blue">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentTestimonial ? 'bg-electric-blue' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;