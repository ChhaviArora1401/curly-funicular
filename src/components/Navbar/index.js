import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
background-color: black;
padding: 0.5% 15% 0.5% 5%;
margin-bottom: 5rem;
height: 70px;
font-size: 25px;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
a{
    background: -webkit-linear-gradient(#de6161, #2657eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
}
img {
    height: 100px; 
    margin: -1% 1% 0 3%;
}
`
const Nav = () => {
    return <Wrapper>
        <div className="logo">
            <img src="https://the-witcher-wiki.netlify.app/static/img/logo.00422c6.png" />
        </div>
        <span>Home</span>
    </Wrapper>
};

export default Nav