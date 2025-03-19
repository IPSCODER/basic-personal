"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Yup Schema Validation
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactUsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-24">
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-3xl p-10">
        {/* Decorative Shape */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 opacity-20 rounded-full"></div>

        {/* Heading */}
        <h1 className="text-4xl font-bold uppercase text-gray-800 text-center">
          Get In <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-gray-600 text-center mt-2">
          We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message")}
              placeholder="Enter Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;
