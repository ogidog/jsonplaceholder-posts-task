import {IPost} from "entities/post/model/types";
import {Dispatch, useMemo} from "react";
import {IState as ISortState} from "features/sort-by-title/model/slice";
import {AnyAction} from "@reduxjs/toolkit";
import {setPageNumber, setPostCounter} from "features/pagination/model/slice";

export const useSearchByTitle = (data: IPost[] | undefined, searchText: string, dispatch: Dispatch<AnyAction>, isLoading: boolean, isUninitialized: boolean) => {
    const filteredData = useMemo(() => {

        if (!data) {
            return [];
        }

        if (searchText && data) {
            const filteredData = data.filter(item => item.title.includes(searchText));
            dispatch(setPostCounter(filteredData.length));
            dispatch(setPageNumber(0));
            return filteredData;

        } else {
            dispatch(setPostCounter(data.length));
            return data;
        }
    }, [searchText, isLoading, isUninitialized]);

    return filteredData;
}

export const useSortByTitle = (data: IPost[] | undefined, sortOrder: ISortState["order"], dataLength: number, isLoading: boolean, isUninitialized: boolean) => {
    const sortedData = useMemo(() => {

        if (data) {
            if (sortOrder === "Asc") {
                const dataCopy = [...data];
                return dataCopy.sort((a, b) => {
                    return (a.title < b.title) ? -1 : a.title > b.title ? 1 : 0;
                });
            }
            if (sortOrder === "Desc") {
                const dataCopy = [...data];
                return dataCopy.sort((a, b) => {
                    return (a.title < b.title) ? 1 : a.title > b.title ? -1 : 0;
                });
            }

            return data;

        } else {
            return [];
        }

    }, [sortOrder, dataLength, isLoading, isUninitialized]);

    return sortedData;
}
