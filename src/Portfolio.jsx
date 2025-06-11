import React from "react";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 font-sans transition-all duration-500 ease-in-out scroll-smooth overflow-hidden">

      {/* Optimized Background Blur Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[40%] -left-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-violet-300 to-purple-200 blur-xl"></div>
        <div className="absolute top-[5%] -right-[25%] w-[50%] h-[20%] rounded-full bg-gradient-to-bl from-blue-400 to-indigo-300 blur-xl"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-indigo-300 to-blue-400 blur-xl"></div>
        <div className="absolute top-[75%] right-[-15%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-pink-200 to-violet-300 blur-xl"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-200 to-teal-300 blur-xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-blue-900 text-xl">Bradley Gao</span>
          <div className="space-x-6 text-blue-700 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#workflow" className="hover:underline">Workflow</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">
        {/* Intro Section */}
        <section className="text-center my-20 animate-fade-in">
        <h1 className="text-6xl font-extrabold leading-normal bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
            Hey, I'm Bradley.
          </h1>
          <p className="text-lg text-blue-700 max-w-xl mx-auto mt-4">
            A developer and UI/UX student building thoughtful, interactive, and user-focused digital environments.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white/80 shadow-xl rounded-2xl p-6 mb-20 max-w-3xl mx-auto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a UI/UX design student at the University of Ottawa, passionate about creating intuitive and visually engaging digital experiences. I enjoy experimenting with layout, typography, and animation to reflect both creativity and clarity in interface design.
          </p>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="bg-white/80 shadow-xl rounded-2xl p-6 mb-20 max-w-3xl mx-auto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">How I Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm currently studying UI/UX design in an academic setting and applying visual design principles including hierarchy, contrast, and alignment. I explore resources like the Nielsen Norman Group to understand foundational practices and refine my process.
          </p>
          <a href="https://www.nngroup.com/" className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            Visit NN/g site
          </a>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white/80 shadow-xl rounded-2xl p-6 mb-20 max-w-3xl mx-auto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="p-4 border border-blue-100 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">[Communications Research Centre Canada]</h3>
              <h3 className="text-l font-semibold text-blue-600">Jan 2025 - Apr 2025</h3>
              <p className="text-gray-600">Built and contributed to an AI interface web service utilized by Government of Canada public servants. Worked on bug fixes and implemented new features using React, Node.js, Typescript and AWS.</p>
            </div>
            <div className="p-4 border border-blue-100 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">[Canada Revenue Agency]</h3>
              <h3 className="text-l font-semibold text-blue-600">May 2024 - Aug 2024</h3>
              <p className="text-gray-600">Worked as a Test Automation Engineer in a sprint based Agile environment for a CRA internal application. Scripted test cases using Eclipse and Java Swing technology.</p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="projects" className="bg-white/80 shadow-xl rounded-2xl p-6 mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Tattoo Services Site",
              image: "https://blog.spoongraphics.co.uk/wp-content/uploads/2011/09/Untitled-1.jpg",
              link: "https://seg3125-a2.netlify.app",
            },
            {
              title: "Small Game",
              image: "https://thereader.mitpress.mit.edu/wp-content/uploads/2020/11/pacman-lead-graphic.jpg",
            },
            {
              title: "E-commerce Site",
              image: "https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg",
            },
            {
              title: "Analytics Site",
              image: "https://t4.ftcdn.net/jpg/04/35/31/47/360_F_435314769_TXsKQ6aQfoHMZJfGcXtaXhyoY7iHK3ld.jpg",
            },
          ].map(({ title, image, link }, index) => {
            const content = (
              <div
                className="bg-gradient-to-tr from-white to-blue-50 border border-blue-100 rounded-xl p-6 text-center shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-xl text-blue-700 mb-2">
                  Design {index + 1}: {title}
                </h3>
                <img
                  src={image}
                  alt={`${title} Screenshot`}
                  className="mx-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mb-3"
                />
                <p className="text-gray-600">Coming Soon</p>
              </div>
            );

            return link ? (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
          </div>
        </section>


        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white/80 shadow-xl rounded-2xl p-6 mb-20 max-w-3xl mx-auto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            Contact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Want to get in touch? Email me at:{" "}
            <a
              href="mailto:bradley@example.com"
              className="text-blue-600 hover:underline"
            >
              bgao084@uottawa.ca
            </a>
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </section>


        

        {/* Footer */}
        <footer className="bg-blue-100 text-center text-sm text-blue-800 py-4">
          © 2025 Bradley Gao — Built with Node.js, React & Tailwind CSS
        </footer>

        {/* Custom Animations */}
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }

            @keyframes fade-in {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes slide-up-fade {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .animate-fade-in {
              animation: fade-in 1s ease-out both;
            }

            .animate-slide-up-fade {
              animation: slide-up-fade 0.8s ease-out both;
            }
          `}
        </style>
      </main>
    </div>
  );
}
