// @flow
import * as React from 'react';
import styled from "styled-components";

const Styledcontainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 255, 0.7);
  width: 100vw;
  height: 100vh;
`

export const Loading = () => {
    return (
        <Styledcontainer>
            Loading...
        </Styledcontainer>
    );
};
