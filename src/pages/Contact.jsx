
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

const WHATSAPP_NUMBER = "254706170473";
const SCHOOL_PHONE = "0706 170 473";
const SCHOOL_EMAIL = "buenavidaspanishschool@gmail.com";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    detail: SCHOOL_PHONE,
    description: "Contact us for course enquiries.",
    href: `tel:${WHATSAPP_NUMBER}`,
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: SCHOOL_EMAIL,
    description: "Send us your questions by email.",
    href: `mailto:${SCHOOL_EMAIL}`,
    action: "Send an email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with our team",
    description: "Send an enquiry directly through WhatsApp.",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    action: "Chat on WhatsApp",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "Course Enquiry",
  course: "Spanish A1 - Beginner",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.subject ||
      !form.message.trim()
    ) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const whatsappMessage = [
      "Hello Buenavida Spanish School,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${form.fullName.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Subject: ${form.subject}`,
      `Course of interest: ${form.course}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (whatsappWindow) {
      setSubmitted(true);
      setForm(initialForm);
    } else {
      setError(
        "Your browser blocked the WhatsApp window. Please allow pop-ups and try again, or use the WhatsApp contact link above."
      );
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-red/20" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <MessageCircle size={17} />
            We'd Love to Hear from You
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Get in Touch with Buenavida
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Have questions about our Spanish courses, learning levels, or
            enrollment? Contact us and take the next step in your Spanish
            learning journey.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Send an Enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Contact information */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact information"
            title="We're Here to Help"
            description="Choose the most convenient way to reach us. We're happy to answer questions about learning Spanish at Buenavida."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item) => {
              const ContactIcon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                    <ContactIcon size={24} />
                  </div>

                  <h2 className="text-xl font-bold text-brand-dark">
                    {item.title}
                  </h2>

                  <p className="mt-2 break-words font-semibold text-gray-800">
                    {item.detail}
                  </p>

                  <p className="mt-2 flex-1 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-brand-navy transition hover:text-brand-red"
                  >
                    {item.action}
                    <ArrowRight size={17} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form and additional information */}
      <section
        id="contact-form"
        className="bg-brand-light px-4 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* Contact form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-red">
                Send us a message
              </p>

              <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
                How Can We Help You?
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Fill in the form below. Your details and message will be
                prepared for you to send through WhatsApp.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
              >
                <CheckCircle className="mt-0.5 shrink-0" size={21} />
                <p className="text-sm leading-6">
                  WhatsApp was opened. Review your pre-filled message and press
                  Send in WhatsApp to deliver your enquiry.
                </p>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 07XX XXX XXX"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Enquiry Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                  >
                    <option>Course Enquiry</option>
                    <option>Admissions and Enrollment</option>
                    <option>Course Fees</option>
                    <option>Class Schedule</option>
                    <option>Online Learning</option>
                    <option>Other Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Course of Interest
                </label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                >
                  <option>Spanish A1 - Beginner</option>
                  <option>Spanish A2 - Elementary</option>
                  <option>Spanish B1 - Intermediate</option>
                  <option>Spanish B2 - Upper Intermediate</option>
                  <option>Spanish C1 - Advanced</option>
                  <option>Spanish C2 - Proficiency</option>
                  <option>Not Sure - Need Guidance</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to know..."
                  className="w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 py-3.5 font-bold text-white transition hover:bg-brand-dark sm:w-auto"
              >
                <Send size={18} />
                Continue to WhatsApp
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Your message will not be sent until you review it and press
                Send in WhatsApp.
              </p>
            </form>
          </div>

          {/* Helpful information */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-navy p-6 text-white sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle size={25} />
              </div>

              <h2 className="text-2xl font-extrabold">
                Prefer WhatsApp?
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                Contact us directly to ask about Spanish courses, learning
                levels, and how to get started.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Buenavida Spanish School, I would like to enquire about your Spanish courses."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Chat with Us
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                <Clock size={24} />
              </div>

              <h2 className="text-xl font-bold text-brand-dark">
                Class Schedules
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Interested in class times or available learning options? Send
                us an enquiry so you can confirm the current schedule before
                enrolling.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                <MapPin size={24} />
              </div>

              <h2 className="text-xl font-bold text-brand-dark">
                Find Our School
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Contact our team for the school's current location and
                directions before visiting.
              </p>

              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <Globe size={17} />
                Buenavida Spanish School
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
            Your Spanish Journey Starts Here
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Explore our Spanish learning levels and find the right starting
            point for your goals.
          </p>

          <a
            href="/courses"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            View Spanish Courses
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
