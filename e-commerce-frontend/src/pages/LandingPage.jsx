import React from 'react'
import CarouselContainer from '../components/CarouselContainer'
import DummyProducts from '../components/DummyProducts';
import FooterComponent from '../components/FooterComponent';

export const LandingPage = () => {
    const handleGreeting=()=>{
        let txt="Welcome to Alpha Mart";
        let wSpeech= window.speechSynthesis;
        let voice=new SpeechSynthesisUtterance(txt)
        wSpeech.speak(voice);
        voice.rate=0.5;

        console.log(wSpeech.getVoices())
    }
  return (
    <div>

        <button id="greeting-btn" onClick={handleGreeting}>Click To Announce Greeting</button>
        <CarouselContainer/>
        <h2>products</h2>
        <DummyProducts/>
        <FooterComponent/>

    </div>

  )
}
export default LandingPage;