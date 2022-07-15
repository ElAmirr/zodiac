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
  position: absolute;
  top: 30vh;
  display: flex;
  max-width: 1724px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export default Home