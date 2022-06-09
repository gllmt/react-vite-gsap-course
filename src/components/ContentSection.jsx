import React from "react";
import styled from "styled-components"

const StyledContentSection = styled.div`
display: flex;
position: relative;
width: 1OOvw;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
.content__wrapper {
  max-width: 980px;

  h2 {
    font-size: 5rem;
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: #ACACAC;
  }

  h3 {
    font-size: 5rem;
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: #O8OFOF;
  }
}
`

function ContentSection(props) {
  return(
    <StyledContentSection>
      <div className="content__wrapper">
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
      </div>
    </StyledContentSection>
  )
}

export default ContentSection