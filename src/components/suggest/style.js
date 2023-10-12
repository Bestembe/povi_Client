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

export const PlaceImgBox = styled.div`
    margin-top: 2vw;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const PlaceImg = styled(Image)`
    margin-bottom: 30px;
`

export const KeyInput = styled.input`
    outline: none;
    border: none;
    color: transparent;
`
