import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "This article has been life-changing! The advice and guidance have helped me manage my anxiety and find peace.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "I found exactly what I needed to improve my relationships. The articles are insightful and well-written.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Sophia Williams",
    feedback:
      "A wonderful platform filled with valuable resources. I feel more confident and in control of my emotions.",
    image: "/user3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Readers Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center"
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-semibold text-blue-600">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
