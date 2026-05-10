import { motion } from "framer-motion";

import Counter from "./count";
import ClientCard from "./ClientCard";

const clients = [
  {
    id: 1,
    name: "Oladipupo Soidiq",
    title: "CEO, DJ OP DOT ENT",
    report: "I'm extremely impressed with the final product. The website is visually stunning, professionally designed, and loads exceptionally fast. He delivered exactly what I envisioned — and more. Highly recommended!"
  },
  {
    id: 2,
    name: "Hope Odabi",
    title: "CEO, Dabi Girl Media",
    report: "My book design turned out so beautifully. I absolutely love what you did, and after printing it looks even more stunning. You handled everything perfectly — no back-and-forth, no supervision needed."
  },
  {
    id: 3,
    name: "Mansa Jabulani",
    title: "CEO, Music Distro",
    report: "I love everything about the website — it's very neat and fast loading. The autoplay video on the homepage really impressed me. He's very creative. I absolutely love the result."
  },
  {
    id: 4,
    name: "Chichi Morris",
    title: "Founder, Mumbossador",
    report: "My website turned out beautifully. The payment integration, user subscription signup, and admin dashboard were all seamlessly implemented. The quality far exceeded my expectations."
  },
  {
    id: 5,
    name: "Adekunle Jelil",
    title: "Co-Founder, ShowsNG",
    report: "He really did a great job. We are very pleased with how he handled our client's website — the quality was excellent and delivery was remarkably fast. I highly recommend Dazeefa."
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience and client testimonials">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 w-full max-w-6xl mx-auto gap-y-10 gap-2 lg:gap-y-16 px-6 py-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-4 justify-center items-center md:items-start flex flex-col">

          <motion.p
            initial={{ opacity: 0, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm opacity-80 text-center sm:text-start max-w-lg leading-relaxed"
          >
            Since 2014, I've partnered with founders, brands, and creative professionals across Africa and internationally — delivering design and development work that drives real business results.
          </motion.p>

          <div className="flex w-full items-center opacity-50 gap-4 justify-center sm:justify-start mt-6 mb-4">
            <div className="md:hidden w-[45%] h-[0.5px] bg-white" />
            <span className="text-xs tracking-[3px] whitespace-nowrap">Track Record</span>
            <div className="w-[45%] md:w-full h-[0.5px] bg-white" />
          </div>

          <div className="flex max-w-sm gap-6 items-center justify-center sm:justify-start">
            <div
              title="Years spanning graphics design, web design, full-stack development, Webflow, and more."
              className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
            >
              <Counter
                end={new Date().getFullYear() - 2014}
                duration={1}
                className="text-3xl font-heading bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-[12px] italic sm:text-xs leading-[100%]"
              >
                Years of experience.
              </motion.p>
            </div>

            <div
              title="Projects completed across design, web development, Webflow, and more."
              className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
            >
              <Counter
                end={250}
                duration={1.2}
                className="text-3xl font-heading bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-[12px] italic sm:text-xs leading-[100%]"
              >
                Completed projects.
              </motion.p>
            </div>

            <div
              title="Satisfied clients from design, web development, Webflow, and more."
              className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
            >
              <Counter
                end={200}
                duration={1.2}
                className="text-3xl font-heading bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-[12px] italic sm:text-xs leading-[100%]"
              >
                Satisfied clients.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block lg:col-span-1" />

        <div className="col-span-1 md:col-span-3 lg:col-span-7 items-center">
          <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-1">Client Testimonials</span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "anticipate" }}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)]"
            role="region"
            aria-label="Scrollable client testimonials"
          >
            <motion.div
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-6 px-16 py-8 w-max"
            >
              {clients.map((client) => (
                <div key={client.id} className="snap-start shrink-0">
                  <ClientCard client={client} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
