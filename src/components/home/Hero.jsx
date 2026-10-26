
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-red-100/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-brand-navy">
            <Globe2 size={17} />
            <span>Welcome to Buenavida Spanish School</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Discover a New World Through{" "}
            <span className="text-brand-red">Spanish.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Start your Spanish learning journey with Buenavida Spanish School.
            Develop your language skills, connect with new cultures, and build
            confidence one lesson at a time.
          </p>

          {/* Learning benefits */}
          <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-brand-red" />
              Learn at your level
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-brand-red" />
              Build communication skills
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Start Learning
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-brand-navy transition hover:border-brand-navy hover:bg-blue-50"
            >
              <BookOpen size={18} />
              Explore Courses
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            From beginner foundations to advanced Spanish learning.
          </p>
        </div>

        {/* Right visual panel */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-2xl border-2 border-brand-red/20 sm:-left-6 sm:h-32 sm:w-32" />

          <div className="absolute -right-3 bottom-10 h-28 w-28 rounded-full bg-blue-100 sm:-right-5 sm:h-36 sm:w-36" />

          <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-5 shadow-2xl shadow-blue-950/20 sm:p-7">
            {/* Decorative illustration built with real icons */}
            <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-800 to-blue-950 p-6 sm:min-h-[420px] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-white/10"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
                    Your next chapter
                  </p>
                  <h2 className="mt-3 max-w-xs text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    ¡Hola!
                    <span className="mt-1 block text-red-300">
                      Let's speak Spanish.
                    </span>
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-navy shadow-lg">
                  <Globe2 size={30} />
                </div>
              </div>

              <div className="relative my-8 flex flex-1 items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/5 sm:h-56 sm:w-56">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white text-brand-navy shadow-xl sm:h-40 sm:w-40">
                    <BookOpen size={70} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="absolute bottom-2 left-0 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-sm sm:bottom-4">
                  <p className="text-xs text-blue-200">Every new word</p>
                  <p className="mt-1 font-bold">Opens a new door</p>
                </div>

                <div className="absolute right-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-lg sm:right-3">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>

              <div className="relative flex items-center justify-between gap-3 border-t border-white/15 pt-5">
                <div>
                  <p className="text-xs text-blue-200">Start your journey</p>
                  <p className="mt-1 text-sm font-bold text-white sm:text-base">
                    Learn. Practise. Communicate.
                  </p>
                </div>

                <LanguagesIcon />
              </div>
            </div>
          </div>

          {/* Floating learning-level card */}
          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-bottom-6 sm:left-8 sm:right-auto sm:min-w-64">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                <BookOpen size={22} />
              </div>

              <div>
                <p className="font-bold text-brand-dark">
                  Your learning journey
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Beginner to advanced levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LanguagesIcon() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
      <Globe2 size={23} />
    </div>
  );
}
