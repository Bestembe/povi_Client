import { styled } from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: end;
  padding: 10px 0;
  width: 100%;
  svg{
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid gray;
    /* margin-left: -10px; */
    margin-right: 10px;
  }
  .message{
    border: 1px solid gray;
    border-radius: 20px;
    /* position: absolute; */
    padding: 20px;
    font-size: 20px;
    max-width: 600px;
    display: inline-block;
  }
`