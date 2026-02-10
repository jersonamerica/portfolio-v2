"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimateOnView } from "@/hooks/useAnimateOnView";

const projects = [
  {
    title: "Cryptojers",
    description:
      "A comprehensive cryptocurrency tracking platform featuring a complete list of cryptocurrencies with detailed information for each asset. Access real-time news updates, monitor price changes with interactive graphs that track performance over time, and stay informed about market trends.",
    tags: ["React", "Redux", "Node.js", "Ant Design"],
    gradient: "from-black to-red-900",
    url: "https://cryptojers.netlify.app/",
    image: "/cryptojers.PNG",
  },
  {
    title: "CMS Blog Platform",
    description:
      "A powerful content management system for blogging that allows users to create, edit, and publish articles. Features include rich text editing, article categorization, tag management, and a clean interface for managing your blog content. Perfect for bloggers and content creators who want a modern platform to share their stories.",
    tags: ["React", "TypeScript", "NextJS", "TailwindCSS", "GraphQL"],
    gradient: "from-red-900 to-black",
    url: "https://cmsblog.vercel.app/",
    image: "/graphcms.PNG",
  },
  {
    title: "OPEN AI Chat App",
    description:
      "An AI-powered chat application that leverages OpenAI's language model to provide intelligent and context-aware responses. Users can engage in natural language conversations, ask questions, and receive informative answers in real-time.",
    tags: [
      "React",
      "TypeScript",
      "NextJS",
      "Zustand",
      "TailwindCSS",
      "OpenAI API",
    ],
    gradient: "from-red-900 to-black",
    url: "https://open-ai-chat-app-dun.vercel.app/",
    image: "/OpenAI.PNG",
  },
  {
    title: "Covid19 Tracker",
    description:
      "A real-time tracking application for monitoring global and local COVID-19 statistics. Features include up-to-date case numbers, recoveries, and fatalities presented in an easy-to-understand format. Interactive charts and maps help visualize the spread of the virus, making it a valuable tool for staying informed during the pandemic.",
    tags: ["React", "Redux", "Typescript", "Material UI"],
    gradient: "from-black via-red-900 to-black",
    url: "https://covid19-virus-tracker-v2.netlify.app/",
    image: "/covid19tracker.PNG",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useAnimateOnView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-white ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-black mb-12 text-center"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Projects
        </h2>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`${
                      index === currentIndex ? "scale-100" : "scale-90"
                    } bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300`}
                    style={{
                      transformOrigin: "center",
                    }}
                  >
                    <div className="h-64 bg-gradient-to-r from-black to-red-900 relative overflow-hidden shadow-lg">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="100"
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-r ${project.gradient}`}
                        ></div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-2xl font-bold text-red-900 mb-3"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`${
                              tagIndex === project.tags.length - 1
                                ? "bg-red-900 text-white"
                                : "bg-black text-white"
                            } px-3 py-1 rounded-full text-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => window.open(project.url, "_blank")}
                        className="text-red-900 font-semibold hover:text-red-800 transition cursor-pointer"
                      >
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
                  index === currentIndex ? "bg-red-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
