import React from 'react';
import styled from "styled-components";

const Swrapper = styled.div`
#search {
    background-color: white;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
}
`

const Bar = () => {
    return <Swrapper>
        <input type="text" name="name" placeholder='Search' id="search" />
    </Swrapper>
};

export default Bar;