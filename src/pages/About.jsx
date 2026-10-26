
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Users,
  MessageCircle,
  Globe2,
  GraduationCap,
  CheckCircle2,
  Languages,
  Lightbulb,
  Handshake,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Passion for Learning",
    description:
      "We encourage learners to develop confidence, curiosity, and a lasting interest in the Spanish language.",
  },
  {
    icon: Users,
    title: "Inclusive Learning",
    description:
      "We aim to create a welcoming learning environment for students from different backgrounds and experience levels.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "We emphasize practical language skills that help learners communicate in everyday situations.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    description:
      "We encourage consistent practice, curiosity, and progress at every stage of the learning journey.",
  },
];

const benefits = [
  {
    icon: MessageCircle,
    title: "Practical Communication",
    description:
      "Build your speaking, listening, reading, and writing skills through purposeful learning activities.",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning Levels",
    description:
      "Explore Spanish from A1 beginner level through A2, B1, B2, C1, and C2.",
  },
  {
    icon: Globe2,
    title: "Cultural Awareness",
    description:
      "Discover Spanish-speaking cultures and gain a broader perspective on communication around the world.",
  },
  {
    icon: Handshake,
    title: "Supportive Environment",
    description:
      "Develop your skills step by step in a learning environment designed to encourage participation and confidence.",
  },
];

export default function About() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-red-500/10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Languages size={18} />
            Bienvenidos a Buenavida
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-red-300">
              Buenavida
            </span>{" "}
            Spanish School
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            We are dedicated to helping learners explore the Spanish language,
            build communication skills, and discover the cultures connected
            to one of the world's widely spoken languages.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="rounded-3xl bg-brand-light p-8 sm:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy text-white">
                <BookOpen size={32} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-red">
                Discover. Learn. Communicate.
              </p>

              <h2 className="mb-5 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
                Your Spanish Learning Journey Starts Here
              </h2>

              <p className="leading-8 text-gray-600">
                Learning a language opens doors to new conversations,
                experiences, and perspectives. At Buenavida Spanish School,
                our goal is to make the Spanish learning journey clear,
                engaging, and rewarding for every learner.
              </p>
            </div>

            <div className="absolute -bottom-4 -right-3 -z-10 h-28 w-28 rounded-3xl bg-red-100" />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-red">
              Who We Are
            </p>

            <h2 className="mb-6 text-3xl font-extrabold text-brand-navy sm:text-4xl">
              More Than Learning Words
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              Spanish learning involves more than memorizing vocabulary and
              grammar. It means learning how to express ideas, understand
              other people, and participate in conversations with confidence.
            </p>

            <p className="mb-7 leading-8 text-gray-600">
              Whether you are taking your first steps in Spanish or improving
              skills you already have, our learning pathway introduces
              progressive levels to help you work toward your language goals.
            </p>

            <ul className="space-y-4">
              {[
                "Learning pathways from A1 to C2",
                "Focus on practical language skills",
                "Opportunities to explore Spanish-speaking cultures",
                "Encouragement to keep learning and practising",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-600"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-brand-light px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission and Vision"
            description="The principles that guide our approach to Spanish language learning."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Target size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-brand-navy">
                Our Mission
              </h3>

              <p className="leading-8 text-gray-600">
                To support learners in developing useful Spanish language
                skills through structured learning, practical communication,
                and an appreciation of Spanish-speaking cultures.
              </p>
            </article>

            <article className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red text-white">
                <Eye size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-brand-navy">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-600">
                To be a welcoming learning destination where people can
                develop Spanish language proficiency, broaden their cultural
                understanding, and prepare for communication across borders.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Core Values"
            description="The qualities we aim to bring to the Spanish learning experience."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-navy">
                    <Icon size={25} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-brand-navy">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why learn with us */}
      <section className="bg-gray-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Learning Experience"
            title="Why Learn Spanish with Buenavida?"
            description="Build a foundation for communicating in Spanish and continue developing your skills over time."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-brand-navy">
                      {benefit.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="bg-brand-navy px-4 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Languages size={30} />
          </div>

          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">
            Start Your Spanish Journey Today
          </h2>

          <p className="mb-8 leading-8 text-blue-100">
            Take the next step toward learning a new language, discovering
            new cultures, and communicating with more people around the world.
          </p>

          <a
            href="/admissions"
            className="inline-flex items-center justify-center rounded-xl bg-brand-red px-7 py-3.5 font-bold text-white transition hover:bg-red-700"
          >
            Explore Enrollment
          </a>
        </div>
      </section>
    </main>
  );
}
