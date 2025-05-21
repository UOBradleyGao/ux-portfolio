import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">My UX Design Portfolio</h1>
        <p className="text-lg">Reflecting my journey through UI/UX design</p>
      </header>

      <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          [Insert your name, a short bio, and optionally a photo.]<br />
          Example: I'm a UI/UX design student at the University of Ottawa, passionate about intuitive and visually engaging digital experiences.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
        <p className="mb-4">
          As part of my UI/UX design course, I'm learning core design principles including visual hierarchy, layout, and user-centered design. I frequently reference materials from the Nielsen Norman Group.
        </p>
        <a
          href="https://www.nngroup.com/"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit NN/g site
        </a>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Service Site", img: "Service+Site" },
            { title: "Small Game", img: "Game+Design" },
            { title: "E-commerce Site", img: "E-commerce" },
            { title: "Analytics Site", img: "Analytics+Site" }
          ].map(({ title, img }, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="font-bold text-lg mb-2">Design {index + 1}: {title}</h3>
              <p className="mb-2">Coming Soon</p>
              <img
                src={`https://via.placeholder.com/300x200?text=${img}`}
                alt={`${title} Placeholder`}
                className="mx-auto rounded"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
