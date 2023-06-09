import React, {Component} from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export default function Home(){
    return(
        <div>
            <GlobalStyle/>
            <HomeStyle>
                <h1>Home</h1>
                <div class="box-area">
                    <btn class="btn btn-primary">Primary</btn>
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