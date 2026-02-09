import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { GraduationCap, Users2, HeartHandshake, Check } from "lucide-react";

const categories = [
    {
        title: "Vocational Training",
        icon: GraduationCap,
        color: "from-brand to-brand-soft",
        programs: [
            "Vocational training to build confidence and earning capacity",
            "Skill development programs tailored to individual abilities"
        ]
    },
    {
        title: "Community Integration",
        icon: Users2,
        color: "from-brand-soft to-accent-yellow",
        programs: [
            "Awareness initiatives to promote respect and inclusion",
            "Encouraging community participation",
            "Supporting reintegration into families as earning members"
        ]
    },
    {
        title: "Holistic Development",
        icon: HeartHandshake,
        color: "from-accent-yellow to-accent-red",
        programs: [
            "Programmes to improve coordination, ability and flexibility",
            "Guiding parents and caregivers",
            "Building independence and self-reliance"
        ]
    }
];

export default function Rehabilitation() {
    return (
        <section id="rehabilitation" className="py-16 md:py-20 bg-surface relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="06" label="Rehabilitation" className="justify-center" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
                        Rehabilitation & Integration
                    </h2>
                    <p className="text-lg text-text-muted max-w-3xl mx-auto">
                        We focus on holistic development to ensure our beneficiaries can lead dignified, independent lives
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            variants={fadeInUp}
                            className="relative group"
                        >
                            {/* Category Card */}
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-brand-soft/20">
                                {/* Header with Gradient */}
                                <div className={`bg-gradient-to-br ${category.color} p-6 text-white relative overflow-hidden`}>
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 opacity-10">
                                        <category.icon className="w-32 h-32" strokeWidth={1} />
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl inline-block">
                                            <category.icon className="w-8 h-8" strokeWidth={2} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold relative">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Programs List */}
                                <div className="p-6 space-y-4">
                                    {category.programs.map((program, progIndex) => (
                                        <div key={progIndex} className="flex items-start gap-3 group/item">
                                            <div className="shrink-0 mt-1">
                                                <div className="bg-accent-red/10 p-1.5 rounded-full">
                                                    <Check className="w-4 h-4 text-accent-red" />
                                                </div>
                                            </div>
                                            <p className="text-text-main leading-relaxed group-hover/item:text-brand transition-colors">
                                                {program}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`h-1 bg-gradient-to-r ${category.color}`} />
                            </div>

                            {/* Connecting Arrow (Desktop) */}
                            {catIndex < categories.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                                    <div className="w-8 h-8 bg-brand-soft/20 rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-brand-soft border-b-4 border-b-transparent" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg border-2 border-brand-soft/30">
                        <p className="text-brand font-semibold">
                            <span className="text-accent-red">♥</span> Transforming lives through comprehensive care and support
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
