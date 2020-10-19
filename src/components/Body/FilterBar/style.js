import styled from "styled-components";
import { media } from "../../../media";

export const Container = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    border-top: 3px solid #bbb;
  }

  ${media.mobile`
  width: 100%;
  height: auto;
`}
`;

export const BottomDiv = styled.div`
  background: #1976d252;
  width: -webkit-fill-available;
  padding: 10px 10px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  input {
    cursor: pointer;
    margin: 0 10px 0 0;
    border-radius: 50px;
    padding: 0 10px;

    ${media.mobile`
    padding: 0 10px;
    margin: 10px;
    width: -webkit-fill-available;
    `}
  }

  label {
    cursor: pointer;
  }

  div {
    cursor: pointer;
    margin: 0 1.5rem;
    min-width: 100px;
  }

  datalist {
    cursor: pointer;
    margin: 0 1rem;
  }

  ${media.mobile`
  display: block;
`}
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: grey;
  padding-bottom: 2px;
`;

export const UpperDiv = styled.div`
  padding-bottom: 1%;
  height: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UpperDivLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.mobile`
  display: block;
`}
`;

export const FilterButton = styled.div`
  height: 100%;
  width: 58%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  button {
    border-radius: 50px;
    padding: 5px 20px;
    border: none;
    background-color: #1976d2;
    color: #fff;
    /* border: 0.5px solid black; */
  }

  button:focus {
    outline: none;
  }

  ${media.mobile`
  height: auto;
  width: fit-content;
  margin: auto !important;
`}
`;
