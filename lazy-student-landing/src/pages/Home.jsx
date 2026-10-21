import Hero from '../sections/Hero';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Installation from '../sections/Installation';
import TechStack from '../sections/TechStack';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      
      <div className="pt-20"> 
        <Hero />
        <Features />
        <HowItWorks />
        <Installation />
        <TechStack />
      </div>
      <Footer />
    </main>
  );
}