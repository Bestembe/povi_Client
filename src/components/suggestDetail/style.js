import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import Image from "next/image";
import styled from "styled-components";

export const SuggestLayout = styled.div`
    padding: 1vw 3vw ;

    // min-width: 100vw;
    // min-height: 100vh;
`

export const LogoImg = styled(Image)``

export const ContentBox = styled.div`
    padding: 1vw 4vw;

`

export const CategoryBox = styled.div`
    display: flex;

`

export const CategoryTag = styled.div`
    color: ${(props)=> props.isActive ? "#000" : "#A8A8A8"} ;
    font-family: Pretendard;
    font-size: 1.875rem;
    font-weight: ${(props)=> props.isActive ? "700" : "400"};
`

export const CategoryPatition = styled.div`
    margin: 0 1.8rem;
    width: 3px;
    height: 36px;
    background-color: #D9D9D9;
`

export const AllInforox = styled.div`
    margin-top: 2vw;

    width: 100%;
    height: 40vw;
    border: 3px solid #A8A8A8;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PostBox = styled.div`
    width: 500px;
    height: 90%;

    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
`

export const PostHeader = styled.div`
    padding: 0 5%;
    background-color: #fff;

    height: 12%;

    display: flex;
    align-items: center;
`

export const PostHeaderWriter = styled.div`
    margin-left: 5%;

    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
`

export const PostImage = styled(Image)`
    width: 100%;
`

export const PostInfoBox = styled.div`
    padding: 3% 5%;

    position: relative;
`

export const PostInfoTitleText = styled.div`
    color: #A8A8A8;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
`

export const PostInfoContentText = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 300;

    margin-bottom: 3%;
`

export const PostInfoDateText = styled.div`

    color: #A8A8A8;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-weight: 300;

`

export const DevideLine = styled.div`
    width: 3px;
    height: 90%;

    background-color: #D9D9D9;
`

export const Map = styled.div`
    width: 40%;
    height: 90%;

    background-color: #D9D9D9;
`