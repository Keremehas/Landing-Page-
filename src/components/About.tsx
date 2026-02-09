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
        <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <SectionLabel number="01" label="About Us" className="justify-center" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                        {/* Logo and Timeline */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <div className="relative mb-8">
                                <div className="absolute -inset-4 bg-brand-soft/10 rounded-2xl blur-xl" />
                                <img
                                    src="/logo.png"
                                    alt="KEREMEHAS Logo"
                                    className="relative h-32 w-auto object-contain"
                                />
                            </div>

                            {/* Timeline Badge */}
                            <div className="inline-flex items-center gap-3 bg-accent-yellow/10 border-2 border-accent-yellow/30 rounded-full px-6 py-3 mb-6">
                                <Calendar className="w-5 h-5 text-brand" />
                                <div className="text-left">
                                    <p className="text-xs font-semibold text-text-muted uppercase">Since</p>
                                    <p className="text-2xl font-bold text-brand">1996</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                {highlights.slice(1).map((item, index) => (
                                    <div key={index} className="bg-surface p-4 rounded-xl border border-brand-soft/20">
                                        <item.icon className="w-6 h-6 text-brand mb-2" />
                                        <p className="text-xs text-text-muted mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-brand-dark">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-brand leading-tight">
                                About Keremehas
                            </h2>

                            <div className="space-y-5 text-lg text-text-main leading-relaxed">
                                <p>
                                    Keremehas is a social service initiative of the <span className="font-semibold text-brand">Church of South India, Coimbatore Diocese</span>, established in 1996 by the Women's Fellowship.
                                </p>
                                <p>
                                    It is a residential rehabilitation centre dedicated to the care, protection,
                                    and empowerment of mentally and physically challenged adult women.
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="relative pl-8 py-6 border-l-4 border-accent-red bg-surface/50 rounded-r-xl">
                                <div className="absolute -left-3 top-4 text-6xl text-accent-red/20 font-serif leading-none">"</div>
                                <p className="text-xl font-medium text-brand italic leading-relaxed">
                                    Keremehas works for dignity, inclusion, and holistic development of
                                    economically and socially underprivileged women.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
