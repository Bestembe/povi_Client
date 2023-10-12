"use client"
import React, { use, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import MainDesign from "../asset/Main.svg"
import Image from 'next/image';
import Speech from 'speak-tts'
import { useRouter } from 'next/navigation';

export default function Home() {
  const keyInputRef = useRef()
  const [keyInputValue,setKeyInputValue] = useState('')
  const speech = new Speech()
  const router = useRouter()

  const speechInit = async() => {
    await speech.init({
        lang: "ko-KR",
        voice:"Google UK English Female"
    })

    await speech.speak({
        text: `hello. This is a tourist information kiosk. You can use a mouse and, if you are a blind person, you can use the buttons. If you have any questions, please press 1, or if you would like a recommendation for a nearby place, please press 2.`,
        queue: false
    })
  }

  // 키보드 검사하고 맞으면 이벤트 아니면 지우기
  const handleKeyPress = (e) => {
    if(e.target.value === 'z'){
      router.push('/chat')
      speech.pause()
    } else if(e.target.value === 'v'){
      router.push('/suggest')
      speech.pause()
    } 
  }

  useEffect(()=>{
    keyInputRef.current.focus()
    speechInit()
  },[])

  return(
    <>
      <S.MainBackground src={MainDesign} width='1920' height='1080' alt='mainDesign'/>
      <S.ChatLink href={'/chat'} onClick={()=>speech.pause()}>Let’s find a route or place</S.ChatLink>
      <S.SuggestLink href={'/suggest'} onClick={() => speech.pause()}>Let’s check our trands</S.SuggestLink>
      <S.KeyInput ref={keyInputRef} onChange={handleKeyPress} value={keyInputValue}/>
    </>
  )
}

  // return <S.Main>
  //   <h1>Welcome page!</h1>
  //   <Link href={'/chat'}>Go to Chat</Link>
  //   <Link href={'/handtracking'}>Go to handtracking</Link>
  //   <br/>
  //   <Link href={'/suggest'}>Go to suggest</Link>
  // </S.Main>