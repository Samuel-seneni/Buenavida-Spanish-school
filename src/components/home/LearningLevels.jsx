
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  MessagesSquare,
  Globe2,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const levels = [
  {
    code: "A1",
    title: "Beginner",
    description: "Understand and use familiar everyday expressions and simple phrases.",
    icon: BookOpen,
    progress: "17%",
  },
  {
    code: "A2",
    title: "Elementary",
    description: "Communicate in simple, routine situations involving familiar topics.",
    icon: MessageCircle,
    progress: "33%",
  },
  {
    code: "B1",
    title: "Intermediate",
    description: "Understand the main points of clear speech and discuss familiar subjects.",
    icon: MessagesSquare,
    progress: "50%",
  },
  {
    code: "B2",
    title: "Upper Intermediate",
    description: "Interact with greater fluency and discuss a wider range of topics.",
    icon: Globe2,
    progress: "67%",
  },
  {
    code: "C1",
    title: "Advanced",
    description: "Use Spanish flexibly and understand demanding, complex material.",
    icon: GraduationCap,
    progress: "83%",
  },
  {
    code: "C2",
    title: "Proficient",
    description: "Work towards understanding virtually everything heard or read and expressing nuanced meaning.",
    icon: GraduationCap,
    progress: "100%",
  },
];

export default function LearningLevels() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Your Path to Spanish"
          title="Progress at Your Own Level"
          description="Spanish proficiency is commonly described through six CEFR levels. Explore the progression from basic communication to advanced understanding and expression."
        />

        {/* Level progression bar */}
        <div className="mt-12 hidden items-center px-4 md:flex">
          {levels.map((level, index) => (
            <div key={level.code} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-extrabold ${
                    index < 2
                      ? "border-brand-navy bg-brand-navy text-white"
                      : index < 4
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-brand-navy bg-white text-brand-navy"
                  }`}
                >
                  {level.code}
                </div>
                <span className="mt-3 text-xs font-semibold text-slate-600">
                  {level.title}
                </span>
              </div>

              {index < levels.length - 1 && (
                <div className="mx-2 mb-6 h-1 flex-1 rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      index < 2 ? "bg-brand-navy" : "bg-brand-red"
                    }`}
                    style={{ width: "100%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Level cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, index) => {
            const Icon = level.icon;

            return (
              <article
                key={level.code}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy transition group-hover:bg-brand-navy group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-brand-dark">
                        {level.code} — {level.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {index < 2
                          ? "Basic user"
                          : index < 4
                            ? "Independent user"
                            : "Proficient user"}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {level.description}
                </p>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Level progression</span>
                    <span>{level.progress}</span>
                  </div>

                  <div
                    className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"
                    role="progressbar"
                    aria-label={`${level.code} illustrative level progression`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Number.parseInt(level.progress, 10)}
                  >
                    <div
                      className={`h-full rounded-full ${
                        index < 2 ? "bg-brand-navy" : "bg-brand-red"
                      }`}
                      style={{ width: level.progress }}
                    />
                  </div>
                </div>

                <Link
                  to={`/courses#${level.code.toLowerCase()}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-red"
                >
                  Explore {level.code}
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-brand-light px-6 py-8 text-center sm:px-10 sm:py-10">
          <h3 className="text-xl font-extrabold text-brand-dark sm:text-2xl">
            Every Spanish journey starts somewhere.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Whether you are a complete beginner or already speak Spanish,
            explore the levels and contact us to discuss where you could begin.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              View All Courses
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-brand-navy/20 bg-white px-6 py-3.5 text-sm font-bold text-brand-navy transition hover:border-brand-navy hover:bg-blue-50"
            >
              Ask Us About Levels
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
