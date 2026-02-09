import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionLabel from "@/components/ui/SectionLabel";
import { Users, Heart, Award, TrendingUp, Home, Sparkles } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "30+",
        label: "Beneficiaries",
        description: "Women with different disabilities finding a home here",
        color: "text-brand"
    },
    {
        icon: Heart,
        value: "100%",
        label: "Holistic Care",
        description: "Catering to various physical and mental challenges",
        color: "text-accent-red"
    },
    {
        icon: Award,
        value: "Expert",
        label: "Dedicated Staff",
        description: "Trained professionals committed to compassionate service",
        color: "text-accent-yellow"
    },
    {
        icon: TrendingUp,
        value: "28+",
        label: "Years of Service",
        description: "Continuous commitment since 1996",
        color: "text-brand-soft"
    },
    {
        icon: Home,
        value: "Safe",
        label: "Permanent Shelter",
        description: "Providing a secure and loving environment",
        color: "text-brand-dark"
    },
    {
        icon: Sparkles,
        value: "Dignity",
        label: "Empowerment",
        description: "Building independence and self-reliance",
        color: "text-accent-yellow"
    }
];

export default function Impact() {
    return (
        <section id="impact" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background Pattern - Smaller on mobile */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 md:top-20 md:left-20 w-24 h-24 md:w-32 md:h-32 border border-brand md:border-2 rounded-full" />
                <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-48 md:h-48 border border-accent-yellow md:border-2 rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="05" label="Our Impact" className="justify-center" />

                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand mb-3 md:mb-4">Our Impact</h2>
                    <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-2xl mx-auto">
                        Making a tangible difference in the lives of women who need it most
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-none shadow-lg bg-surface group overflow-hidden relative">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <CardHeader className="flex flex-col items-center pb-3 md:pb-4 relative">
                                    {/* Icon Container - Smaller on mobile */}
                                    <div className="relative mb-3 md:mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-brand-soft/20 rounded-full blur-lg md:blur-xl" />
                                        <div className={`relative bg-white p-3 md:p-4 rounded-full shadow-md ${stat.color}`}>
                                            <stat.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Value - Responsive sizing */}
                                    <CardTitle
                                        className="font-bold bg-gradient-to-br from-brand to-brand-soft bg-clip-text text-transparent mb-1.5 md:mb-2"
                                        style={{ fontSize: 'clamp(2.5rem, 5vw + 1rem, 3rem)' }}
                                    >
                                        {stat.value}
                                    </CardTitle>

                                    {/* Label */}
                                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-brand-dark">
                                        {stat.label}
                                    </h3>
                                </CardHeader>

                                <CardContent className="relative px-4 md:px-6">
                                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                                        {stat.description}
                                    </p>
                                </CardContent>

                                {/* Bottom Accent */}
                                <div className={`h-0.5 md:h-1 bg-gradient-to-r from-transparent via-current to-transparent ${stat.color} opacity-50`} />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 md:mt-12 lg:mt-16 text-center max-w-3xl mx-auto"
                >
                    <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-soft p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl">
                        <p
                            className="font-medium text-white leading-relaxed"
                            style={{ fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)' }}
                        >
                            Every number represents a life transformed, a dream nurtured, and a future brightened.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
