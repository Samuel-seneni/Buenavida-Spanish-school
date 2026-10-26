import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Languages,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Courses", href: "/courses" },
  { label: "Our Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Admissions", href: "/admissions" },
];

const courseLevels = [
  { label: "Beginner – A1", href: "/courses#a1" },
  { label: "Elementary – A2", href: "/courses#a2" },
  { label: "Intermediate – B1", href: "/courses#b1" },
  { label: "Upper Intermediate – B2", href: "/courses#b2" },
  { label: "Advanced – C1", href: "/courses#c1" },
  { label: "Proficient – C2", href: "/courses#c2" },
];

const email = "buenavidaspanishschool@gmail.com";
const phone = "0706170473";
const whatsappNumber = "254706170473";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100076507985143",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${whatsappNumber}`,
    Icon: FaWhatsapp,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:py-16">
        {/* School information */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="Buenavida Spanish School home"
          >
         <img src="/buenavida-logo.PNG" alt="Buenavida Spanish School logo" className="h-14 w-14 shrink-0 rounded-full object-contain bg-white p-1"
         />


            <div>
              <h2 className="text-lg font-extrabold leading-tight">
                BUENAVIDA
                <br />
                SPANISH SCHOOL
              </h2>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
            Learn Spanish. Discover the world. Begin your Spanish
            learning journey with Buenavida Spanish School and build
            your confidence communicating in Spanish.
          </p>

          <Link
            to="/admissions"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Enroll Now
            <ArrowRight size={17} />
          </Link>

          {/* Social media */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-red hover:bg-brand-red"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />

          <ul className="mt-5 list-none space-y-3 p-0">
            {quickLinks.map((item) => (
              <li key={item.href} className="list-none">
                <Link
                  to={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
                >
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-brand-red transition group-hover:translate-x-1"
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Spanish course levels */}
        <div>
          <h3 className="text-lg font-bold">Spanish Course Levels</h3>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />

          <ul className="mt-5 list-none space-y-3 p-0">
            {courseLevels.map((course) => (
              <li key={course.href} className="list-none">
                <Link
                  to={course.href}
                  className="group inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
                >
                 <span>{course.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />

          <p className="mt-5 text-sm leading-6 text-blue-100">
            Have questions about our Spanish courses? Get in touch
            with us. We will be happy to help you.
          </p>

          <div className="mt-5 space-y-5">
            <a
              href={`mailto:${email}`}
              className="flex items-start gap-3 text-sm text-blue-100 transition hover:text-white"
            >
              <Mail
                size={19}
                className="mt-0.5 shrink-0 text-red-400"
              />
              <span className="break-all">{email}</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-start gap-3 text-sm text-blue-100 transition hover:text-white"
            >
              <Phone
                size={19}
                className="mt-0.5 shrink-0 text-red-400"
              />
              <span>{phone}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-blue-100 transition hover:text-white"
            >
              <FaWhatsapp
                size={19}
                className="mt-0.5 shrink-0 text-green-400"
              />
              <span>Chat with us on WhatsApp</span>
            </a>

            <div className="flex items-start gap-3 text-sm text-blue-100">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-red-400"
              />
              <span>
                Contact us for our school location and directions.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-blue-200 sm:px-6 md:flex-row md:text-left">
          <p>
            © {currentYear} Buenavida Spanish School. All rights
            reserved.
          </p>

          <p>
            Learn Spanish.{" "}
            <span className="text-red-400">
              Discover the world.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
