'use client'

import React, { use, useEffect, useRef, useState } from 'react';
import * as S from "./style"
import Logo from "../../asset/Logo.svg"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Speech from 'speak-tts'
import { async } from 'regenerator-runtime';
import {cafeInfo, resturantInfo, convenienceInfo} from "../../Constant/ImgDummyInfo"

const Suggest = () => {
    const TagList = ['near cafe','near resturant','near convenience store']
    const ImgNumberList = Array(10).fill().map((v,i)=>i)
    const [isActiveTagList,setIsActiveTagList] = useState([true,false,false])
    const router = useRouter()

    // 장애인용 값
    const keyInputRef = useRef()
    const [keyInputValue,setKeyInputValue] = useState('')
    const [selectPostValue,setSelectPostValue] = useState(1)

    // 장애인용 tts
    const speech = new Speech()

    // z == 1, b == 2, m == 3, / == 4

    // 키보드 검사하고 맞으면 이벤트 아니면 지우기
    const handleKeyPress = (e) => {
        if(e.target.value === 'z'){
            setIsActiveTagList([false,true,false])
        } else if(e.target.value === 'v'){
            setIsActiveTagList([false,false,true])
        } 

         if(e.target.value === 'm'){
            router.push(`/suggest/${selectPostValue}`)
        } else if(e.target.value === '/'){
            setSelectPostValue((prev)=>prev+1)
        }
    }

    useEffect(()=>{
        keyInputRef.current.focus()
        speechInit()
    },[])
    
    const speechInit = async() => {
        await speech.init({
            lang: "ko-KR",
            voice:"Google UK English Female"
        })

        await speech.speak({
            text: `This is a nearby cafe recommendation page. If you want to be recommended a nearby restaurant, press number 1. If you want to be recommended a nearby convenience store, press number 2. The first recommended cafe is ${cafeInfo[0].name}. If you want detailed information, press number 3, or if you want to recommend another cafe, press number 4.`,
            queue: false
        })
    }

    useEffect(()=>{
        console.log(keyInputValue)
    },[keyInputValue])

    return (
        <S.SuggestLayout>
            <S.LogoImg src={Logo} alt='로고' />
            <S.ContentBox>
                <S.CategoryBox>
                    {
                        TagList.map((data,idx)=>(
                            <>
                                <S.CategoryTag key={idx} isActive={isActiveTagList[idx]}
                                    onClick={()=>{
                                        if(idx === 1){
                                            setIsActiveTagList([false,true,false])
                                        } else if(idx === 2){
                                            setIsActiveTagList([false,false,true])
                                        } else if(idx === 0){
                                            setIsActiveTagList([true,false,false])
                                        }
                                    }}
                                >{data}</S.CategoryTag>
                                {idx !== 2 && <S.CategoryPatition/>}
                            </>
                        ))
                    }
                </S.CategoryBox>

                {isActiveTagList[0] && 
                    <S.PlaceImgBox>
                        {
                            ImgNumberList.map((data)=>(
                                <Link
                                    key={data} 
                                    href={`/suggest/cafe${data}`}
                                >
                                    <S.PlaceImg 
                                        onClick={()=>{
                                            speech.pause();
                                        }}
                                        src={require(`../../asset/cafe${data}.jpg`)} 
                                        width={250} 
                                        height={250}
                                        alt='이미지 데이터'
                                    />
                                </Link>
                            ))
                        }
                    </S.PlaceImgBox>
                }

                {isActiveTagList[1] && 
                    <S.PlaceImgBox>
                        {
                            ImgNumberList.map((data)=>(
                                <Link
                                    key={data} 
                                    href={`/suggest/resturant${data}`}
                                >
                                    <S.PlaceImg 
                                        onClick={()=>{
                                            speech.pause();
                                        }}
                                        src={require(`../../asset/resturant${data}.jpg`)} 
                                        width={250} 
                                        height={250}
                                        alt='이미지 데이터'
                                    />
                                </Link>
                            ))
                        }
                    </S.PlaceImgBox>
                }

                {isActiveTagList[2] && 
                    <S.PlaceImgBox>
                        {
                            ImgNumberList.map((data)=>(
                                <Link
                                    key={data} 
                                    href={`/suggest/convenience${data}`}
                                >
                                    <S.PlaceImg 
                                        onClick={()=>{
                                            speech.pause();
                                        }}
                                        src={require(`../../asset/convenience${data}.jpg`)} 
                                        width={250} 
                                        height={250}
                                        alt='이미지 데이터'
                                    />
                                </Link>
                            ))
                        }
                    </S.PlaceImgBox>
                }



            </S.ContentBox>
            <S.KeyInput ref={keyInputRef} onChange={handleKeyPress} value={keyInputValue}/>
        </S.SuggestLayout>
    );
};

export default Suggest;