
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-[60vh] bg-brand-light px-4 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
          Buenavida Spanish School
        </p>

        <h1 className="mb-4 text-4xl font-extrabold text-brand-navy">
          {title}
        </h1>

        <p className="text-lg leading-8 text-gray-600">
          We're preparing this page to help you on your Spanish learning
          journey. Please check back soon.
        </p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-3 text-5xl font-extrabold text-brand-navy">
        404
      </h1>

      <p className="mb-6 text-gray-600">
        Sorry, the page you're looking for could not be found.
      </p>

      <a
        href="/"
        className="rounded-lg bg-brand-navy px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        Return Home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

           <Route path="/courses"element={<Courses />} />
           <Route path="/testimonials" element={<Testimonials />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/admissions" element={<Admissions />} />
           <Route path="/blog" element={<Blog />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
