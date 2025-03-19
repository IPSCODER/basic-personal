import { Button } from "@/components/ui/button";
import React from "react";

const About = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-20 flex justify-end px-4 md:px-16"
      style={{ backgroundImage: "url('https://www.online-therapy.com/images/science_1440.jpg')" }}
    >
      <div className="max-w-2xl text-right text-black bg-white bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Learn More</Button>
      </div>
    </section>
  );
};

export default About;
