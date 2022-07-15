import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


//import zodiac from '../constants/constants'

function ZodiacToday() {
    const [zodiacToday, setZodiacToday] = useState([]);
    let params = useParams();
    
    const getZodiacToday = async (name) => {
      const api = await fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${name}/today`);
      const data = await api.json();  
      setZodiacToday(data);
      console.log(data)
    }

    useEffect(() => {
      getZodiacToday(params.type);
      console.log(params.type)
    }, [params.type]);
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const curentDay = days[date.getDay()];
    const curentMonth = months[date.getMonth()];
    console.log(curentMonth);
    console.log(curentDay)
    return (      
          <Today>
            <CardContent to={ zodiacToday }>
              <ZodiacContainer>
                <h4>{zodiacToday['sunsign']}</h4>
              </ZodiacContainer>
              <DateContainer>
                <h5>{`${curentDay}, `}</h5>
                <h5>{`${date.getDate()}`}</h5>
                <h5>{curentMonth}</h5>
              </DateContainer>
              <h4> {zodiacToday['horoscope'] }</h4>
            </CardContent>
        </Today>
        )
}

const Today = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  border-radius: 1rem;
  background: linear-gradient(35deg, #185A8C, #0d324e);
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;
`
const CardContent = styled(NavLink)`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
`

const ZodiacContainer = styled.div`
  width: 30%;
  position: absolute;
  top: 2rem;
  left: 2rem;
`

const DateContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 2rem;
  right: 2rem;
`

export default ZodiacToday