import { motion } from "framer-motion";
import { Icon } from "@iconify/react"
import { useState } from "react";


import CreativeDesign from "../assets/images/vector-alt.svg?react";
import Coding from "../assets/images/code-window.svg?react";
import GraphicsDesign from "../assets/images/customize-computer.svg?react"

export const services = [
  {
    title: "UI/UX Creative Design",
    icon: CreativeDesign,
    delay: 0.2
  },
    {
    title: "Full Stack Development",
    icon: Coding,
    delay: 0.4
  },
    {
    title: "Social Media Design",
    icon: GraphicsDesign,
    delay: 0.6
  }
]

export default function ServiceCard() {

  const [selectedService, setSelectedService] = useState(null)
  const serviceDetails = [
    "I design engaging, user-friendly interfaces aligned with your brand standing out from competitors. Through prototyping and user testing, I ensure visually appealing, intuitive, and functional experiences that delight your audience.",
    
    "I build scalable web applications with robust front-end and back-end solutions. Custom APIs, complex features, and performance optimization ensure high-quality, maintainable, and functional products tailored to your needs.",
    
    "I create striking social media designs that elevate brand visibility. Cohesive visuals, engaging layouts, and platform-specific strategies help connect with your audience and strengthen your online presence effectively."
  ]

  const handleServiceClick = (index) => {
    if (selectedService === null){
      setSelectedService(index)
    } else {
      setSelectedService(null)
    }
  }

  return (
    <>
    {services.map((service, index)=>(
    
    <motion.div
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{ duration: 0.5, delay: service.delay, ease:"easeIn"}}

    drag
    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} // allow free drag on X
    dragElastic={0.7} // elasticity when dragging
    whileDrag={{ scale: 1.05, cursor: "grabbing" }} // slightly enlarge while dragging
    whileDragEnd={{ type: "spring", stiffness: 500, damping: 30 }}
    viewport={{once: true}}
    layout // enables smooth layout adjustments for other cards

    key={index}
    className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-between py-12 px-8 gap-8 cursor-grab bg-dark group hover:border-none active:border-none active:bg-gradient-to-b from-primary to-secondary hover:bg-gradient-to-b transition-colors duration-400"
    > 

      {selectedService !== index && 
        <service.icon className="w-12 h-12 group-active:text-dark group-hover:text-dark transition-colors duration-200" />
      }
      {selectedService !== index && 
        <h3 className="text-2xl max-w-[150px] uppercase group-active:text-dark group-hover:text-dark transition-colors duration-200">
          {service.title}
        </h3>
      }

      {selectedService === index &&
        <p className="text-sm group-active:text-dark group-hover:text-dark leading-[140%] transition-colors duration-200">{serviceDetails[index]}</p>
      }
      <button 
      value={service.title}
      onClick={() => handleServiceClick(index)}
      className="flex gap-2 items-center hover:gap-4 group-active:text-dark group-hover:text-dark transition-colors duration-200">
        {selectedService === index ? "Close" : "Read More"} <Icon icon={selectedService === index ? "tabler:letter-x" : "tabler:arrow-narrow-right-dashed"} />
      </button>

    </motion.div>
    
    ))}
  </>
  );
}
