import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import Objectives from "@/components/Objectives";
import Impact from "@/components/Impact";
import Rehabilitation from "@/components/Rehabilitation";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen font-sans bg-white text-text-main overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Vision />
            <Mission />
            <Objectives />
            <Impact />
            <Rehabilitation />
            <Support />
            <Contact />
            <Footer />
        </div>
    );
}
