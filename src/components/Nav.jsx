import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../constants/images/horoscopelogo.jpg'
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Nav() {

  const [zodiac, setZodiac] = useState()

  const handleKeyDown = event => {
      localStorage.setItem('zodiac', JSON.stringify(zodiac));
    }


  return (
    <NavBar>
        <LogoContainer to={'/'}>      
          <Logo/>
          <LogoTitle>Astro Talk</LogoTitle>
        </LogoContainer>
        <MenuContainer>
          <MenuLink to={'/'}>About Us</MenuLink>
          <MenuLink to={'/'}>Real Photo</MenuLink>
          <MenuLink to={'/'}>Our Product</MenuLink>
        </MenuContainer>
        <SearchBar>
          <FaSearch />
          <Search
            onChange={event => setZodiac(event.target.value)}
            onKeyDown={handleKeyDown}
          /> 
        </SearchBar>
        <Connexion>
          <Login>LOG IN</Login>
          <Join>JOIN ASTRO TALK</Join>
        </Connexion>
    </NavBar>
  )
}

const NavBar = styled.div`
    width: 90vw;
    margin: 1rem 3rem;
    color: black;
    display: flex;
    align-items: center;    
    justify-content: space-between;
`
const LogoContainer = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :link {
    text-decoration: none !important;
  }
`

const Logo = styled.img`
  background-image: url(${logo});
  background-size: cover;
  background-position: bottom;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`

const LogoTitle = styled.h1`
  background: -webkit-linear-gradient(35deg, #185A8C, #0d324e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`

const MenuContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`

const MenuLink = styled(NavLink)`
  background: -webkit-linear-gradient(35deg, #185A8C, #0d324e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: none;
`

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg{
    position: absolute;
    margin-left: 1.2rem;
    color: white;
  }
`

const Search = styled.input`
  background: linear-gradient(35deg, #185A8C, #0d324e);
  font-size: 1.rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
`

const Connexion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Login = styled.a`
  margin-right: 2rem;
  background: -webkit-linear-gradient(35deg, #185A8C, #0d324e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`
const Join = styled.a`
  background: linear-gradient(35deg, #185A8C, #0d324e);
  font-size: 1.2rem;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
`


export default Nav