import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { icons, zodiac } from '../constants/constants';


function Today() {
    const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
  return (
            zip(icons, zodiac).map((data, key) => {
                return(
                    <List key={key}>
                        <SLink to={data[1].url}>
                            {data[0]}
                        </SLink>
                    </List>
                )
            })   
        )
}

const List = styled.div`
    display: flex;
    justify-content: center;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #185A8C, #0d324e);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    @media (max-width: 1534px) {
        height: 4rem;
        width: 4rem;
    }

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active {
        background: white;
        border: 1.2rem solid #185A8C;
        svg {
            color: #0d324e;
        }

        h4 {
            color: white;
        }
    }
`


export default Today