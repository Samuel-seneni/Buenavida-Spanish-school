
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  MessagesSquare,
  GraduationCap,
  Globe2,
  Award,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const courses = [
  {
    code: "A1",
    level: "Beginner",
    title: "Start with Spanish",
    description:
      "Learn essential words, greetings, introductions, and simple everyday expressions.",
    outcome: "Build your foundations",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
    id: "a1",
  },
  {
    code: "A2",
    level: "Elementary",
    title: "Build Your Skills",
    description:
      "Develop your vocabulary and communicate in familiar, everyday situations.",
    outcome: "Handle simple conversations",
    icon: MessageCircle,
    color: "bg-red-50 text-red-700",
    border: "border-red-100",
    id: "a2",
  },
  {
    code: "B1",
    level: "Intermediate",
    title: "Communicate with Confidence",
    description:
      "Practise discussing familiar topics, describing experiences, and expressing opinions.",
    outcome: "Express your ideas",
    icon: MessagesSquare,
    color: "bg-indigo-50 text-indigo-700",
    border: "border-indigo-100",
    id: "b1",
  },
  {
    code: "B2",
    level: "Upper Intermediate",
    title: "Expand Your Fluency",
    description:
      "Strengthen your ability to discuss a wider range of subjects with greater independence.",
    outcome: "Communicate more fluently",
    icon: Globe2,
    color: "bg-rose-50 text-rose-700",
    border: "border-rose-100",
    id: "b2",
  },
  {
    code: "C1",
    level: "Advanced",
    title: "Master Complex Spanish",
    description:
      "Develop advanced comprehension and express complex ideas with precision.",
    outcome: "Refine your expression",
    icon: GraduationCap,
    color: "bg-sky-50 text-sky-700",
    border: "border-sky-100",
    id: "c1",
  },
  {
    code: "C2",
    level: "Proficient",
    title: "Reach Your Full Potential",
    description:
      "Work towards understanding and expressing nuanced meaning across demanding contexts.",
    outcome: "Aim for high proficiency",
    icon: Award,
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
    id: "c2",
  },
];

export default function CoursePreview() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Learn Spanish with Buenavida"
          title="Find Your Spanish Learning Level"
          description="From your first Spanish words to advanced communication, explore the six levels of the Common European Framework of Reference for Languages (CEFR)."
        />

        {/* Course cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.code}
                id={course.id}
                className={`group flex h-full flex-col rounded-2xl border ${course.border} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7`}
              >
                {/* Level badge and icon */}
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-lg bg-brand-navy px-4 py-2 text-sm font-extrabold tracking-wider text-white">
                    {course.code}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${course.color}`}
                  >
                    <Icon size={24} />
                  </div>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-brand-red">
                  {course.level}
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-snug text-brand-dark">
                  {course.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-700">
                      <ArrowRight size={13} />
                    </span>
                    {course.outcome}
                  </p>

                  <Link
                    to={`/courses#${course.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition group-hover:text-brand-red"
                  >
                    Explore this level
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-brand-navy px-6 py-8 text-center sm:px-9 md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              Not sure which level is right for you?
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Contact our school to discuss your Spanish learning goals.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-red px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
