import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: [
            "KEREMEHAS – CSI Ann's Centre",
            "1077, Avinashi Road",
            "Coimbatore – 641 018",
            "Tamil Nadu, India"
        ],
        color: "from-brand to-brand-soft"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: [
            "0422-211837"
        ],
        color: "from-brand-soft to-accent-yellow"
    },
    {
        icon: Clock,
        title: "Office Hours",
        details: [
            "Monday - Saturday",
            "9:00 AM - 5:00 PM",
            "Sunday: Closed"
        ],
        color: "from-accent-yellow to-accent-red"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-full" />
                <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative">
                <SectionLabel number="08" label="Contact Us" className="justify-center" />

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-accent-yellow" />
                        <div className="w-2 h-2 rounded-full bg-accent-yellow" />
                        <div className="h-px w-16 bg-accent-yellow" />
                    </div>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to learn more about our work or to discuss how you can help.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="bg-brand/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-soft/20 hover:bg-brand/70 transition-all h-full group">
                                    {/* Gradient Top Bar */}
                                    <div className={`h-1 bg-gradient-to-r ${info.color} rounded-full mb-6`} />

                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`bg-gradient-to-br ${info.color} p-4 rounded-xl inline-block`}>
                                            <info.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-4 text-accent-yellow">
                                        {info.title}
                                    </h3>

                                    {/* Details */}
                                    <div className="space-y-2">
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-white/90 leading-relaxed">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map Placeholder / CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center"
                    >
                        <MapPin className="w-16 h-16 mx-auto mb-6 text-accent-yellow" />
                        <h3 className="text-2xl font-bold mb-4">Visit Our Centre</h3>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            We welcome visitors who wish to learn more about our work and meet our beneficiaries.
                            Please contact us in advance to schedule your visit.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-accent-yellow text-brand-dark px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors cursor-pointer">
                            <Mail className="w-5 h-5" />
                            <span>Send us a message</span>
                        </div>
                    </motion.div>

                    {/* Administrator Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-block bg-brand/30 backdrop-blur-sm border border-brand-soft/20 px-8 py-4 rounded-full">
                            <p className="text-white/80">
                                <span className="font-semibold text-accent-yellow">The Administrator</span>
                                {" • "}
                                <span>KEREMEHAS – CSI Ann's Centre</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
