
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Menu,
  X,
  Languages,
} from "lucide-react";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const email = "buenavidaspanishschool@gmail.com";
const phone = "0706170473";

// Replace these example social URLs with the school's official profiles.
const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    Icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];

function SocialLinks({ mobile = false }) {
  return (
    <div className={`flex items-center ${mobile ? "gap-5 pt-1" : "gap-4"}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition hover:text-red-300"
        >
          <Icon size={mobile ? 21 : 18} />
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top contact bar */}
      <div className="border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 md:justify-between md:px-6">
          <p className="text-center text-xs font-medium sm:text-sm">
            ¡Bienvenidos! Welcome to Buenavida Spanish School
          </p>

          <div className="hidden items-center gap-5 text-xs md:flex md:text-sm">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 transition hover:text-red-300"
            >
              <Mail size={15} />
              <span>Email Us: {email}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 transition hover:text-red-300"
            >
              <Phone size={15} />
              <span>Contact Us: {phone}</span>
            </Link>

            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        aria-label="Main navigation"
        className="border-b border-gray-100 bg-white shadow-sm"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 lg:py-4">
          {/* School logo and name */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
            aria-label="Buenavida Spanish School home"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-navy text-white ring-2 ring-red-600 sm:h-14 sm:w-14">
              <img
                src="/buenavida-logo.PNG"
                alt="Buenavida Spanish School logo"
                className="h-full w-full object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <Languages size={26} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h1 className="text-sm font-extrabold leading-tight tracking-tight text-brand-navy sm:text-lg md:text-xl xl:text-2xl">
                BUENAVIDA SPANISH SCHOOL
              </h1>

              <p className="mt-1 hidden text-xs text-gray-500 xl:block">
                Learn Spanish. Discover the world.
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group relative whitespace-nowrap py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-brand-navy"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-brand-red transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
            >             
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white transition hover:bg-brand-red lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/admissions"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700"
              >         
                Enroll Now
              </Link>

              <div className="mt-4 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 hover:text-brand-navy"
                >
                  <Mail size={17} className="shrink-0 text-brand-red" />
                  <span className="break-all">Email Us: {email}</span>
                </a>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 hover:text-brand-navy"
                >
                  <Phone size={17} className="shrink-0 text-brand-red" />
                  <span>Contact Us: {phone}</span>
                </Link>

                <div className="flex items-center gap-4 pt-1 text-brand-navy">
                  <SocialLinks mobile />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
