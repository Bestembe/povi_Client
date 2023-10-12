'use client'

import React, { use, useEffect, useRef, useState } from 'react';
import * as S from "./style"
import Logo from "../../asset/Logo.svg"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Speech from 'speak-tts'
import { async } from 'regenerator-runtime';

const Suggest = () => {
    const TagList = ['near cafe','near resturant','near convenience store']
    const ImgNumberList = Array(18).fill().map((v,i)=>i+1)
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
            console.log('m')
            router.push(`/suggest/${selectPostValue}`)
        } else if(e.target.value === '/'){
            console.log('/')
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
            voice:"Google 한국의"
        })

        await speech.speak({
            text: '근처 카페 추천 페이지입니다. 근처 식당을 추천받고 싶으시면 일번, 근처 편의점을 추천받고 싶으시면 이번 버튼을 눌러주세요. 첫 번째 추천 카페는 미리트리입니다. 세부 정보를 원하시면 삼번, 다른 카페 추천을 원하시면 사번을 눌러주세요.',
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
                                    onClick={()=>{
                                        speech.pause();
                                    }}
                                    src={require(`../../asset/instaPicDum${data}.svg`)} 
                                    width={250} 
                                    height={250}
                                    alt='이미지 데이터'
                                />
                            </Link>
                        ))
                    }
                </S.PlaceImgBox>
            </S.ContentBox>
            <S.KeyInput ref={keyInputRef} onChange={handleKeyPress} value={keyInputValue}/>
        </S.SuggestLayout>
    );
};

export default Suggest;