// @flow
import * as React from 'react';
import styled from "styled-components";
import {ChangeEvent} from "react";
import {setSearchText} from "../model/slice";
import {useDispatch} from "react-redux";

const Input = styled.input`
  height: 36px;
  width: 250px;
  outline: none;
  text-indent: 10px;

  border: 2px solid var(--grayish-blue);
  border-radius: 7px;

  &::placeholder {
    font-family: 'Rubik', sans-serif;
    color: var(--very-dark-gray);
    font-size: var(--font-size-large);
  }
`

export const SearchByTitle = () => {
    const dispatch = useDispatch();

    const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(event.target.value))
    }

    return (
        <Input placeholder={"Search by title"} type={"text"} onChange={changeHandle}/>
    );
};
