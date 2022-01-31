import React from 'react';
import styled from "styled-components";
import Nav from "../../components/Navbar/index";
import Foot from "../../components/Footer/index";
import Card from "../../components/Shared/Card/index";

const Wrapper = styled.div`
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    align - items: start;
}
`
const info = [
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/witcher_4xtax1fWWj.jpg",
        name: "Geralt of Rivia",
        post: "Witcher"
    },
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/ciri_eYUycECAv.jpg",
        name: "Cirilia",
        post: "Witcher"
    },
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/triss_CJyFVXKbC.jpg",
        name: "Triss Merrigold",
        post: "Mage"
    },
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/yennefer_GnnKH1JvO.jpg",
        name: "Yennefer of Vengerberg",
        post: "Mage"
    },
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/bard_0z-DhtLie.jpg",
        name: "Dandallion",
        post: "Bard"
    },
    {
        src: "https://ik.imagekit.io/hbj42mvqwv/wild_hunt_chg8n0AGzu.jpg",
        name: "Wild Hunt",
        post: "Wraith"
    },
    {
        src: "https://cdn.gamer-network.net/2020/articles/2020-01-30-15-15/the-witchers-animated-film-is-all-about-vesemir-1580397307078.jpg/EG11/thumbnail/1920x1076/format/jpg/quality/80",
        name: "Vesemir",
        post: "Witcher"
    }
];

const Main = (props) => {
    return <Wrapper>
        <div className='grid'>
            {
                info.map((li) => {
                    return <Card src={li.src} h3={li.name} span={li.post} />
                })
            }
        </div >
    </Wrapper>
}

export default Main