"use client"
import Link from 'next/link';
import * as S from './style';
import MainDesign from "../asset/Main.svg"
import Image from 'next/image';

export default function Home() {

  return(
    <>
      <S.MainBackground src={MainDesign} width='1920' height='1080' alt='mainDesign'/>
      <S.ChatLink href={'/chat'}>Let’s find a route or place</S.ChatLink>
      <S.SuggestLink href={'/suggest'}>Let’s check our trands</S.SuggestLink>
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