import { styled } from "styled-components";

export const Back = styled.div`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  font-family: 'Pretendard-Regular';
  display: flex;
  justify-content: center;
  margin-top: -8px;
  width: calc(100vw - 8px);
`

export const Main = styled.div`
  width: 980px;
`

export const Header = styled.div`
  display: flex;
  height: 130px;
  align-items: center;
  border: 1px solid black;
  border-top: none;
  svg{
    padding: 30px;
  }
  .content{
    b{
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
  .circle{
    position: absolute;
    margin-left: 900px;
    border: 1px solid black;
    border-radius: 100px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
  }
`

export const ChatList = styled.div`
margin: auto;
  .timeline{
    margin-top: 30px;
    text-align: center;
  }
  height: 80vh;
  overflow-y:scroll;
  width: 1000px;
  /* display: flex; */
  /* flex-direction: column; */
`