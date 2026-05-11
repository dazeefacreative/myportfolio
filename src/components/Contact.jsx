
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";

import { services } from "./ServiceCard";

const WebDesign = services[0].icon;
const WebDev = services[1].icon;
const GraphicsDesign = services[2].icon;

const contactMethods = [
  {
    icon: "line-md:phone-call-filled",
    iconHover: "line-md:phone-call-filled-loop",
    label: "Call or WhatsApp",
    value: "+234 708 281 6283",
    href: "tel:+2347082816283",
  },
  {
    icon: "line-md:email-alt-filled",
    label: "Send an email",
    value: "hire@dazeefa.com",
    href: "mailto:hire@dazeefa.com?subject=New%20Project%20Request",
  },
  {
    icon: "line-md:map-marker-multiple-alt-filled",
    iconHover: "line-md:map-marker-multiple-alt-filled-loop",
    label: "Location",
    value: "Nigeria, Available Remotely",
    href: "https://maps.app.goo.gl/STd7muctp6vwyqe3A",
    external: true,
  },
];

export default function Contact() {
  const [openOptions, setOpenOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noService, setNoService] = useState("");

  const [botControl, setBotControl] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientProject, setClientProject] = useState("");
  const [message, setMessage] = useState({ error: "", success: "" });

  const clearField = () => {
    setSelectedService(null);
    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setClientProject("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ error: "", success: "" });

    if (botControl.length > 1) {
      setLoading(false);
      return;
    }

    if (!selectedService) {
      setNoService("Please select a service first.");
      setLoading(false);
      return;
    }

    fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-portfolio-contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        project: clientProject,
        service: selectedService,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          clearField();
          setMessage({ success: "Message sent! I'll get back to you within 24 hours." });
        } else {
          setMessage({ error: "Unable to reach the server. Please try again or email hire@dazeefa.com directly." });
        }
      })
      .catch(() => {
        setMessage({ error: "An error occurred. Please email hire@dazeefa.com directly." });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenOptions(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <section id="contact" className="bg-veryDark" aria-label="Contact Dazeefa">
      <div className="w-full max-w-4xl mx-auto gap-y-10 gap-2 lg:gap-y-16 px-6 py-16">

        {/* Heading */}
        <div className="mb-10">
          <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-1">Get in touch</span>
          <h2 className="text-3xl lg:text-4xl mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm opacity-60 mt-3 max-w-lg leading-relaxed">
            Tell me about your project and I'll get back to you within 24 hours. No commitment, no pressure, just a conversation about how I can help.
          </p>
        </div>

        {/* Quick contact methods */}
        <div className="flex flex-wrap items-start gap-4 mb-4">
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 p-3 border border-gray-700 hover:border-primary transition-colors duration-200"
              aria-label={`${method.label}: ${method.value}`}
            >
              <div className="flex-shrink-0">
                <Icon icon={method.icon} className="w-5 h-5 group-hover:hidden" aria-hidden="true" />
                {method.iconHover && (
                  <Icon icon={method.iconHover} className="hidden w-5 h-5 group-hover:block" aria-hidden="true" />
                )}
                {!method.iconHover && (
                  <Icon icon={method.icon} className="hidden w-5 h-5 group-hover:block" aria-hidden="true" />
                )}
              </div>
              <div>
                <p className="text-xs opacity-50">{method.label}</p>
                <p className="text-sm font-medium">{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp quick CTA */}
        <a
          href="https://wa.me/2347082816283?text=Hi%20Dazeefa%2C%20I%27d%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-10 text-sm text-secondary hover:underline underline-offset-4 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <Icon icon="logos:whatsapp-icon" className="size-5" aria-hidden="true" />
          Prefer a quick chat? Message me on WhatsApp →
        </a>

        <div className="w-full bg-gray-700 h-[0.5px] my-10" />

        {/* Form */}
        <div className="w-full">
          <span className="inline-block text-xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Or fill out the form below
          </span>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6" noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              onChange={(e) => setBotControl(e.target.value)}
              value={botControl}
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />

            {/* Service dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-sm after:content-['*'] after:text-red-500 after:ml-1" id="service-label">
                What do you need help with?
              </label>
              <div ref={dropdownRef} className="relative">
                <div
                  role="combobox"
                  aria-expanded={openOptions}
                  aria-labelledby="service-label"
                  aria-haspopup="listbox"
                  onClick={() => setOpenOptions(!openOptions)}
                  className={`text-sm bg-dark w-full p-4 pl-12 cursor-pointer ${
                    selectedService === null ? "text-gray-400" : "text-gray-300"
                  }`}
                >
                  {selectedService || "Select a service"}
                </div>

                {openOptions && (
                  <ul
                    role="listbox"
                    aria-labelledby="service-label"
                    className="absolute top-14 left-0 bg-gray-700 w-full text-sm text-gray-300 list-none z-10 py-1"
                  >
                    <li
                      role="option"
                      aria-selected={selectedService === "Build my website (design + development)"}
                      onClick={() => { setSelectedService("Build my website (design + development)"); setOpenOptions(false); setNoService(""); }}
                      className="flex items-center gap-3 hover:bg-secondary hover:text-dark py-2 px-4 cursor-pointer transition-colors"
                    >
                      <WebDev className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      Build my website (design + development)
                    </li>
                    <li
                      role="option"
                      aria-selected={selectedService === "Web Design (UI/UX)"}
                      onClick={() => { setSelectedService("Web Design (UI/UX)"); setOpenOptions(false); setNoService(""); }}
                      className="flex items-center gap-3 hover:bg-secondary hover:text-dark py-2 px-4 cursor-pointer transition-colors"
                    >
                      <WebDesign className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      Web Design (UI/UX)
                    </li>
                    <li
                      role="option"
                      aria-selected={selectedService === "Web Development only"}
                      onClick={() => { setSelectedService("Web Development only"); setOpenOptions(false); setNoService(""); }}
                      className="flex items-center gap-3 hover:bg-secondary hover:text-dark py-2 px-4 cursor-pointer transition-colors"
                    >
                      <WebDev className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      Web Development only
                    </li>
                    <li
                      role="option"
                      aria-selected={selectedService === "Graphics / Social Media Design"}
                      onClick={() => { setSelectedService("Graphics / Social Media Design"); setOpenOptions(false); setNoService(""); }}
                      className="flex items-center gap-3 hover:bg-secondary hover:text-dark py-2 px-4 cursor-pointer transition-colors"
                    >
                      <GraphicsDesign className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      Graphics / Social Media Design
                    </li>
                  </ul>
                )}

                <Icon
                  onClick={() => setOpenOptions(!openOptions)}
                  icon={openOptions ? "material-symbols:keyboard-arrow-up" : "material-symbols:keyboard-arrow-down"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  aria-hidden="true"
                />
                <Icon icon="mdi:art" className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              </div>
              {!selectedService && noService && (
                <span className="text-xs text-red-400" role="alert">{noService}</span>
              )}
            </div>

            {/* Full name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="client-name" className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="client-name"
                  type="text"
                  name="name"
                  onChange={(e) => setClientName(e.target.value)}
                  value={clientName}
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                  className="text-sm bg-dark w-full text-gray-300 p-4 pl-12 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)] [&:-webkit-autofill]:[-webkit-text-fill-color:white] invalid:border-red-500 focus:border-primary focus:outline focus:outline-primary focus:invalid:border-red-500 focus:invalid:outline-red-500"
                />
                <Icon icon="mdi:person" className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="client-email" className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="client-email"
                  type="email"
                  name="email"
                  onChange={(e) => setClientEmail(e.target.value)}
                  value={clientEmail}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="text-sm bg-dark w-full text-gray-300 p-4 pl-12 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)] [&:-webkit-autofill]:[-webkit-text-fill-color:white] invalid:border-red-500 focus:border-primary focus:outline focus:outline-primary focus:invalid:border-red-500 focus:invalid:outline-red-500"
                />
                <Icon icon="mdi:email" className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="client-phone" className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                Phone / WhatsApp
              </label>
              <div className="relative">
                <input
                  id="client-phone"
                  type="tel"
                  name="telephone"
                  onChange={(e) => setClientPhone(e.target.value)}
                  value={clientPhone}
                  placeholder="+1 234 567 8900"
                  required
                  autoComplete="tel"
                  className="text-sm bg-dark w-full text-gray-300 p-4 pl-12 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)] [&:-webkit-autofill]:[-webkit-text-fill-color:white] invalid:border-red-500 focus:border-primary focus:outline focus:outline-primary focus:invalid:border-red-500 focus:invalid:outline-red-500"
                />
                <Icon icon="mdi:phone" className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              </div>
            </div>

            {/* Project details */}
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label htmlFor="client-project" className="text-sm">
                Tell me about your project
              </label>
              <textarea
                id="client-project"
                name="description"
                onChange={(e) => setClientProject(e.target.value)}
                value={clientProject}
                placeholder="Brief overview: what are you building, what's the goal, do you have a timeline or budget in mind?"
                rows={5}
                className="text-sm bg-dark w-full focus:border-primary focus:outline focus:outline-primary text-gray-300 p-4 resize-none"
              />
            </div>

            {/* Feedback messages */}
            <div>
              {message.error && (
                <p className="text-sm text-red-400" role="alert">{message.error}</p>
              )}
              {message.success && (
                <p className="text-sm text-secondary" role="status">{message.success}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full items-center text-veryDark font-bold justify-center tracking-tight bg-gradient-to-r from-primary to-secondary p-3 disabled:cursor-not-allowed disabled:opacity-50 flex disabled:bg-gradient-to-r disabled:from-gray-500 disabled:text-white disabled:to-gray-700 hover:scale-105 transition-transform duration-300 text-sm"
              aria-label={loading ? "Submitting your message" : "Submit your project enquiry"}
            >
              {loading ? "Sending…" : "Send Enquiry"}
              <Icon
                icon={loading ? "svg-spinners:90-ring" : "tabler:arrow-badge-right"}
                className="inline-block ml-2 w-5 h-5"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
