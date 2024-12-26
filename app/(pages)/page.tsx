import Faq from "../components/landing/faq";
import Header from "../components/landing/header";
import Hero from "../components/landing/hero";
import Pricing from "../components/landing/pricing";
import VideoExplanation from "../components/landing/videoExplanetion";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <Header/>
      <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <Faq/>
    </div>
    
  )
}
