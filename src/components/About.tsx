import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { Users, Heart, Award, Calendar } from "lucide-react";

const highlights = [
    { icon: Calendar, label: "Established", value: "1996" },
    { icon: Users, label: "Beneficiaries", value: "30+" },
    { icon: Heart, label: "Care Type", value: "Holistic" },
    { icon: Award, label: "Recognition", value: "CSI Diocese" },
];

export default function About() {
    return (
        <section id="about" className="section-spacing bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-brand-soft/5 rounded-full blur-3xl" />

            <div className="container-standard">
                <div className="max-w-6xl mx-auto">
                    <SectionLabel number="01" label="About Us" className="justify-center" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Logo and Timeline */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex flex-col items-center lg:items-start space-y-6"
                        >
                            <div className="relative">
                                <div className="absolute -inset-3 bg-brand-soft/10 rounded-2xl blur-xl" />
                                <img
                                    src="/logo.png"
                                    alt="KEREMEHAS Logo"
                                    className="relative h-24 md:h-28 w-auto object-contain"
                                />
                            </div>

                            {/* Timeline Badge */}
                            <div className="inline-flex items-center gap-2 md:gap-3 bg-accent-yellow/10 border-2 border-accent-yellow/30 rounded-full px-4 md:px-5 py-2 md:py-2.5">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-brand opacity-90" strokeWidth={1.5} />
                                <div className="text-left">
                                    <p className="text-xs font-semibold text-text-muted uppercase">Since</p>
                                    <p className="text-xl md:text-2xl font-bold text-brand">1996</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm">
                                {highlights.slice(1).map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-surface p-3 md:p-4 rounded-xl border border-brand-soft/20 text-center hover:border-brand-soft/40 transition-colors"
                                    >
                                        <item.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5 text-brand opacity-90" strokeWidth={1.5} />
                                        <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                                        <p className="text-base md:text-lg font-bold text-brand">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="space-y-4 md:space-y-5"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-brand leading-tight text-balance">
                                About Keremehas
                            </h2>

                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-text-main leading-relaxed">
                                <p>
                                    <strong className="text-brand">KEREMEHAS</strong> is a residential rehabilitation
                                    centre dedicated to the care, protection, and empowerment of mentally and
                                    physically challenged adult women.
                                </p>

                                <p>
                                    Established in <strong>1996</strong> by the Women's Fellowship of the
                                    Church of South India, Coimbatore Diocese, we provide a safe haven and
                                    comprehensive support for women who need specialized care.
                                </p>

                                <p>
                                    Our facility offers permanent shelter, vocational training, and holistic
                                    development programs designed to promote independence and dignity.
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="border-l-3 border-accent-red pl-4 md:pl-5 py-2 md:py-3 bg-surface/50 rounded-r-lg">
                                <p className="text-sm md:text-base italic text-text-main leading-relaxed">
                                    "We strive to extend Christ's love through compassionate service,
                                    creating a nurturing environment where every woman can thrive."
                                </p>
                            </div>

                            {/* Administrator Badge */}
                            <div className="inline-flex items-center gap-2 bg-brand/5 px-4 py-2 rounded-full">
                                <Award className="w-4 h-4 text-brand opacity-90" strokeWidth={1.5} />
                                <span className="text-xs md:text-sm font-semibold text-brand">
                                    CSI Coimbatore Diocese Initiative
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
