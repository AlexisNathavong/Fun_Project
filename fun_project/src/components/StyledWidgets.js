import styled from 'styled-components';

//AppRouter
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 5px 5px 8px #dddddd;
    height: 100px;
    text-align: center;
    margin-bottom: 80px;
    background-color: blue;

    a {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        margin-left: 70px;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }

    .app-router {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        justify-content: space-evenly;
        
        
    }
`;