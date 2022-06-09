import React from "react";
import styled from "styled-components"

const StyledCrossRevealContainer = styled.section`
position: relative;
padding-bottom: 56.25%;
.crossRevealImage {
  width:100%;
  height:100%;
}
.afterImage {
  position: absolute;
  overflow: hidden;
  top:0;
  /*left:0;*/
  transform: translate(100%, 0);
}
.afterImage img {
  transform: translate(-100%, 0);
}
.crossRevealImage img {
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  /*left:0;*/
}
.person__content {
  color: #080F0F;
  position; absolute;
  top: 45%;
  left: 15vw;
  .person__name {
    font-size: 17px;
    font-weight: 700;
    line-height:  1.3;
  }
  .person__job {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.022em;
    line-height:  1.3;
  }
}
.landscape__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0 0;
  text-align: center;

  .quote__sentence {
    color: #FFF;
    font-size: 80px;
    font-weight: 700;
    line-height: 1.03;
    letter-spacing: -0.015em;
  }

  .author__name {
    padding-top: 20px;
    color: #FFF;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.14;
    letter-spacing: 0;
  }
}
`

function CrossRevealSection({face, landscape, personName, job, sentenceOne, sentenceTwo, authorName}) {
  return(
    <StyledCrossRevealContainer>
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person__content">
          <h3 className="person__name">{personName}</h3>
          <p className="person__job">{job}</p>
        </div>
      </div>  
      <div className="crossRevealImage afterImage">
        <img src={landscape} alt="" />
      </div>
      <div className="landscape__wrapper">
        <p className="quote__sentence">
          {sentenceOne}
          <br/>
          {sentenceTwo}
        </p>
        <p className="author__name">{authorName}</p>
      </div>
    </StyledCrossRevealContainer>
  )
}

export default CrossRevealSection