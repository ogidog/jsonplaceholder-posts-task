// @flow
import * as React from 'react';
import styled, {css} from "styled-components";
import {POSTS_PER_PAGE, VISIBLE_PAGES_NUM} from "../model/constants";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "app/store/store";
import {useMemo} from "react";
import {setPageNumber} from "../model/slice";


const PageButton = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--grayish-blue);
  cursor: pointer;

  ${props => props.selected && css`
    font-weight: 700;
    border: 2px solid var(--grayish-blue);
    border-radius: 5px;
    text-decoration: underline;
  `}
`

const PageNavigatorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--grayish-blue);
  cursor: pointer;
`

export const Pagination = () => {
    const selectedPageNumber = useSelector((state: RootState) => state.pagination.selectedPageNumber);
    const postCounter = useSelector((state: RootState) => state.pagination.postCounter);
    const dispatch = useDispatch();
    const pages = useMemo(() => Array.from(Array(Math.ceil(postCounter / POSTS_PER_PAGE)).keys()), [postCounter]);

    const pageClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetDiv = event.target as HTMLDivElement;
        dispatch(setPageNumber(Number(targetDiv.dataset["pageNumber"])))
    }

    const navigatorClickHandler = (move: "start" | "end") => {
        if (move === "start") dispatch(setPageNumber(0));
        if (move === "end") dispatch(setPageNumber(pages.length - 1));
    }

    const setVisiblePages = () => {

        const visiblePagesNumbers: any[] = []

        if (pages.length > VISIBLE_PAGES_NUM) {
            for (let i = selectedPageNumber - Math.floor(VISIBLE_PAGES_NUM / 2); i < selectedPageNumber + Math.floor(VISIBLE_PAGES_NUM / 2) + 1; i++) {
                visiblePagesNumbers.push(i);
            }
            visiblePagesNumbers.filter(item => item < 0).forEach(item => {
                visiblePagesNumbers.shift()
                visiblePagesNumbers.push(VISIBLE_PAGES_NUM + item);
            });
            visiblePagesNumbers.filter(item => item > pages.length - 1).reverse().forEach(item => {
                visiblePagesNumbers.pop();
                visiblePagesNumbers.unshift(item - VISIBLE_PAGES_NUM);
            });

        } else {
            if (pages.length > 1) {
                for (let i = 0; i < pages.length; i++) {
                    visiblePagesNumbers.push(i);
                }
            }
        }

        const visiblePages = visiblePagesNumbers.map(item => {
            return <PageButton key={item} selected={item === selectedPageNumber} data-page-number={item}
                               onClick={pageClickHandler}>{item + 1}</PageButton>
        });
        visiblePages.push(<PageNavigatorButton
            onClick={(event) => navigatorClickHandler("end")}>{">>"}</PageNavigatorButton>)

        if (visiblePagesNumbers[0] >= 1) {
            visiblePages.unshift(<PageNavigatorButton
                onClick={(event) => navigatorClickHandler("start")}>{"<<"}</PageNavigatorButton>)
        }
        if (visiblePagesNumbers.at(-1) >= pages.length - 1) {
            visiblePages.pop();
        }

        return visiblePages;
    }

    return (
        <>
            {setVisiblePages()}
        </>
    );
};
