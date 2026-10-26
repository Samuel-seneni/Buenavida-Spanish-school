
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  MessageCircle,
  Languages,
  BookOpen,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-white/5 blur-2xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Main message */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Globe2 size={17} />
              <span>Your Spanish journey starts here</span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Discover the World Through{" "}
              <span className="text-red-300">Spanish?</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Take the next step towards learning a new language. Explore our
              Spanish learning levels, discover your starting point, and get
              in touch with Buenavida Spanish School.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Enroll Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <BookOpen size={18} />
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Supporting feature panel */}
          <div className="w-full lg:max-w-sm">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-navy">
                <Languages size={30} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                Find Your Starting Point
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                From A1 beginner Spanish to C2 proficiency, explore the levels
                and identify the learning path that fits your goals.
              </p>

              <div className="mt-6 border-t border-white/15 pt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-white transition hover:text-red-300"
                >
                  <MessageCircle size={18} />
                  Talk to Our School
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Globe2 size={17} className="shrink-0 text-red-300" />
            Learn Spanish. Discover the world.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-semibold transition hover:text-white"
          >
            Discover Buenavida
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
