import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Mission", href: "#mission" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.3,
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            },
        });
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            ref={navRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 transition-all duration-300"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-14 md:h-20">
                    {/* Logo: Large, Clear, and Balanced */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="relative flex items-center hover:opacity-90 transition-all duration-300 group"
                    >
                        <img
                            src="/logo.png"
                            alt="KEREMEHAS Logo"
                            className="h-10 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="relative text-sm font-medium text-text-muted hover:text-brand transition-colors group"
                            >
                                {link.name}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-accent-yellow group-hover:w-full transition-all duration-300 ease-out" />
                            </a>
                        ))}
                        <Button
                            onClick={() => scrollToSection("#support")}
                            className="bg-accent-yellow text-brand-dark hover:bg-brand hover:text-white rounded-full px-6 py-2 font-semibold transition-all text-sm"
                        >
                            Support Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-brand"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-white/20 absolute w-full shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-base font-medium text-text-muted hover:text-brand py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            onClick={() => scrollToSection("#support")}
                            className="bg-accent-yellow text-brand-dark hover:bg-brand hover:text-white rounded-full w-full font-semibold"
                        >
                            Support Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
