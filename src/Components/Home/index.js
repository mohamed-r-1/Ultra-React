import React  from 'react';

import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Mohamed Sadek</HomeTitle>
                    <HomeInfo >Full Stack</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Back End</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
