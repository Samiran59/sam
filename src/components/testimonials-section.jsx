import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Working with Samiran was an absolute pleasure. His technical expertise and attention to detail transformed our vision into a stunning, high-performing web application.",
    image: "",
    name: "Niloy jyoti",
    role: "CEO, Vedavayu.",
  },
  {
    text: "Samiran's full-stack development skills are exceptional. He delivered our e-commerce platform ahead of schedule with clean, maintainable code.",
    image: "",
    name: "Rohan",
    role: "CTO, Bloomora",
  },
  {
    text: "The UI/UX design Samiran created for our app is both beautiful and intuitive. Our user engagement increased by 40% after the redesign.",
    image: "",
    name: "Imran khan",
    role: "Product Manager, Bloomora",
  },
  {
    text: "Samiran's problem-solving abilities are outstanding. He tackled complex technical challenges with creative solutions that exceeded our expectations.",
    image: "",
    name: "David",
    role: "Lead Developer, Explore travels",
  },
  {
    text: "Professional, reliable, and incredibly talented. Samiran delivered a scalable web application that handles our growing user base flawlessly.",
    image: "",
    name: "Lisa Park",
    role: "Founder, Pinnacle",
  },
  {
    text: "John's expertise in modern web technologies helped us modernize our legacy system. The performance improvements were remarkable.",
    image: "",
    name: "Robert Kim",
    role: "IT Director, Enterprise Solutions",
  },
  {
    text: "The mobile-responsive design John created works perfectly across all devices. Our mobile traffic conversion rate doubled.",
    image: "",
    name: "Amanda Foster",
    role: "Marketing Director, RetailPlus",
  },
  {
    text: "The UI/UX design Samiran created for our app is both beautiful and intuitive. Our user engagement increased by 40% after the redesign.",
    image: "",
    name: "Imran khan",
    role: "Product Manager, Bloomora",
  },
  {
    text: "Samiran's problem-solving abilities are outstanding. He tackled complex technical challenges with creative solutions that exceeded our expectations.",
    image: "",
    name: "David",
    role: "Lead Developer, Explore travels",
  },
  {
    text: "Professional, reliable, and incredibly talented. Samiran delivered a scalable web application that handles our growing user base flawlessly.",
    image: "",
    name: "Lisa Park",
    role: "Founder, Pinnacle",
  },

];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-20 dark:bg-black-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_70%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;