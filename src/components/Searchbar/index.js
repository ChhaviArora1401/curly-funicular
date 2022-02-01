import React, { useState } from 'react';
import styled from "styled-components";

const Swrapper = styled.div`
#search {
    background-color: white;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
}
`

const Bar = (props) => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return <Swrapper>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="Search Character" defaultValue={name} onChange={(e) => props.search(e.target.value)} />
        </form>
    </Swrapper >
};

export default Bar;