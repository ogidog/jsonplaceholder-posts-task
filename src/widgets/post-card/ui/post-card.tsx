// @flow
import * as React from 'react';
import styled from "styled-components";
import {FC, useState} from "react";
import {Post, ViewCommentsButton} from "entities/index";
import {IPost} from "entities/post/model/types";
import {ShowPostComments} from "features/show-post-comments/ui/show-post-comments";

const StyledContainer = styled.div`
  display: grid;
  grid-row-gap: 10px;
`

const PostContainer = styled.div`
  border-radius: 10px;
  background-color: var(--white);
  padding: 10px;
  height: fit-content;
`

const PostCommentsContainer = styled.div`
  padding-left: 10%;
`

const PostControlButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PostCard: FC<IPost> = (props) => {
    const {id, userId, body, title} = props;
    const [shouldCommentsShown, showComments] = useState(false)

    return (
        <StyledContainer>
            <PostContainer>
                <Post
                    id={id}
                    userId={userId}
                    title={title}
                    body={body}
                />
                <PostControlButtons>
                    <ViewCommentsButton onClick={() => showComments(!shouldCommentsShown)}/>
                </PostControlButtons>
            </PostContainer>
            {shouldCommentsShown &&
                <PostCommentsContainer>
                    <ShowPostComments postId={id}/>
                </PostCommentsContainer>
            }
        </StyledContainer>
    );
};
