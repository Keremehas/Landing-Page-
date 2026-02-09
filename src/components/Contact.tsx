import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {/* Left: Contact Details */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-10 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-accent-yellow">
                                    KEREMEHAS – CSI Ann's Centre
                                </h3>
                            </div>

                            {/* Address */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-accent-yellow shrink-0" />
                                    <h4 className="text-lg font-semibold text-white">Address</h4>
                                </div>
                                <div className="pl-8 space-y-1 text-white/90">
                                    <p>1077, Avinashi Road</p>
                                    <p>Coimbatore – 641 018</p>
                                    <p>Tamil Nadu, India</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-accent-yellow shrink-0" />
                                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                                </div>
                                <div className="pl-8">
                                    <a
                                        href="tel:0422211837"
                                        className="text-xl font-bold text-white hover:text-accent-yellow transition-colors"
                                    >
                                        0422-211837
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-accent-yellow shrink-0" />
                                    <h4 className="text-lg font-semibold text-white">Email</h4>
                                </div>
                                <div className="pl-8">
                                    <a
                                        href="mailto:keremehascsi@gmail.com"
                                        className="text-white/90 hover:text-accent-yellow transition-colors"
                                    >
                                        keremehascsi@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 overflow-hidden">
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.202940817789!2d76.96928227451991!3d11.00318055497135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859303270dcdd%3A0x1909cb43639ccf7!2sCSI%20KEREMEHAS!5e1!3m2!1sen!2sin!4v1770618809224!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Administrator Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-center"
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
