import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import SectionLabel from "@/components/ui/SectionLabel";
import { Quote } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="py-16 md:py-20 bg-surface relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-64 h-64 border-2 border-brand-soft/20 rounded-full" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="02" label="Our Vision" className="justify-center" />

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand">Our Vision</h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="bg-white border-none shadow-2xl overflow-hidden relative">
                        {/* Accent Bar */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand via-brand-soft to-accent-yellow" />

                        {/* Quote Icon */}
                        <div className="absolute top-8 right-8 opacity-5">
                            <Quote className="w-32 h-32 text-brand" />
                        </div>

                        <CardContent className="p-10 md:p-16 relative">
                            {/* Opening Quote Mark */}
                            <div className="text-8xl md:text-9xl text-brand/10 font-serif leading-none mb-4">"</div>

                            <p className="text-xl md:text-2xl font-serif italic text-text-main leading-relaxed text-center mb-8">
                                To uphold human dignity by providing care, protection,
                                rehabilitation, and sustainable livelihood opportunities for
                                women with disabilities.
                            </p>

                            {/* Closing Quote Mark */}
                            <div className="text-8xl md:text-9xl text-brand/10 font-serif leading-none text-right">"</div>

                            {/* Decorative Divider */}
                            <div className="flex items-center justify-center gap-3 mt-8">
                                <div className="h-px w-16 bg-accent-yellow" />
                                <div className="w-2 h-2 rounded-full bg-accent-yellow" />
                                <div className="h-px w-16 bg-accent-yellow" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
