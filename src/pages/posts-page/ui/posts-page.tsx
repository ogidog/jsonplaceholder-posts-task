// @flow
import * as React from 'react';
import {Header, PostCard} from "widgets/index";
import {useGetPostsQuery} from "../api/api";
import {Loading, Error, useLoadNotifier} from "shared/index";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "app/store/store";
import {POSTS_PER_PAGE} from "features/pagination/model/constants";
import {Footer} from "widgets/index";
import {useSearchByTitle, useSortByTitle} from "../model/hooks";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: var(--header-height) calc(100vh - var(--header-height) - var(--footer-height) - 20px) var(--footer-height);
  grid-row-gap: 5px;
  min-height: 100%;
`

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;

  overflow-y: auto;
`

export const PostsPage = () => {
    const skip = useLoadNotifier();

    const dispatch = useDispatch();
    const {data, error, isLoading, isUninitialized} = useGetPostsQuery(undefined, {skip});
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const pageNumber = useSelector((state: RootState) => state.pagination.selectedPageNumber);
    const order = useSelector((state: RootState) => state.sort.order);

    let filteredData = useSearchByTitle(data, searchText, dispatch, isLoading, isUninitialized);
    filteredData = useSortByTitle(filteredData, order, filteredData.length, isLoading, isUninitialized);
    filteredData = filteredData.slice(pageNumber * POSTS_PER_PAGE, (pageNumber + 1) * POSTS_PER_PAGE);

    return (
        <StyledContainer>
            <Header/>
            {
                isUninitialized ? (<Loading/>) : isLoading ? (<Loading/>) : error ? <Error/> :
                    <PostsContainer>
                        {
                            filteredData.map(item =>
                                <PostCard key={item.id}
                                          id={item.id}
                                          userId={item.userId}
                                          title={item.title}
                                          body={item.body}/>
                            )
                        }
                    </PostsContainer>
            }
            <Footer/>
        </StyledContainer>
    );
};

export default PostsPage;
