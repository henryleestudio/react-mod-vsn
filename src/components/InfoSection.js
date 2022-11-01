import React from 'react'
import styled from 'styled-components'
import { InfoDataFour, InfoDataThree, InfoDataTwo } from '../data/InfoData'
import { Button } from './Button'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
`
const Container = styled.div`
  padding: 0rem calc((100vw - 1300px) / 2);
  display: grid; 
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  }
`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0rem 2rem;
  order: ${({ reverse }) => reverse ? '2' : '1'};

  h1 {
    margin-bottom: 1.2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => reverse ? '1' : '2'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => reverse ? '2' : '1'};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 

    @media screen and (max-width: 768px) {
      width: 90%;
    height: 90%;
    }
  }
`

export const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to='/homes' primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>

      <Container>
        <ColumnLeft>
          <h1>{InfoDataTwo.heading}</h1>
          <p>{InfoDataTwo.paragraphOne}</p>
          <p>{InfoDataTwo.paragraphTwo}</p>
          <Button to='/homes' primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={InfoDataTwo.image} alt="home" />
        </ColumnRight>
      </Container>

      <Container>
        <ColumnLeft>
          <h1>{InfoDataThree.heading}</h1>
          <p>{InfoDataThree.paragraphOne}</p>
          <p>{InfoDataThree.paragraphTwo}</p>
          <Button to='/homes' primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={InfoDataThree.image} alt="home" />
        </ColumnRight>
        
        <ColumnLeft>
          <h1>{InfoDataFour.heading}</h1>
          <p>{InfoDataFour.paragraphOne}</p>
          <p>{InfoDataFour.paragraphTwo}</p>
          <Button to='/homes' primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={InfoDataFour.image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  )
}
