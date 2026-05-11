import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const strengths = [
  { icon: "tabler:code", label: "11+ Years Building" },
  { icon: "tabler:world", label: "Remote-First" },
  { icon: "tabler:clock-hour-4", label: "Fast Turnaround" },
  { icon: "tabler:message-circle-check", label: "Clear Communication" },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start with a conversation about your goals, timeline, and budget, no commitment required. I ask the right questions so I can give you the right solution.",
  },
  {
    step: "02",
    title: "Design & Strategy",
    desc: "I map out the architecture and design in Figma so you see exactly what you're getting before a single line of code is written. You approve, we build.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    desc: "I build your project with regular progress updates and feedback loops. You're never left wondering what's happening, clear milestones, zero surprises.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We launch together. I stay available post-launch to ensure everything runs smoothly and make any refinements needed to hit your goals.",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About Dazeefa">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-1">About Me</span>
            <h2 className="text-3xl lg:text-4xl mt-4 mb-6 leading-tight">
              I'm not just a developer.<br />
              I'm a business partner.
            </h2>
            <p className="opacity-70 text-sm leading-relaxed mb-5">
              I've been in the digital space since 2014, long enough to know that great code without great design is wasted, and great design without great execution is just a dream. I bridge that gap.
            </p>
            <p className="opacity-70 text-sm leading-relaxed mb-5">
              My work spans branding, UI/UX design, full-stack web development, and Webflow, for founders, startups, and creative professionals across Nigeria and internationally. Every project I take on gets my full attention, honest communication, and the same quality I'd expect if I were the client.
            </p>
            <p className="opacity-70 text-sm leading-relaxed mb-10">
              I think like a designer, build like a senior engineer, and communicate like a trusted business partner. If you need someone who understands both the technical and commercial side of the web, that's exactly what I offer.
            </p>

            {/* Strengths grid */}
            <div className="grid grid-cols-2 gap-3">
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-veryDark rounded-lg"
                >
                  <Icon icon={s.icon} className="text-secondary size-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-veryDark rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-8">What working with me looks like</h3>
            <div className="space-y-7">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <span className="text-secondary font-heading text-xl flex-shrink-0 leading-none mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
