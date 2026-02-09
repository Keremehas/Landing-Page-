import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background with Parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/90 to-brand-soft/85 z-10" />
                {/* Subtle decorative pattern - minimal on mobile */}
                <div className="absolute inset-0 z-10 opacity-5 md:opacity-10">
                    <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-40 md:h-40 border border-white rounded-full" />
                    <div className="absolute bottom-20 left-20 w-24 h-24 md:w-32 md:h-32 border border-white rounded-full" />
                </div>
                <div className="absolute inset-0 bg-surface" />
            </div>

            {/* Content - Mobile-first spacing */}
            <div className="container-standard relative z-20 py-16 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center space-y-6 md:space-y-8"
                    >
                        {/* Subtitle */}
                        <div>
                            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs md:text-sm font-medium tracking-wide">
                                Church of South India – Coimbatore Diocese
                            </span>
                        </div>

                        {/* Main Title - Mobile-optimized sizing */}
                        <h1
                            className="font-bold tracking-tight leading-tight text-balance"
                            style={{
                                fontSize: 'clamp(2.25rem, 4vw + 1rem, 3.75rem)',
                                background: 'linear-gradient(90deg, #FFFFFF 0%, #5FB3D9 60%, #F6C21C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            KEREMEHAS
                        </h1>

                        {/* Tagline */}
                        <p
                            className="font-light text-white/95 max-w-2xl mx-auto leading-relaxed text-balance"
                            style={{ fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)' }}
                        >
                            A Special Home for Women with Disabilities
                        </p>

                        {/* Decorative Line - Subtle */}
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                            <div className="h-px w-8 md:w-12 bg-accent-yellow/60" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow/60" />
                            <div className="h-px w-8 md:w-12 bg-accent-yellow/60" />
                        </div>

                        {/* Mission Statement */}
                        <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto italic leading-relaxed">
                            "Empowering lives through compassionate care, rehabilitation, and dignity since 1996"
                        </p>

                        {/* CTA Buttons - Mobile-first sizing */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-accent-yellow text-brand-dark hover:bg-accent-yellow/90 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full transition-colors font-bold shadow-xl"
                                onClick={() => document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Support Our Mission
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full transition-colors font-semibold"
                                onClick={scrollToAbout}
                            >
                                Learn More
                            </Button>
                        </div>

                        {/* Scroll Indicator - Minimal */}
                        <button
                            onClick={scrollToAbout}
                            className="inline-flex flex-col items-center gap-1.5 text-white/50 hover:text-white/75 transition-colors pt-4"
                            aria-label="Scroll to content"
                        >
                            <span className="text-xs font-medium">Discover Our Story</span>
                            <ArrowDown className="w-3.5 h-3.5 opacity-75" strokeWidth={1.5} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
