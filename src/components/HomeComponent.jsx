import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export default function Home(){
    return(
        <div>
            <GlobalStyle/>
            <HomeStyle>
                <h1>Home</h1>
                <div className="box-area">
                    <button className="btn btn-primary">Primary</button>
                </div>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #f5f5f5;
`
const HomeStyle = styled.div`
.text-center{
    text-align: center;
}
`