import React from 'react';

import "app/css/App.css"
import styled from "styled-components";
import {PostsPage} from "../pages";

const StyledContainer = styled.div`
  
  @media(max-width: 1023px){
    height: 100dvh;
    max-height: 100dvh;
    overflow-x: auto;
  }
  
  @media (min-width: 1024px){
    max-width: 1024px;
    height: 100vh;
    max-height: 100vh;
    
    margin: 0 auto;
  }
`

function App() {
    return (
        <StyledContainer>
            <PostsPage/>
        </StyledContainer>
    );
}

export default App;
