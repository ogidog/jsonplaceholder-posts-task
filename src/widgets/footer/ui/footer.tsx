// @flow
import * as React from 'react';
import styled from "styled-components";
import {Pagination} from "features/pagination/ui/pagination";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white);
  border-radius: 10px;
  
  height: var(--footer-height);
`

export const Footer = () => {
    return (
        <StyledContainer>
            <Pagination/>
        </StyledContainer>
    );
};
