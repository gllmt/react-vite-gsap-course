import { useState } from 'react'
import logo from './assets/logo.svg'
import styled from "styled-components"
import ParallaxHeroSection from './components/ParallaxHeroSection/ParallaxHeroSection'
import ContentSection from './components/ContentSection'
import CrossRevealSection from './components/CrossRevealSection'
import FaceOne from '../src/assets/images/faceOne.jpg'
import LandscapeOne from '../src/assets/images/landscapeOne.jpg'
import LandscapeTwo from '../src/assets/images/LandscapeTwo.jpg'

const StyledHeroSection = styled.section`
display: flex;
position: relative;
width: 100vw;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: space-between;

  img {
    height: 25vmin;
    pointer-events: none;
  }
`

const StyledTitle = styled.h1`
color: #000;
font-size: 2rem;
font-weight: 400;
letter-spacing: 4px;
text-align: center;
text-transform: uppercase;
padding-top: 4rem;
`

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection title={"Take Care"} text={"Cardigan polaroid vinyl whatever live-edge flannel, letterpress gluten-free stumptown tote bag brooklyn you probably haven't heard of them kickstarter gochujang."}/>
      <CrossRevealSection 
        face={FaceOne}
        landscape={LandscapeOne}
        personName={"Pierre."}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        authorName={"Pierre."}
        crossreveal={"xPercent"}
      />
      <ContentSection title={"Take Care 2"} text={"Cardigan 2 polaroid vinyl whatever live-edge flannel, letterpress gluten-free stumptown tote bag brooklyn you probably haven't heard of them kickstarter gochujang."}/>
      <CrossRevealSection 
        face={FaceOne}
        landscape={LandscapeTwo}
        personName={"Pierre."}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        authorName={"Pierre."}
        crossreveal={"yPercent"}
      />
    </>
  )
}

export default App
