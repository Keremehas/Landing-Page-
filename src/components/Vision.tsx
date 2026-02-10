import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Heart } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="py-10 md:py-12 bg-gradient-to-br from-surface via-white to-surface relative overflow-hidden">
            {/* Soft background hearts - light-hearted feel */}
            <div className="absolute top-1/4 left-10 opacity-5">
                <Heart className="w-16 h-16 md:w-20 md:h-20 text-accent-red" fill="currentColor" />
            </div>
            <div className="absolute bottom-1/4 right-10 opacity-5">
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-brand" fill="currentColor" />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-2xl mx-auto text-center"
                >
                    {/* Simple header with icon */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Heart className="w-5 h-5 text-brand" strokeWidth={1.5} />
                        <h2 className="text-xl md:text-2xl font-bold text-brand">Our Vision</h2>
                        <Heart className="w-5 h-5 text-brand" strokeWidth={1.5} />
                    </div>

                    {/* Clean, simple vision statement */}
                    <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-sm border border-brand-soft/20">
                        <p className="text-base md:text-lg text-text-main leading-relaxed italic text-balance">
                            To uphold human dignity by providing care, protection, rehabilitation,
                            and sustainable livelihood opportunities for women with disabilities.
                        </p>

                        {/* Simple divider */}
                        <div className="flex items-center justify-center gap-2 my-3">
                            <div className="w-1 h-1 rounded-full bg-brand" />
                            <div className="w-1 h-1 rounded-full bg-brand-soft" />
                            <div className="w-1 h-1 rounded-full bg-accent-yellow" />
                        </div>

                        <p className="text-xs md:text-sm text-text-muted font-medium">
                            Empowering lives with dignity and compassion
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
