'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-black to-red-900',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and automated notifications. Built with modern web technologies.',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    gradient: 'from-red-900 to-black',
  },
  {
    title: 'AI Content Generator',
    description:
      'An intelligent content generation tool powered by machine learning. Helps users create high-quality articles, social media posts, and marketing copy with customizable tone and style.',
    tags: ['Python', 'TensorFlow', 'React'],
    gradient: 'from-black via-red-900 to-black',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-black mb-12 text-center"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          Projects
        </h2>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className={`${
                      index === currentIndex ? 'scale-100' : 'scale-90'
                    } bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300`}
                    style={{
                      transformOrigin: 'center',
                    }}
                  >
                    <div className={`h-48 bg-gradient-to-r ${project.gradient}`}></div>
                    <div className="p-6">
                      <h3
                        className="text-2xl font-bold text-black mb-3"
                        style={{ fontFamily: 'var(--font-orbitron)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`${
                              tagIndex === project.tags.length - 1
                                ? 'bg-red-900 text-white'
                                : 'bg-black text-white'
                            } px-3 py-1 rounded-full text-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-red-900 font-semibold hover:text-red-800 transition">
                        View Project →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-900 transition cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-900 transition cursor-pointer"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  index === currentIndex ? 'bg-red-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
