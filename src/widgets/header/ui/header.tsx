// @flow
import * as React from 'react';
import styled from "styled-components";
import {SearchByTitle, SortByTitle} from "features/index";


const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-radius: 10px;
  padding: 5px 20px 5px 20px;
  box-sizing: border-box;
  background-color: var(--white);
  
  min-width: 375px;
`

const SearchInputContainer = styled.div`
  display: grid;
  grid-template-columns: fit-content(5px) fit-content(5px);
  grid-column-gap: 10px;
  align-items: center;
`

export const Header = () => {

    return (
        <StyledContainer>
            <SearchInputContainer>
                <SearchByTitle/>
                <SortByTitle/>
            </SearchInputContainer>
        </StyledContainer>
    );
};
