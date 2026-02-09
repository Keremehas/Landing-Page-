import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { Home, GraduationCap, TrendingUp, Heart } from "lucide-react";

const missionItems = [
    {
        text: "To provide safe and permanent shelter",
        icon: Home,
        color: "text-brand"
    },
    {
        text: "To offer rehabilitation through vocational training",
        icon: GraduationCap,
        color: "text-accent-yellow"
    },
    {
        text: "To promote independence and self-reliance",
        icon: TrendingUp,
        color: "text-brand-soft"
    },
    {
        text: "To extend Christ's love and compassionate service to all inmates",
        icon: Heart,
        color: "text-accent-red"
    },
];

export default function Mission() {
    return (
        <section id="mission" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="03" label="Our Mission" className="justify-center" />

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand mb-4">Our Mission</h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Four pillars that guide our commitment to transforming lives
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                >
                    {missionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-surface p-8 rounded-2xl shadow-md border border-brand-soft/30 hover:shadow-xl hover:border-brand-soft transition-all duration-300 h-full">
                                {/* Number Badge */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-accent-yellow font-bold text-lg">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className={`mb-6 ${item.color}`}>
                                    <item.icon className="w-12 h-12" strokeWidth={1.5} />
                                </div>

                                {/* Text */}
                                <p className="text-lg font-medium text-text-main leading-relaxed">
                                    {item.text}
                                </p>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand-soft to-accent-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Connecting Lines (Desktop Only) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl pointer-events-none">
                    <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
                        <line x1="200" y1="200" x2="600" y2="200" stroke="currentColor" strokeWidth="2" className="text-brand" strokeDasharray="5,5" />
                        <line x1="400" y1="100" x2="400" y2="300" stroke="currentColor" strokeWidth="2" className="text-brand" strokeDasharray="5,5" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
