
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Globe2,
  MessageCircle,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const learningFeatures = [
  {
    icon: MessageCircle,
    title: "Practical Communication",
    description:
      "Build your ability to understand and use Spanish in everyday conversations.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Progress through Spanish learning levels, from A1 foundations to C2 proficiency.",
  },
  {
    icon: Globe2,
    title: "Cultural Discovery",
    description:
      "Explore Spanish-speaking cultures while developing your language skills.",
  },
];

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: School introduction */}
        <div>
          <SectionHeading
            eyebrow="About Buenavida"
            title="More Than Learning Words. Start Connecting With the World."
            description="Learning Spanish opens opportunities to communicate with people, explore cultures, and discover new possibilities. Buenavida Spanish School provides a place to begin and develop your Spanish learning journey."
            align="left"
          />

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Whether you are starting from the basics or developing existing
            language skills, you can explore a learning level that matches
            your current ability and goals.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Spanish learning levels from A1 to C2",
              "A focus on communication and language development",
              "Opportunities to explore Spanish-speaking cultures",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-brand-red"
                />
                <p className="text-sm leading-6 text-slate-700 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Discover Our School
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right: Learning features */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-50"
          />

          <div className="relative rounded-3xl bg-brand-light p-5 sm:p-8">
            <div className="rounded-2xl bg-brand-navy p-6 text-white sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-navy">
                <GraduationCap size={30} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Your journey starts here
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Discover the joy of learning Spanish.
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                Learn at your level, strengthen your communication skills,
                and take the next step in your language journey.
              </p>

              <Link
                to="/courses"
                className="mt-6 inline-flex items-center gap-2 font-bold text-white transition hover:text-red-300"
              >
                Explore our courses
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {learningFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
