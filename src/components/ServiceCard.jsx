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

  const [selectedService, setSelectedService] = useState("")

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
    layout // enables smooth layout adjustments for other cards

    key={index}
    className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col uppercase justify-between py-12 px-8 gap-8 cursor-grab bg-dark group hover:border-none active:border-none active:bg-gradient-to-b from-primary to-secondary hover:bg-gradient-to-b transition-colors duration-400"
    > 

      <service.icon className="w-12 h-12 group-active:text-dark group-hover:text-dark transition-colors duration-200" />
      <h3 className="text-2xl max-w-[150px] group-active:text-dark group-hover:text-dark transition-colors duration-200">
        {service.title}
      </h3>
      <button 
      value={service.title}
      onClick={(e)=> setSelectedService(e.target.value)}
      className="flex gap-4 items-center hover:gap-6 group-active:text-dark group-hover:text-dark transition-colors duration-200">
        Read More <Icon icon={"tabler:arrow-narrow-right-dashed"} />
      </button>

    </motion.div>
    
    ))}
  </>
  );
}
