'use client'

import React, { useState,useEffect } from 'react';
import * as S from "./style"
import Logo from "../../asset/Logo.svg"
import Image from 'next/image';
import KakaoMap from '../KakaoMap';
import { useRouter } from 'next/navigation';

const SuggestDetail = ({params}) => {
    const TagList = ['near cafe','near resturant','near convenience store']
    const ImgNumberList = Array(18).fill().map((v,i)=>i+1)
    const [isActiveTagList,setIsActiveTagList] = useState([true,false,false])
    const router = useRouter()

    return (
        <S.SuggestLayout>
            
            <S.LogoImg src={Logo} />
            <S.ContentBox>
                <S.CategoryBox>
                    {
                        TagList.map((data,idx)=>(
                            <>
                                <S.CategoryTag 
                                    onClick={()=>{router.push('/suggest')}}
                                    isActive={isActiveTagList[idx]}
                                >{data}</S.CategoryTag>
                                {idx !== 2 && <S.CategoryPatition/>}
                            </>
                        ))
                    }
                </S.CategoryBox>
                <S.AllInforox>
                    <S.PostBox>
                        <S.PostHeader>
                            <Image src={Logo} width={40} height={40}/>
                            <S.PostHeaderWriter>POVI</S.PostHeaderWriter>
                        </S.PostHeader>
                        <S.PostImage src={require(`../../asset/instaPicDum${params.slug}.svg`)} width={500}/>
                        <S.PostInfoBox>
                            <S.PostInfoTitleText>Address</S.PostInfoTitleText>
                            <S.PostInfoContentText>82 Bongraenaru-ro, Yeongdo-gu, Busan</S.PostInfoContentText>
                            <S.PostInfoTitleText>Tel</S.PostInfoTitleText>
                            <S.PostInfoContentText>+82-51-790-1500</S.PostInfoContentText>
                            <S.PostInfoDateText>2023.10.13</S.PostInfoDateText>
                        </S.PostInfoBox>
                    </S.PostBox>
                    <S.DevideLine/>
                    <KakaoMap/>
                </S.AllInforox>
            </S.ContentBox>
        </S.SuggestLayout>
    );
};

export default SuggestDetail;