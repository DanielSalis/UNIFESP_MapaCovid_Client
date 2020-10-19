import styled from "styled-components";
import { media } from "../../../../media";

export const Container = styled.div`
  background: #1890ff !important;
  border-radius: 20px;
  padding: 0 10px;
  color: #fff;
  min-width: 4rem;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #c4c4c4;
  margin: 0 1rem 0 1rem;

  label {
    margin: 0 10px;
  }

  div {
    margin: 0 0 0 6px;
    width: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
  }

  ${media.mobile`
  margin: 0 1rem 0.2rem 1rem;
`}
`;
