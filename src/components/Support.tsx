import { motion } from "framer-motion";
import { fadeInUpGentle } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/ui/SectionLabel";
import { HeartHandshake, DollarSign, Gift, Users } from "lucide-react";

const contributionMethods = [
    {
        icon: DollarSign,
        title: "Financial Support",
        description: "Your monetary contributions help us provide essential care and services",
        color: "from-brand to-brand-soft"
    },
    {
        icon: Gift,
        title: "In-Kind Donations",
        description: "Contribute materials, supplies, or resources that benefit our beneficiaries",
        color: "from-brand-soft to-accent-yellow"
    },
    {
        icon: Users,
        title: "Sponsor a Beneficiary",
        description: "Make a direct impact by sponsoring the care of an individual woman",
        color: "from-accent-yellow to-accent-red"
    }
];

export default function Support() {
    return (
        <section id="support" className="section-spacing bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="07" label="Support Us" className="justify-center" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
                        Support Our Mission
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Join hands with us in transforming lives and bringing hope to those who need it most
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main CTA Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUpGentle}
                        className="bg-gradient-to-br from-brand-dark via-brand to-brand-soft p-10 md:p-16 rounded-3xl shadow-2xl mb-12 relative overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-yellow/10 rounded-full blur-2xl" />

                        <div className="relative text-center text-white">
                            <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-accent-yellow" />

                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                "Help them grow. Help them thrive."
                            </h3>

                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                                We invite individuals, institutions, and organizations to join hands with us
                                in this noble cause. Your support can transform lives and bring hope.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-accent-yellow text-brand-dark hover:bg-accent-yellow/90 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full font-bold transition-colors shadow-xl"
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Get in Touch
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold transition-colors"
                                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contribution Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {contributionMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-surface p-8 rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-brand-soft/20 relative overflow-hidden">
                                    {/* Gradient Top Bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`} />

                                    {/* Icon */}
                                    <div className={`bg-gradient-to-br ${method.color} p-4 rounded-xl inline-block mb-4 text-white`}>
                                        <method.icon className="w-8 h-8" strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-bold text-brand-dark mb-3">
                                        {method.title}
                                    </h4>
                                    <p className="text-text-muted leading-relaxed">
                                        {method.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-8 rounded-2xl border-2 border-brand-soft/30 max-w-3xl mx-auto"
                    >
                        <h4 className="text-xl font-bold text-brand mb-4 text-center">
                            Ways to Contribute
                        </h4>
                        <ul className="space-y-3 text-text-main">
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-0.5">
                                    <span className="text-accent-red text-sm font-bold">✓</span>
                                </div>
                                <span>Contributing financially or in kind to support daily operations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-0.5">
                                    <span className="text-accent-red text-sm font-bold">✓</span>
                                </div>
                                <span>Sponsoring a beneficiary to provide personalized care and support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-0.5">
                                    <span className="text-accent-red text-sm font-bold">✓</span>
                                </div>
                                <span>Supporting rehabilitation and welfare programmes through partnerships</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
