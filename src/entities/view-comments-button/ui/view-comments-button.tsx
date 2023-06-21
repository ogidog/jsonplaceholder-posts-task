// @flow
import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--white);

  width: fit-content;
  color: var(--grayish-blue);
  font-weight: 500;
  font-size: var(--font-size-small);
  padding: 0px 10px 0px 10px;
`

const Button = styled.div`
  cursor: pointer;
`

type Props = { onClick: any };
export const ViewCommentsButton = (props: Props) => {
    const {onClick} = props
    return (
        <StyledContainer onClick={onClick}>
            <Button>Comments</Button>
        </StyledContainer>
    );
};
