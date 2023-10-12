"use client"
import Link from 'next/link';
import * as S from './style';

export default function Home() {
  return <S.Main>
    <h1>Welcome page!</h1>
    <Link href={'/chat'}>Go to Chat</Link>
    <Link href={'/handtracking'}>Go to handtracking</Link>
  </S.Main>
}
