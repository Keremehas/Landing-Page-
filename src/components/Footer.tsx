export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-brand-soft/20 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* Logo and Info Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
                    {/* Logo and Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.png"
                                alt="KEREMEHAS Logo"
                                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">KEREMEHAS</h3>
                                <p className="text-sm text-white/70">CSI Ann's Centre</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 max-w-md text-center md:text-left">
                            A Special Home for Women with Disabilities
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-sm font-semibold text-accent-yellow mb-3">Quick Links</h4>
                        <div className="flex flex-col space-y-2 text-sm text-white/70">
                            <a href="#about" className="hover:text-accent-yellow transition-colors">About Us</a>
                            <a href="#mission" className="hover:text-accent-yellow transition-colors">Our Mission</a>
                            <a href="#impact" className="hover:text-accent-yellow transition-colors">Our Impact</a>
                            <a href="#contact" className="hover:text-accent-yellow transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-sm font-semibold text-accent-yellow mb-3">Contact</h4>
                        <div className="text-sm text-white/70 text-center md:text-left">
                            <p>1077, Avinashi Road</p>
                            <p>Coimbatore – 641 018</p>
                            <p>Tamil Nadu, India</p>
                            <p className="mt-2">Tel: +91 94446 23803</p>
                            <p>Tel: +91 93613 38766</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/70 text-center md:text-left">
                        &copy; {new Date().getFullYear()} KEREMEHAS - CSI Ann's Centre. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex space-x-6 text-sm text-white/70">
                            <a href="#" className="hover:text-accent-yellow transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-accent-yellow transition-colors">Terms of Service</a>
                        </div>

                        {/* Go to Top Button */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-2 px-4 py-2 bg-accent-yellow/10 hover:bg-accent-yellow text-white/70 hover:text-brand-dark border border-accent-yellow/30 hover:border-accent-yellow rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                            aria-label="Go to top"
                        >
                            <svg
                                className="w-4 h-4 transition-transform group-hover:-translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span className="text-sm font-semibold">Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
