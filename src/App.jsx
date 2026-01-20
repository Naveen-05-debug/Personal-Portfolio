import { useState } from "react";
import { motion } from "framer-motion";

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
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(p => (
              <div key={p} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h4 className="text-xl font-bold">Project {p}</h4>
                <p className="text-sm mt-2 mb-3">Short project description here.</p>
                <a href="#" className="text-blue-500">View →</a>
              </div>
            ))}
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
