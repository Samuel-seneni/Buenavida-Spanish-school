
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";

const WHATSAPP_NUMBER = "254706170473";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  level: "",
  learningMode: "",
  goals: "",
};

const levels = [
  { value: "A1", label: "A1 - Beginner" },
  { value: "A2", label: "A2 - Elementary" },
  { value: "B1", label: "B1 - Intermediate" },
  { value: "B2", label: "B2 - Upper Intermediate" },
  { value: "C1", label: "C1 - Advanced" },
  { value: "C2", label: "C2 - Proficiency" },
  { value: "Unsure", label: "I'm not sure - Help me choose" },
];

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!form.level) {
      newErrors.level = "Please select a Spanish level.";
    }

    if (!form.learningMode) {
      newErrors.learningMode = "Please choose a learning mode.";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setNotice("Please check the highlighted fields and try again.");
      return;
    }

    const selectedLevel =
      levels.find((level) => level.value === form.level)?.label || form.level;

    const message = [
      "Hello Buenavida Spanish School!",
      "",
      "I would like to enquire about Spanish course enrollment.",
      "",
      `Full name: ${form.fullName.trim()}`,
      `Phone number: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || "Not provided"}`,
      `Preferred level: ${selectedLevel}`,
      `Learning mode: ${form.learningMode}`,
      `Learning goals: ${form.goals.trim() || "I would like more information."}`,
      "",
      "Please share the enrollment requirements and next steps. Thank you!",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-2 w-full min-w-0 rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15";

  const labelClass = "block text-sm font-semibold text-gray-700";

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-brand-navy px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-red-500/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <GraduationCap size={19} />
            Admissions and Enrollment
          </span>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Start Your{" "}
            <span className="text-red-300">Spanish Journey</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Interested in learning Spanish? Tell us a little about yourself
            and your learning goals. Send your inquiry directly to Buenavida
            Spanish School through WhatsApp.
          </p>
        </div>
      </section>

      {/* Form and contact information */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          {/* Enrollment form */}
          <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-red">
                Student Inquiry Form
              </p>

              <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
                Tell Us About Yourself
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Complete the form below. Fields marked with an asterisk (*)
                are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Full name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name *
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`${inputClass} pl-10`}
                  />
                </div>

                {errors.fullName && (
                  <p id="fullName-error" className="mt-2 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone and email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. 07XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`${inputClass} pl-10`}
                    />
                  </div>

                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="min-w-0">
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${inputClass} pl-10`}
                    />
                  </div>

                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred level */}
              <div>
                <label htmlFor="level" className={labelClass}>
                  Preferred Spanish Level *
                </label>

                <select
                  id="level"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.level)}
                  aria-describedby={errors.level ? "level-error" : undefined}
                  className={inputClass}
                >
                  <option value="">Select your preferred level</option>

                  {levels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>

                {errors.level && (
                  <p id="level-error" className="mt-2 text-sm text-red-600">
                    {errors.level}
                  </p>
                )}
              </div>

              {/* Learning mode */}
              <fieldset>
                <legend className={labelClass}>
                  Preferred Learning Mode *
                </legend>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {["Online", "Physical / In-person", "Hybrid", "Not sure yet"].map(
                    (mode) => (
                      <label
                        key={mode}
                        className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                          form.learningMode === mode
                            ? "border-brand-navy bg-brand-light text-brand-navy"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="learningMode"
                          value={mode}
                          checked={form.learningMode === mode}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 accent-blue-900"
                        />

                        <span className="font-medium">{mode}</span>
                      </label>
                    )
                  )}
                </div>

                {errors.learningMode && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.learningMode}
                  </p>
                )}
              </fieldset>

              {/* Learning goals */}
              <div>
                <label htmlFor="goals" className={labelClass}>
                  What Are Your Learning Goals?
                </label>

                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  maxLength={1000}
                  placeholder="For example, travel, work, studies, communication, or personal development..."
                  value={form.goals}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                />

                <p className="mt-2 text-right text-xs text-gray-500">
                  {form.goals.length}/1000 characters
                </p>
              </div>

              {notice && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {notice}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                <MessageCircle size={20} />
                Send Inquiry via WhatsApp
                <Send size={17} />
              </button>

              <p className="text-center text-xs leading-6 text-gray-500">
                Your inquiry will open in WhatsApp for you to review and send.
                Submitting this form does not automatically enroll you.
              </p>
            </form>
          </div>

          {/* Information sidebar */}
          <aside className="min-w-0 space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-brand-navy p-6 text-white sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle size={26} />
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Chat With Us on WhatsApp
              </h2>

              <p className="mb-6 text-sm leading-7 text-blue-100">
                Have a question about Spanish courses? Contact our school
                directly for information about enrollment and available
                learning options.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Buenavida Spanish School! I would like to enquire about your Spanish courses and enrollment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowRight size={17} />
              </a>

              <p className="mt-4 text-center text-sm text-blue-100">
                WhatsApp: 0706 170 473
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <h3 className="mb-5 text-lg font-extrabold text-brand-navy">
                What Happens Next?
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-navy">
                    <span className="font-bold">1</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Submit Your Inquiry
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Complete the form and open your prepared WhatsApp message.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-navy">
                    <span className="font-bold">2</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Send Your Message
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Review the details and press Send in WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-navy">
                    <span className="font-bold">3</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Discuss Enrollment
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Discuss your preferred level and the next steps with the school.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light p-6">
              <div className="mb-3 flex items-center gap-3 text-brand-navy">
                <BookOpen size={22} />
                <h3 className="font-bold">Explore Our Courses</h3>
              </div>

              <p className="mb-4 text-sm leading-7 text-gray-600">
                Not sure where to start? Explore the six Spanish learning
                levels before submitting your inquiry.
              </p>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-red"
              >
                View Spanish Courses
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
