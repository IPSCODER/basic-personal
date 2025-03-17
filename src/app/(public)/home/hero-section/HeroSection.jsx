import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1160789077/photo/nutritionist-giving-consultation-to-patient-with-healthy-fruit-and-vegetable-right-nutrition.jpg?s=612x612&w=0&k=20&c=t5LNRmwc-BKcV-jmOGiCZXo5DWjBZKMe0OumH4WdW7I=')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Support & Guidance for a Better Life</h1>
          <p className="text-lg md:text-xl mb-6">Lorem ipsum is a dummy or placeholder text commonly used in graphic design.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary" className="w-full md:w-auto px-6 py-3">Explore articles</Button>
            <Button variant="secondary" className="w-full md:w-auto px-6 py-3">Get Counseling</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
