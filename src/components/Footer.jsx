import styled from "styled-components";
import { socialMediaIcons } from '../constants/constants';


function Footer() {
  return (
    <FooterContainer>
      <SocialContainer>
        {socialMediaIcons.map((icon, key) => {
          console.log(icon)
          return <h3 key={key}>{icon()}</h3>
        })}
      </SocialContainer>
      <span>Copyright © 2022 ElOthmani</span>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
    background: linear-gradient(35deg, #185A8C, #0d324e);
    padding: 2rem 0 2rem;
    svg {
      color: #ffffff;
      font-size: 2rem;
    }
    span {
      color: white;
    }
`
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 20%;
`

export default Footer