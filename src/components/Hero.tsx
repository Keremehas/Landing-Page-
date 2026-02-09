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
            {/* Background with Parallax and Pattern */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/90 to-brand-soft/85 z-10" />
                {/* Decorative Pattern */}
                <div className="absolute inset-0 z-10 opacity-10">
                    <div className="absolute top-20 right-20 w-48 h-48 border-2 border-white rounded-full" />
                    <div className="absolute bottom-32 left-32 w-32 h-32 border-2 border-white rounded-full" />
                </div>
                <div className="absolute inset-0 bg-surface" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 py-20 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        {/* Subtitle */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs md:text-sm font-medium tracking-wide">
                                Church of South India – Coimbatore Diocese
                            </span>
                        </div>

                        {/* Main Title with Gradient */}
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                            style={{
                                background: 'linear-gradient(90deg, #FFFFFF 0%, #5FB3D9 60%, #F6C21C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            KEREMEHAS
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl font-light mb-4 text-white/95 max-w-2xl mx-auto leading-relaxed">
                            A Special Home for Women with Disabilities
                        </p>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px w-12 bg-accent-yellow" />
                            <div className="w-2 h-2 rounded-full bg-accent-yellow" />
                            <div className="h-px w-12 bg-accent-yellow" />
                        </div>

                        {/* Mission Statement */}
                        <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto italic">
                            "Empowering lives through compassionate care, rehabilitation, and dignity since 1996"
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
                            <Button
                                size="lg"
                                className="bg-accent-yellow text-brand-dark hover:bg-brand hover:text-white text-base md:text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-bold shadow-2xl"
                                onClick={() => document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Support Our Mission
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-base md:text-lg px-8 py-6 rounded-full transition-colors font-semibold"
                                onClick={scrollToAbout}
                            >
                                Learn More
                            </Button>
                        </div>

                        {/* Scroll Indicator */}
                        <button
                            onClick={scrollToAbout}
                            className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
                            aria-label="Scroll to content"
                        >
                            <span className="text-xs md:text-sm font-medium">Discover Our Story</span>
                            <ArrowDown className="w-4 h-4 animate-bounce" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
