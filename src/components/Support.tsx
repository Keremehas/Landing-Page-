import { motion } from "framer-motion";
import { fadeInUpGentle } from "@/lib/animations";
import { Button } from "@/components/ui/button";

import { HeartHandshake, DollarSign, Gift, Users, QrCode } from "lucide-react";

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
        description: "Make a direct impact by sponsoring the care of an individual woman in that place",
        color: "from-brand to-brand-soft"
    }
];


export default function Support() {

    return (
        <section id="support" className="section-spacing bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">

                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand mb-6 tracking-tight">
                        Support Our Mission
                    </h2>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Join hands with us in transforming lives and bringing hope to those who need it most
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Compact CTA Strip Banner */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUpGentle}
                        className="bg-gradient-to-r from-brand-dark via-brand to-brand-soft p-6 md:p-8 rounded-2xl shadow-lg mb-12 relative overflow-hidden border-l-4 border-accent-yellow"
                    >
                        {/* Subtle Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-xl" />
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                            {/* Quote Section */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-start gap-3 mb-2">
                                    <HeartHandshake className="w-8 h-8 text-accent-yellow shrink-0 hidden md:block" />
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                            "Help them grow. Help them thrive."
                                        </h3>
                                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                            We invite individuals, institutions, and organizations to join hands with us in this noble cause. Your support can transform lives and bring hope.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-accent-yellow text-brand-dark hover:bg-accent-yellow/90 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full font-bold shadow-xl transition-colors"
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Get in Touch
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold transition-colors"
                                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Two-Segment Design: Cards Left, UPI Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
                        {/* Left Segment: Contribution Cards */}
                        <div className="flex flex-col gap-6 justify-between h-full">
                            {contributionMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex-1 flex"
                                >
                                    <div className="bg-surface p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-brand-soft/20 relative overflow-hidden flex items-center gap-6 h-full w-full">
                                        {/* Gradient Left Border */}
                                        <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${method.color}`} />

                                        {/* Subtle Background Pattern/Glow */}
                                        <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${method.color} opacity-[0.03] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

                                        {/* Icon Container with Glassmorphism effect */}
                                        <div className={`bg-gradient-to-br ${method.color} p-4 rounded-2xl text-white shrink-0 shadow-lg shadow-brand/10 transition-transform duration-500 group-hover:scale-110`}>
                                            <method.icon className="w-7 h-7" strokeWidth={2} />
                                        </div>

                                        {/* Content Area - Vertically Centered */}
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand transition-colors">
                                                {method.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-sm">
                                                {method.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Segment: UPI Payment Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-brand-soft/20 relative overflow-hidden h-full flex flex-col"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-yellow/5 rounded-full blur-3xl -ml-16 -mb-16" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-brand/5 p-3.5 rounded-2xl border border-brand/10">
                                    <QrCode className="w-7 h-7 text-brand" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold text-brand-dark tracking-tight">
                                    Donate via UPI
                                </h4>
                            </div>

                            <div className="bg-brand-soft/5 p-8 rounded-[2rem] border border-brand-soft/10 mb-8 flex-1 flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center">
                                    {/* QR Code Container with subtle depth */}
                                    <div className="bg-white p-5 rounded-2xl border border-brand-soft/20 mb-6 shadow-sm relative group cursor-default">
                                        <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                        <img
                                            src="/payment.png"
                                            alt="UPI QR Code for Donation"
                                            className="w-48 h-48 sm:w-56 sm:h-56 object-contain relative z-10"
                                        />
                                    </div>

                                    <div className="text-center space-y-2 mb-8">
                                        <p className="text-base font-bold text-brand-dark">
                                            Scan to Donate
                                        </p>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            Use any UPI app to scan this QR code for an immediate, secure contribution.
                                        </p>
                                    </div>

                                    {/* Payment Link Button with Premium Styling */}
                                    <a
                                        href="upi://pay?pa=csikeremehas633@fbl&pn=CSI%20Keren%20Mehas"
                                        className="w-full max-w-xs"
                                    >
                                        <Button className="w-full h-14 bg-gradient-to-r from-brand-dark to-brand hover:from-brand hover:to-brand-soft text-white rounded-xl font-bold text-base shadow-xl shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                                            <QrCode className="w-5 h-5 mr-3" />
                                            Open in UPI App
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Trust Footer */}
                            <div className="flex flex-col items-center gap-4 mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="h-[1px] w-8 bg-gray-200" />
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                                        Secure Payment
                                    </p>
                                    <div className="h-[1px] w-8 bg-gray-200" />
                                </div>

                                <div className="flex items-center justify-center gap-4 transition-all duration-500">
                                    <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="w-7 h-7" />
                                    <img src="https://img.icons8.com/color/48/phone-pe.png" alt="PhonePe" className="w-7 h-7" />
                                    <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" className="w-7 h-7" />
                                    <img src="https://img.icons8.com/color/48/bhim.png" alt="BHIM" className="w-7 h-7" />
                                    <img src="https://img.icons8.com/color/48/amazon.png" alt="Amazon Pay" className="w-7 h-7" />
                                </div>

                                <div className="bg-white border border-brand-soft/20 px-4 py-2 rounded-full shadow-sm mt-2">
                                    <p className="text-[11px] font-mono text-brand flex items-center gap-2">
                                        <span className="text-gray-400">UPI ID:</span>
                                        <span className="font-bold">csikeremehas633@fbl</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
