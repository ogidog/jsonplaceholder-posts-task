// @flow
import * as React from 'react';
import styled from "styled-components";
import {Comment} from "entities/index";
import {useGetPostCommentsQuery} from "../api/api";
import {Loading, useLoadNotifier} from "shared/index";

const StyledContainer = styled.div`
  display: grid;
  grid-row-gap: 5px;
`

type Props = { postId: number };

export const ShowPostComments = (props: Props) => {
    const {postId} = props;

    const skip = useLoadNotifier();
    const {data, error, isLoading, isUninitialized} = useGetPostCommentsQuery(postId, {skip});

    return (
        <>
            {isUninitialized ? (<Loading/>) : isLoading ? (<Loading/>) :
                (
                    <StyledContainer>
                        {
                            data!.map(item => <Comment key={item.id}
                                                       id={item.id}
                                                       postId={item.postId}
                                                       email={item.email}
                                                       name={item.name}
                                                       body={item.body}/>)
                        }
                    </StyledContainer>
                )
            }
        </>
    );
}
