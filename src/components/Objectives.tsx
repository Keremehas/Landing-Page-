import { motion } from "framer-motion";
import { staggerContainer, slideInLeft } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { Target, CheckCircle2 } from "lucide-react";

const objectives = [
    "To provide comprehensive care and permanent shelter",
    "To train women with disabilities in appropriate vocational skills",
    "To counsel and create awareness among families and communities",
    "To rehabilitate and reintegrate beneficiaries into society with dignity",
];

export default function Objectives() {
    return (
        <section id="objectives" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-soft/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="04" label="Aims & Objectives" className="justify-center" />

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand mb-4">
                        Aims & Objectives
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Strategic goals driving our mission forward
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto space-y-6"
                >
                    {objectives.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={slideInLeft}
                            className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Number Circle */}
                            <div className="shrink-0 relative">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-soft flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-white">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                {/* Connecting Line */}
                                {index < objectives.length - 1 && (
                                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-brand-soft/30" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-accent-red hover:shadow-xl transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand/10 p-3 rounded-full shrink-0 group-hover:bg-brand/20 transition-colors">
                                        <Target className="w-6 h-6 text-brand" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl font-medium text-text-main leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                    <CheckCircle2 className="w-6 h-6 text-accent-red shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Progress Indicator */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-text-muted">Our Commitment</span>
                        <span className="text-sm font-bold text-brand">100%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-brand via-brand-soft to-accent-yellow rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
