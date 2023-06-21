// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "app/store/store";
import {setOrder} from "../model/slice";
import UnSortIcon from "../assets/images/unsort.svg";
import SortAscending from "../assets/images/sort-ascending.svg";
import SortDescending from "../assets/images/sort-descending.svg";
import styled from "styled-components";
import {IState as ISortState} from "../model/slice";

const Image = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`

const orderImages: { [key in ISortState["order"]]: any } = {
    "UnSort": SortAscending,
    "Asc": SortDescending,
    "Desc": UnSortIcon
}

type IProps = {
    order: ISortState["order"],
    onClick: (event?: React.MouseEvent<HTMLImageElement>) => void,
}

export const SortByTitle = () => {
    const order = useSelector((state: RootState) => state.sort.order);
    const dispatch = useDispatch();

    const sortPosts = () => {
        if (order === "UnSort") {
            dispatch(setOrder("Asc"));
        }
        if (order === "Asc") {
            dispatch(setOrder("Desc"));
        }
        if (order === "Desc") {
            dispatch(setOrder("UnSort"));
        }
    }

    return (
        <Image src={orderImages[order]} alt={order} onClick={sortPosts}/>
    );
};
