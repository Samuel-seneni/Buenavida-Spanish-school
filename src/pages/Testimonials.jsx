import {
  Star,
  Quote,
  MessageCircle,
  GraduationCap,
  ArrowRight,
  Heart,
  BookOpen,
} from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Samuel Seneni",
    level: "Beginner — A1",
    category: "Beginner Learning",
    initials: "SS",
    color: "bg-blue-100 text-blue-800",
    rating: 5,
    review:
      "Learning Spanish can feel challenging at first, but practising greetings, vocabulary, and simple conversations is a great way to build confidence.",
  },
  {
    id: 2,
    name: "Wilfred Muthoni",
    level: "Elementary — A2",
    category: "Speaking Practice",
    initials: "WM",
    color: "bg-red-100 text-red-800",
    rating: 5,
    review:
      "Regular practice with everyday expressions, listening activities, and short conversations can help learners become more comfortable using Spanish.",
  },
  {
    id: 3,
    name: "Peter Kipchir",
    level: "Intermediate — B1",
    category: "Language Progress",
    initials: "PT",
    color: "bg-indigo-100 text-indigo-800",
    rating: 5,
    review:
      "Building on the basics through reading, listening, and speaking exercises helps learners develop their communication skills step by step.",
  },
  {
    id: 4,
    name: "Alice Wanjiku",
    level: "Upper Intermediate — B2",
    category: "Communication",
    initials: "AW",
    color: "bg-amber-100 text-amber-800",
    rating: 5,
    review:
      "Practising longer conversations and learning vocabulary in context are useful ways to work towards more fluent and natural communication.",
  },
  {
    id: 5,
    name: "Josephat Munyendo",
    level: "Advanced — C1",
    category: "Advanced Learning",
    initials: "JM",
    color: "bg-green-100 text-green-800",
    rating: 5,
    review:
      "Advanced learners can continue improving by discussing complex topics, reading authentic materials, and expressing ideas with greater precision.",
  },
  {
    id: 6,
    name: "Milka Wangari",
    level: "Spanish Learner",
    category: "Learning Experience",
    initials: "MW",
    color: "bg-purple-100 text-purple-800",
    rating: 5,
    review:
      "Setting clear learning goals, practising consistently, and using Spanish outside lessons can make the learning journey more rewarding.",
  },
];

const benefits = [
  {
    icon: MessageCircle,
    title: "Speaking with Confidence",
    description:
      "Practise conversations and gradually become more comfortable expressing yourself in Spanish.",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description:
      "Develop vocabulary, grammar, listening, reading, and writing skills through regular practice.",
  },
  {
    icon: GraduationCap,
    title: "Progress at Your Level",
    description:
      "Build your skills step by step, from beginner foundations to more advanced communication.",
  },
];

function StarRating({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }, (_, index) => (
        <Star
          key={index}
          size={17}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-red/20" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Heart size={17} />
            The Learning Experience
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Every Spanish Learning Journey Matters
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Discover the skills, habits, and learning experiences that can help
            students grow in confidence as they learn Spanish with Buenavida
            Spanish School.
          </p>

          <a
            href="#student-feedback"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Explore Learning Experiences
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our learning community"
            title="Learning Spanish, Step by Step"
            description="Every learner has different goals. Consistent practice, useful learning materials, and opportunities to communicate can make a difference along the way."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-100 bg-brand-light p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                    <BenefitIcon size={23} />
                  </div>

                  <h2 className="text-lg font-bold text-brand-dark">
                    {benefit.title}
                  </h2>

                  <p className="mt-2 leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial cards */}
      <section
        id="student-feedback"
        className="bg-brand-light px-4 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Student feedback"
            title="Experiences Along the Learning Journey"
            description="Explore examples of the skills and milestones Spanish learners can work towards at different levels."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${testimonial.color}`}
                  >
                    <Quote size={25} />
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-brand-navy">
                    {testimonial.category}
                  </span>
                </div>

                <StarRating rating={testimonial.rating} />

                <blockquote className="mt-4 flex-1 text-base leading-7 text-gray-600">
                  “{testimonial.review}”
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-bold ${testimonial.color}`}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-dark">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {testimonial.level}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-navy px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <GraduationCap size={30} />
          </div>

          <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Start Your Own Spanish Learning Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Whether you are a complete beginner or looking to improve your
            existing skills, take the next step towards learning Spanish.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-brand-navy transition hover:bg-blue-50"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>

            <a
              href="/admissions"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Enquire About Enrollment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
