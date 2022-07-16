import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


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
        <TodayContainer>    
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
        </TodayContainer>
    )
}

const TodayContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Today = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  border-radius: 1rem;
  background: linear-gradient(35deg, #185A8C, #0d324e);
  text-align: center;
`
const CardContent = styled(NavLink)`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
`

const ZodiacContainer = styled.div`
  
  
`

const DateContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`

export default ZodiacToday