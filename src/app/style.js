import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const Main = styled.div`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  font-family: 'Pretendard-Regular';
`

export const MainBackground = styled(Image)`
  position: absolute;
`

export const ChatLink = styled(Link)`
  width: 28.125rem;
  height: 5rem;

  border: 1px solid #000;

  position: absolute;
  border: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-decoration: none;
  font-family: Pretendard;
  font-size: 1.875rem;
  font-weight: 300;

  position: absolute;
  left: 17%;
  bottom: 10%;
`

export const SuggestLink = styled(Link)`
  width: 28.125rem;
  height: 5rem;

  background: #000;

  position: absolute;
  right: 17%;
  bottom: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #FFF;
  text-decoration: none;
  font-family: Pretendard;
  font-size: 1.875rem;
  font-weight: 300;
`

export const KeyInput = styled.input`
  outline: none;
  border: none;
  color: transparent;
`