import { Button } from "@/components/ui/button";
import React from "react";

const featuredPosts = [
  {
    id: 1,
    title: "Overcoming Anxiety: A Guide to Calmness",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/overcoming-anxiety",
  },
  {
    id: 2,
    title: "The Power of Positive Thinking",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/positive-thinking",
  },
  {
    id: 3,
    title: "Building Stronger Relationships",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/stronger-relationships",
  },
];

const Featured = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Article Posts</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {featuredPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md max-w-sm p-6 flex flex-col rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">{post.title}</h3>
            <p className="text-gray-600 text-left mb-4">{post.excerpt}</p>
            <Button variant="secondary" className="mt-auto px-4 py-2 w-full">Read More →</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;