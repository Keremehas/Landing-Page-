import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Vision() {
    return (
        <section id="vision" className="section-spacing bg-surface relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute top-10 right-10 md:top-20 md:right-20 w-40 h-40 md:w-48 md:h-48 border border-brand-soft/10 rounded-full" />

            <div className="container-standard">
                <SectionLabel number="02" label="Our Vision" className="justify-center" />

                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand text-balance">Our Vision</h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
                        {/* Background quote icon - subtle */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 text-6xl md:text-8xl text-brand/5 font-serif leading-none pointer-events-none">
                            "
                        </div>

                        <div className="relative space-y-6">
                            {/* Opening quote mark */}
                            <div className="text-5xl md:text-6xl text-brand/10 font-serif leading-none">"</div>

                            <p
                                className="font-serif italic text-text-main leading-relaxed text-center text-balance"
                                style={{ fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)' }}
                            >
                                To uphold human dignity by providing care, protection,
                                rehabilitation, and sustainable livelihood opportunities for
                                women with disabilities.
                            </p>

                            {/* Closing quote mark */}
                            <div className="text-5xl md:text-6xl text-brand/10 font-serif leading-none text-right">"</div>

                            {/* Accent bar */}
                            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-brand via-brand-soft to-accent-yellow mx-auto rounded-full" />

                            <p className="text-xs md:text-sm text-text-muted text-center font-medium">
                                Empowering lives with dignity and compassion
                            </p>
                        </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
                        <div className="h-px w-10 md:w-12 bg-brand-soft/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft/50" />
                        <div className="h-px w-10 md:w-12 bg-brand-soft/30" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
