// @flow
import * as React from 'react';
import styled from "styled-components";
import {IPost} from "../model/types"
import {FC, useEffect, useRef} from "react";

const StyledContainer = styled.div`

  display: grid;
  grid-template-areas: "avatar title" "avatar body" "avatar controls" "avatar veiwcomments";
  grid-template-rows: fit-content(5px) fit-content(5px);
  grid-template-columns: fit-content(5px) 1fr;
  background-color: var(--white);

  width: 100%;
  height: fit-content;
`

const Avatar = styled.img`
  grid-area: avatar;
  display: flex;
  align-items: center;

  width: 50px;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;

  cursor: pointer;
`

const Title = styled.div`
  grid-area: title;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 500;
`

const Body = styled.div`
  grid-area: body;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 300;
  text-align: justify;
`

export const Post: FC<IPost> = (props) => {
    const {title, id, body} = props;
    const avatarRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Add a prevention delay to image loading due the rate limiter on https://api.multiavatar.com
        setTimeout(() => {
            if (avatarRef.current) {
                avatarRef.current.src = `https://api.multiavatar.com/${id}.png`;
            }
        }, id * 10)
    }, [])

    return (
        <StyledContainer key={id}>
            <Avatar alt={`Avatar #${id}`} ref={avatarRef} src={''}/>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </StyledContainer>
    );
};
