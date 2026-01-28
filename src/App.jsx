import { useState } from "react";
import { motion } from "framer-motion";
import calculatorImg from "./assets/calculator.png";
import landingImg from "./assets/landing.png";
import counterImg from "./assets/counter.png";


export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition duration-300">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 shadow-md">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav> 

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 px-6"
        >
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Naveen 👋</h2>
          <p className="max-w-xl mx-auto text-lg">
            Frontend Developer passionate about building responsive and modern web apps.
          </p>
        </motion.section>

        {/* Skills */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(s => (
              <div key={s} className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg shadow">
                {s}
              </div>
            ))}
          </div>
        </section>

       {/* Projects */}
<section className="py-16 px-6 bg-gray-100 dark:bg-gray-950">
  <h3 className="text-3xl font-semibold text-center mb-8">Projects</h3>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* Calculator */}
   <div className="bg-white dark:bg-gray-900 rounded-xl shadow hover:scale-105 transition overflow-hidden">
<img
    src={calculatorImg}
    alt="Calculator"
    className="w-full transition-transform duration-300 hover:scale-110"
  />
  </div>
  <div className="p-6">
    <h4 className="text-xl font-bold mb-2">Calculator App</h4>
    <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
      A simple calculator built using HTML, CSS and JavaScript.
    </p>
    <div className="flex gap-4">
      <a href="#" className="text-blue-500 font-medium">Live</a>
      <a href="#" className="text-blue-500 font-medium">GitHub</a>
    </div>
  </div>
</div>

    {/* Landing Page */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow hover:scale-105 transition overflow-hidden">
  <div className="overflow-hidden rounded-xl">
  <img
    src={landingImg}
    alt="Landing Page"
    className="w-full transition-transform duration-300 hover:scale-110"
  />
</div>

  <div className="p-6">
    <h4 className="text-xl font-bold mb-2">Responsive Landing Page</h4>
    <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
      A modern responsive landing page built using Tailwind CSS.
    </p>
    <div className="flex gap-4">
      <a href="#" className="text-blue-500 font-medium">Live</a>
      <a href="#" className="text-blue-500 font-medium">GitHub</a>
    </div>
  </div>
</div>


    {/* Counter App */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow hover:scale-105 transition overflow-hidden">
   <img
    src={counterImg}
    alt="Counter App"
    className="w-full transition-transform duration-300 hover:scale-110"
  />

  <div className="p-6">
    <h4 className="text-xl font-bold mb-2">Counter App</h4>
    <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
      A React counter app demonstrating state management using hooks.
    </p>
    <div className="flex gap-4">
      <a href="#" className="text-blue-500 font-medium">Live</a>
      <a href="#" className="text-blue-500 font-medium">GitHub</a>
    </div>
  </div>
</div>

</section>


        {/* Contact */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-8">Contact</h3>
          <form className="max-w-md mx-auto space-y-4">
            <input className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800" placeholder="Name" />
            <input className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800" placeholder="Email" />
            <textarea className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800" placeholder="Message" />
            <button className="w-full bg-blue-600 text-white py-3 rounded">Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-400">
          © 2026 Naveen Portfolio
        </footer>
      </div>
    </div>
  );
}
