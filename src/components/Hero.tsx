import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    // Smooth animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] as const,
                staggerChildren: 0.2
            }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-soft/20 via-surface to-white"
        >
            {/* Decorative Dot Pattern - Top Right */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                <div className="grid grid-cols-8 gap-2 p-4">
                    {[...Array(64)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.01,
                                ease: [0.4, 0, 0.2, 1] as const
                            }}
                            className="w-2 h-2 rounded-full bg-brand"
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Dot Pattern - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
                <div className="grid grid-cols-6 gap-2 p-4">
                    {[...Array(36)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.01,
                                ease: [0.4, 0, 0.2, 1] as const
                            }}
                            className="w-2 h-2 rounded-full bg-accent-yellow"
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Wave - Top Right */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <svg viewBox="0 0 200 800" className="w-full h-full">
                    <path
                        d="M0,0 Q100,200 0,400 T0,800"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="40"
                        className="text-brand-soft"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Diocese Badge */}
                        <motion.div variants={fadeIn}>
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-brand/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/csicdlogo.png"
                                    alt="CSI Coimbatore Diocese Logo"
                                    className="w-12 h-12 object-contain"
                                />
                                <span className="text-brand text-lg md:text-xl font-bold tracking-wide">
                                    CSI Coimbatore Diocese
                                </span>
                            </div>
                        </motion.div>

                        {/* Category */}
                        <motion.div variants={slideInLeft}>
                            <p className="text-brand font-semibold text-sm tracking-wider uppercase">
                                Compassionate Care Since 1996
                            </p>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={slideInLeft}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight"
                        >
                            KEREMEHAS
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={slideInLeft}
                            className="text-2xl md:text-3xl font-semibold text-brand leading-relaxed max-w-xl"
                        >
                            Help Them Grow, Help Them Thrive
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={slideInLeft}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Button
                                size="lg"
                                className="bg-accent-yellow text-brand-dark hover:bg-accent-yellow/90 px-8 py-6 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Support Our Mission
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-6 rounded-full font-semibold text-base transition-all duration-300"
                                onClick={scrollToAbout}
                            >
                                Learn More
                            </Button>
                        </motion.div>

                        {/* Trust Indicator */}
                        <motion.p
                            variants={fadeIn}
                            className="text-sm text-text-muted pt-4"
                        >
                            ✓ Serving with compassion and dignity since 1996
                        </motion.p>
                    </div>

                    {/* Right Panel - Poster Image */}
                    <motion.div
                        variants={slideInRight}
                        className="relative w-full"
                    >
                        {/* Poster Image Container */}
                        <div className="relative rounded-2xl lg:rounded-[32px] overflow-hidden shadow-xl lg:shadow-2xl">
                            <img
                                src="/posterhero.jpeg"
                                alt="KEREMEHAS - Empowering women with disabilities since 1996"
                                className="w-full h-auto object-cover"
                            />

                            {/* Subtle overlay for better text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
