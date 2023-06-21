// @flow
import * as React from 'react';
import styled, {css} from "styled-components";
import {IComment} from "../model/types";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: fit-content(5px) fit-content(5px);
  background-color: var(--white);
`

const Email = styled.div`
  font-weight: 500;
  padding: 10px;
  color: var(--dark-blue);
`
const Body = styled.div`
  padding: 10px;
  font-weight: 300;
`

export const Comment = (props: IComment ) => {
    const {postId, id, name, email, body, } = props;
    return (
        <StyledContainer key={id}>
            <Email>{email}</Email>
            <Body>{body}</Body>
        </StyledContainer>
    );
};
