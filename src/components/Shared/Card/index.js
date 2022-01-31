import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
background-color: black;
color: white;
padding: 0 0 1% 0;
text-align: center;
img{
    width: 100%;
}
`

const Card = (props) => {
    return <Wrapper>
        <div>
            <img src={props.src} />
            <div className="title">
                <h3>{props.h3}</h3>
                <span>{props.span}</span>
            </div>
        </div>
    </Wrapper>
};

export default Card