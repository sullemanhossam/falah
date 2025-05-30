import Navbar from "../navbar";
import FooterSection from "./sections/footer";
import Hero from "./sections/hero";
import HowItWorksSection from "./sections/how-it-works";
import PlatformHighlightsSection from "./sections/platform-highlights";
import WhoItsForSection from "./sections/who-its-for";
import WhyClinConnectSection from "./sections/why-clinconnect";

export default function Home(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <WhoItsForSection/>
        <PlatformHighlightsSection/>
        <HowItWorksSection/>
        <WhyClinConnectSection/>
        <FooterSection/>
        </>
    )
}