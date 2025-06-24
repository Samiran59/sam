import React from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { LogoCarousel } from "@/components/ui/logo-carousel"

// Import the logos as PNG files
import bloomoraImg from "../assets/logos/bloomora.png"
import exploreImg from "../assets/logos/explore.png"
import pinnacleImg from "../assets/logos/pinnacle.png"
import vedavayuImg from "../assets/logos/vedavayu.png"

// Logo components with size adjustment for Bloomora and Explore
function BloomoraLogo(props) {
    return (
        <img
            src={bloomoraImg}
            alt="Bloomora"
            style={{ width: "225%", height: "225%", objectFit: "contain" }}
            {...props}
        />
    )
}

function ExploreLogo(props) {
    return (
        <img
            src={exploreImg}
            alt="Exploreast Travels"
            style={{ width: "225%", height: "225%", objectFit: "contain" }}
            {...props}
        />
    )
}

function PinnacleLogo(props) {
    return <img src={pinnacleImg} alt="Pinnacle Website Tools" {...props} />
}

function VedavayuLogo(props) {
    return <img src={vedavayuImg} alt="Vedavāyu" {...props} />
}

const techLogos = [
    { name: "Bloomora", id: 1, img: BloomoraLogo },
    { name: "Exploreast Travels", id: 2, img: ExploreLogo },
    { name: "Pinnacle Website Tools", id: 3, img: PinnacleLogo },
    { name: "Vedavāyu", id: 4, img: VedavayuLogo },
]

const Logos = () => {
    return (
        <section className="py-20 bg-black-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="space-y-8">
                        <div className="text-center">
                            <GradientHeading variant="secondary" size="sm" font="mono">
                                OUR CLIENTS
                            </GradientHeading>
                            <GradientHeading size="lg" className="mt-4" font="mono">
                                Trusted by many clients.
                            </GradientHeading>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        >
                            Our clients are our top priority, and we are committed to providing them with the highest level of service.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <LogoCarousel columnCount={4} logos={techLogos} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Logos