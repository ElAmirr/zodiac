import React from 'react'
import ZodiacCard from './ZodiacCard'
import styled from 'styled-components';

function Home() {
  return (
    <Cards>
        <ZodiacCard />
    </Cards>
  )
}

const Cards = styled.div`
  margin: 3rem 6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export default Home