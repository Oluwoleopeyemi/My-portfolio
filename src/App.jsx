
import 'animate.css';
import heroImage from './Oluwole.JPG';
import { motion } from "framer-motion";
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';






export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
   

   <section className="min-h-screen pt-28 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
  <div className="max-w-4xl mx-auto text-center">

    {/* NAVBAR */}
  


    {/* HERO SECTION */}
    <img
      src={heroImage}
      alt="Oluwole Emmanuel"
      className="mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg border-4 border-orange-500"
    />

    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeInDown">
      Holla 👋, I'm Oluwole Emmanuel!
    </h1>

    <p className="text-lg md:text-xl text-gray-800 mb-6 animate__animated animate__fadeInUp animate__delay-1s max-w-2xl mx-auto">
       Seasoned Technical Writer | Frontend Developer | Data enthusiast 
    </p>

    <a href="#work">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
        View My Articles
      </button>
    </a>

  </div>
</section>
<section
  id="about"
  className="bg-white py-16 px-4 text-center"
>
  <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-50 via-white to-orange-100 p-10 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-orange-600 mb-6">About Me</h2>
    
    <p className="text-gray-800 text-lg mb-4 leading-relaxed">
      I'm Oluwole Emmanuel — a seasoned technical writer, frontend developer, and data enthusiast with a knack for turning complex technical concepts into content that educates, inspires, and empowers others. I build intuitive digital experiences that not only work flawlessly but also communicate ideas effectively.
    </p>
    
    <p className="text-gray-800 text-lg mb-4 leading-relaxed">
      When I'm not immersed in code or crafting tutorials, I enjoy reading and writing motivational books — reflections that fuel passion, purpose, and growth. I believe in leaving people better than I found them, whether through technology, words, or simple human connection.
    </p>
    
    <p className="text-gray-800 text-lg leading-relaxed">
      Outside the world of tech and writing, you'll find me chasing a football on the pitch, watching games, or exploring new adventures. Life is a journey, and I’m always eager to explore it — one goal, one story, one adventure at a time.
    </p>
  </div>
</section>



      {/* Work Section */}
    <section id="work" className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-center">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-orange-600 mb-4 drop-shadow-md">
      My Articles
    </h2>
    <p className="text-lg text-gray-800 mb-10 leading-relaxed max-w-3xl mx-auto">
      Explore some of the articles and tutorials I've written on frontend development, React Native, and technical writing. These resources are crafted to help you learn practically and build confidently.
    </p>


    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          localStorage VS sessionStorage: A Comprehensive Comparison
        </h3>
        <p className="text-gray-600 mb-4">
          A practical guide to understanding localStorage and sessionStorage.
        </p>
        <a
          href="https://blog.openreplay.com/localstorage-vs-sessionstorage--a-comprehensive-comparison/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          Integrating A Text Classification Model In Comet
        </h3>
        <p className="text-gray-600 mb-4">
          Learn how to implement and track a text classification model in Comet.
        </p>
        <a
          href="https://blog.comet.com/integrating-a-text-classification-model-in-comet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          Scaling Language Models with LLMOps in Real-World Applications
        </h3>
        <p className="text-gray-600 mb-4">
          Gain insight into how Language Models and LLMOps work in production.
        </p>
        <a
          href="https://towardsdatascience.com/scaling-language-models-with-llmops-in-real-world-applications-6291d225c6a3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          Five Practical Use Cases for Regular Expressions
        </h3>
        <p className="text-gray-600 mb-4">
          Want to know how Regex work? Check it out here!
        </p>
        <a
          href="https://blog.openreplay.com/localstorage-vs-sessionstorage--a-comprehensive-comparison/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          How to: Migrating from Node to Bun
        </h3>
        <p className="text-gray-600 mb-4">
          Need a seamless substitute for Node? Try Bun 😀 
        </p>
        <a
          href="https://blog.comet.com/integrating-a-text-classification-model-in-comet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white border-t-4 border-orange-500 rounded-xl p-6 shadow-md hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold text-black mb-2">
          Mastering Visual Appeal: Implementing the CSS Blurry Shimmer Effect
        </h3>
        <p className="text-gray-600 mb-4">
          Gain insight into how to implement CSS Blurry Shimmer Effect
        </p>
        <a
          href="https://towardsdatascience.com/scaling-language-models-with-llmops-in-real-world-applications-6291d225c6a3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </motion.div>
    </div>
    
  </div>
  
</section>
<footer id="contact" className="bg-gradient-to-r from-blue-600 to-orange-400 text-white py-12 px-4 text-center mt-20">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-semibold mb-4">Let's Connect</h3>
    <p className="text-lg mb-6">
      Have a project in mind? Feel free to reach out!
    </p>
    <p className="text-md mb-2">oluwoleopeyemi31@gmail.com</p>
    <p className="text-md mb-6">Call: +234 816 417 3542</p>

    <div className="flex justify-center space-x-8 mt-6">
      <a
        href="https://twitter.com/OluwoleImpact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.linkedin.com/in/oluwoleemmanuel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.instagram.com/oluwoleimpact/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
      </a>
    </div>

    <p className="text-sm mt-10 text-white/80">
      © {new Date().getFullYear()} Oluwole Emmanuel. All rights reserved.
    </p>
  </div>
</footer>

    <ScrollToTopButton />
    </>
  );
}


 