import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Home, GraduationCap, TrendingUp, Sparkles } from "lucide-react";

const missions = [
    {
        icon: Home,
        title: "Safe Shelter",
        description: "Providing a secure and permanent home for women with disabilities",
        color: "from-brand to-brand-soft",
    },
    {
        icon: GraduationCap,
        title: "Vocational Training",
        description: "Empowering through skill development and rehabilitation programs",
        color: "from-accent-yellow to-brand-soft",
    },
    {
        icon: TrendingUp,
        title: "Independence",
        description: "Promoting self-reliance and sustainable livelihood opportunities",
        color: "from-brand-soft to-accent-yellow",
    },
    {
        icon: Sparkles,
        title: "Compassionate Care",
        description: "Extending Christ's love through dedicated service and support",
        color: "from-accent-red to-brand",
    },
];

export default function Mission() {
    return (
        <section id="mission" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="03" label="Our Mission" className="justify-center" />

                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand mb-3 md:mb-4">Our Mission</h2>
                    <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-2xl mx-auto">
                        Four pillars that guide our commitment to transforming lives
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Desktop: Grid with connecting lines */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-soft/30 to-transparent hidden lg:block" />

                        {missions.map((mission, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-brand to-brand-soft rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg z-10">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="bg-surface p-5 md:p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-brand-soft/20 relative overflow-hidden group-hover:border-brand-soft/40">
                                    {/* Gradient Bottom Border on Hover */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mission.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                    {/* Icon */}
                                    <div className={`bg-gradient-to-br ${mission.color} p-3 md:p-4 rounded-xl inline-block mb-4 md:mb-6 text-white`}>
                                        <mission.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">
                                        {mission.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                                        {mission.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile: Stack */}
                    <div className="md:hidden space-y-4">
                        {missions.map((mission, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-surface p-5 rounded-xl shadow-md border border-brand-soft/20 relative overflow-hidden">
                                    {/* Number Badge */}
                                    <div className="absolute top-3 right-3 w-7 h-7 bg-gradient-to-br from-brand to-brand-soft rounded-full flex items-center justify-center text-white font-bold text-xs">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`bg-gradient-to-br ${mission.color} p-3 rounded-lg text-white shrink-0`}>
                                            <mission.icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-0.5">
                                            <h3 className="text-base font-bold text-brand-dark mb-1.5">
                                                {mission.title}
                                            </h3>
                                            <p className="text-sm text-text-muted leading-relaxed">
                                                {mission.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${mission.color}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
