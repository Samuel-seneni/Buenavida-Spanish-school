
import { Link } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Languages,
  MessageCircle,
  Headphones,
  PenTool,
  Globe2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

const courses = [
  {
    id: "a1",
    level: "A1",
    name: "Beginner",
    tagline: "Start speaking Spanish",
    color: "border-green-500",
    badge: "bg-green-100 text-green-800",
    iconColor: "bg-green-100 text-green-700",
    description:
      "Begin your Spanish learning journey by developing the foundations needed for simple everyday communication.",
    skills: [
      "Introduce yourself and others",
      "Use common greetings and expressions",
      "Ask and answer simple questions",
      "Understand basic everyday words",
    ],
  },
  {
    id: "a2",
    level: "A2",
    name: "Elementary",
    tagline: "Build your foundation",
    color: "border-sky-500",
    badge: "bg-sky-100 text-sky-800",
    iconColor: "bg-sky-100 text-sky-700",
    description:
      "Develop your basic Spanish skills to communicate in familiar situations involving daily routines and personal information.",
    skills: [
      "Talk about family and daily activities",
      "Describe people, places, and things",
      "Discuss shopping and familiar topics",
      "Understand short, simple messages",
    ],
  },
  {
    id: "b1",
    level: "B1",
    name: "Intermediate",
    tagline: "Communicate independently",
    color: "border-amber-500",
    badge: "bg-amber-100 text-amber-800",
    iconColor: "bg-amber-100 text-amber-700",
    description:
      "Improve your ability to handle common situations, express opinions, and communicate about familiar topics with greater independence.",
    skills: [
      "Describe experiences and events",
      "Explain plans and personal opinions",
      "Handle common travel situations",
      "Understand the main points of clear speech",
    ],
  },
  {
    id: "b2",
    level: "B2",
    name: "Upper Intermediate",
    tagline: "Express ideas with confidence",
    color: "border-purple-500",
    badge: "bg-purple-100 text-purple-800",
    iconColor: "bg-purple-100 text-purple-700",
    description:
      "Strengthen fluency and comprehension so you can engage with more complex conversations and a wider range of topics.",
    skills: [
      "Discuss abstract and technical topics",
      "Explain viewpoints and support arguments",
      "Understand longer and more complex texts",
      "Communicate with improved fluency",
    ],
  },
  {
    id: "c1",
    level: "C1",
    name: "Advanced",
    tagline: "Refine your Spanish",
    color: "border-rose-500",
    badge: "bg-rose-100 text-rose-800",
    iconColor: "bg-rose-100 text-rose-700",
    description:
      "Develop sophisticated language skills for academic, professional, and social communication across demanding situations.",
    skills: [
      "Express ideas fluently and spontaneously",
      "Understand demanding, longer texts",
      "Use Spanish flexibly for different purposes",
      "Organize complex ideas clearly",
    ],
  },
  {
    id: "c2",
    level: "C2",
    name: "Proficiency",
    tagline: "Master nuanced communication",
    color: "border-indigo-500",
    badge: "bg-indigo-100 text-indigo-800",
    iconColor: "bg-indigo-100 text-indigo-700",
    description:
      "Refine your comprehension and expression to handle virtually any language situation with precision, nuance, and flexibility.",
    skills: [
      "Understand almost everything heard or read",
      "Summarize complex information accurately",
      "Express subtle differences in meaning",
      "Communicate precisely in demanding situations",
    ],
  },
];

const learningSkills = [
  {
    icon: MessageCircle,
    title: "Speaking",
    description:
      "Practise expressing yourself and participating in conversations.",
  },
  {
    icon: Headphones,
    title: "Listening",
    description:
      "Develop your understanding of spoken Spanish in different contexts.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Build vocabulary and comprehension through written Spanish.",
  },
  {
    icon: PenTool,
    title: "Writing",
    description:
      "Learn to communicate ideas clearly in written Spanish.",
  },
];

export default function Courses() {
  return (
    <main className="overflow-hidden">
      {/* Hero section */}
      <section className="relative bg-brand-navy px-4 py-16 text-white sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-red-500/10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Languages size={18} />
            Learn Spanish at Your Level
          </span>

          <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Explore Our Spanish{" "}
            <span className="text-red-300">Courses</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Whether you are learning your first Spanish words or refining
            advanced skills, explore our A1 to C2 learning pathways and
            identify the level that matches your goals.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#course-levels"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Explore Course Levels
              <ArrowRight size={18} />
            </a>

            <Link
              to="/admissions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Enroll Now
              <GraduationCap size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Course introduction */}
      <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-red">
              Find Your Starting Point
            </p>

            <h2 className="mb-5 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl lg:text-4xl">
              A Learning Pathway from Beginner to Proficient
            </h2>

            <p className="leading-7 text-gray-600 sm:leading-8">
              Our course levels follow the six-level Common European
              Framework of Reference for Languages (CEFR). Each level
              describes a different stage of language ability, helping
              learners understand their progress and learning goals.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-light p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Globe2 size={25} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-navy">
                  The Six CEFR Levels
                </h3>
                <p className="text-sm text-gray-600">
                  From basic communication to advanced proficiency
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {courses.map((course) => (
                <a
                  key={course.id}
                  href={`#${course.id}`}
                  className={`flex min-h-16 items-center justify-center rounded-xl border-l-4 bg-white px-2 py-3 text-center font-extrabold text-brand-navy shadow-sm transition hover:-translate-y-1 hover:shadow-md ${course.color}`}
                >
                  {course.level}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section
        id="course-levels"
        className="scroll-mt-24 bg-gray-50 px-4 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Learning Pathways"
            title="Choose Your Spanish Level"
            description="Explore the objectives and skills associated with each proficiency level."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                id={course.id}
                className={`flex scroll-mt-28 flex-col rounded-2xl border border-gray-200 border-t-4 ${course.color} bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 lg:p-7`}
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-extrabold ${course.badge}`}
                  >
                    CEFR {course.level}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {course.level === "A1" || course.level === "A2"
                      ? "Basic User"
                      : course.level === "B1" || course.level === "B2"
                        ? "Independent User"
                        : "Proficient User"}
                  </span>
                </div>

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${course.iconColor}`}
                >
                  {course.level === "A1" || course.level === "A2" ? (
                    <BookOpen size={27} />
                  ) : course.level === "B1" || course.level === "B2" ? (
                    <MessageCircle size={27} />
                  ) : (
                    <Sparkles size={27} />
                  )}
                </div>

                <h3 className="mb-1 text-2xl font-extrabold text-brand-navy">
                  {course.name}
                </h3>

                <p className="mb-4 text-sm font-semibold text-brand-red">
                  {course.tagline}
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 font-bold text-gray-800">
                    What you will work towards
                  </h4>

                  <ul className="space-y-3">
                    {course.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-sm leading-6 text-gray-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-green-600"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-gray-100 pt-5">
                  <Link
                    to="/admissions"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2"
                  >
                    Enquire About This Level
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core language skills */}
      <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Develop Your Skills"
            title="Four Essential Language Skills"
            description="A balanced language learning journey develops comprehension and communication."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {learningSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-navy">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-brand-navy">
                    {skill.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {skill.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="bg-brand-navy px-4 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <GraduationCap size={30} />
          </div>

          <h2 className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Ready to Begin Your Spanish Journey?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Tell us about your learning goals and enquire about the level
            that suits you.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-red px-7 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Enquire About Enrollment
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
