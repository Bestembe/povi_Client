'use client'

import React, { useState } from 'react';
import * as S from "./style"
import Logo from "../../asset/Logo.svg"
import Link from 'next/link';

const Suggest = () => {
    const TagList = ['near cafe','near resturant','near convenience store']
    const ImgNumberList = Array(18).fill().map((v,i)=>i+1)
    const [isActiveTagList,setIsActiveTagList] = useState([true,false,false])

    return (
        <S.SuggestLayout>
            <S.LogoImg src={Logo} />
            <S.ContentBox>
                <S.CategoryBox>
                    {
                        TagList.map((data,idx)=>(
                            <>
                                <S.CategoryTag isActive={isActiveTagList[idx]}>{data}</S.CategoryTag>
                                {idx !== 2 && <S.CategoryPatition/>}
                            </>
                        ))
                    }
                </S.CategoryBox>
                <S.PlaceImgBox>
                    {
                        ImgNumberList.map((data)=>(
                            <Link
                                key={data} 
                                href={`/suggest/${data}`}
                            >
                                <S.PlaceImg 
                                    src={require(`../../asset/instaPicDum${data}.svg`)} 
                                    width={250} 
                                    height={250}
                                />
                            </Link>
                        ))
                    }
                </S.PlaceImgBox>
            </S.ContentBox>
        </S.SuggestLayout>
    );
};

export default Suggest;