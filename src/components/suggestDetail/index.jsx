'use client'

import React, { useState,useEffect } from 'react';
import * as S from "./style"
import Logo from "../../asset/Logo.svg"
import Image from 'next/image';
import KakaoMap from '../KakaoMap';
import { useRouter } from 'next/navigation';
import Speech from 'speak-tts';
import {cafeInfo, resturantInfo, convenienceInfo} from "../../Constant/ImgDummyInfo"
import MapImage from '../../asset/mapImg.jpg'

const SuggestDetail = ({params}) => {
    const {kakao} = window;
    const TagList = ['near cafe','near resturant','near convenience store']
    const ImgNumberList = Array(18).fill().map((v,i)=>i+1)
    const [isActiveTagList,setIsActiveTagList] = useState([true,false,false])
    const router = useRouter()
    const speech = new Speech()
    const paramNum = params.slug.slice(-1)

    useEffect(()=>{
        console.log(params.slug.slice(0,9))
        speechTTS()
    },[])
    
    const speechTTS = async() => {
        await speech.init({
            lang: "ko-KR",
            voice:"Google UK English Female"
        })

        if(params.slug.slice(0,4) === 'cafe'){
            await speech.speak({
                text: `This is ${cafeInfo[paramNum].name}. The adress is ${cafeInfo[paramNum].address}. The number is ${cafeInfo[paramNum].tel}. We go back to the beginning soon.`,
                queue: false
            }).then(()=>{
                goMain()
            }) 
        } else if(params.slug.slice(0,9) === 'resturant'){
            await speech.speak({
                text: `This is ${resturantInfo[paramNum].name}. The adress is ${resturantInfo[paramNum].address}. The number is ${resturantInfo[paramNum].tel}. We go back to the beginning soon.`,
                queue: false
            }).then(()=>{
                goMain()
            }) 
        } else {
            await speech.speak({
                text: `This is ${convenienceInfo[paramNum].name}. The adress is ${convenienceInfo[paramNum].address}. The number is ${convenienceInfo[paramNum].tel}. We go back to the beginning soon.`,
                queue: false
            }).then(()=>{
                goMain()
            }) 
        }
    }
    
    const goMain = setTimeout(()=>{
        router.push('/')
    },20000)

    /* useEffect(()=>{
        kakao.maps.load(() => KakaoMap(lat=35.094770, lng=129.039182))
    },[]) */

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
                        {
                            params.slug.slice(0,4) === 'cafe' &&
                            <>
                                <S.PostImage src={require(`../../asset/${params.slug}.jpg`)} width={500}/>
                                <S.PostInfoBox>
                                    <S.PostInfoTitleText>Name</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{cafeInfo[paramNum].name}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Address</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{cafeInfo[paramNum].address}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Tel</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{cafeInfo[paramNum].tel}</S.PostInfoContentText>
                                    <S.PostInfoDateText>2023.10.13</S.PostInfoDateText>
                                </S.PostInfoBox>
                            </>
                        }

                        {
                            params.slug.slice(0,9) === 'resturant' &&
                            <>
                                <S.PostImage src={require(`../../asset/${params.slug}.jpg`)} width={500}/>
                                <S.PostInfoBox>
                                <S.PostInfoTitleText>Name</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{resturantInfo[paramNum].name}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Address</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{resturantInfo[paramNum].address}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Tel</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{resturantInfo[paramNum].tel}</S.PostInfoContentText>
                                    <S.PostInfoDateText>2023.10.13</S.PostInfoDateText>
                                </S.PostInfoBox>
                            </>
                        }

                        {
                            params.slug.slice(0,11) === 'convenience' &&
                            <>
                                <S.PostImage src={require(`../../asset/${params.slug}.jpg`)} width={500}/>
                                <S.PostInfoBox>
                                    <S.PostInfoTitleText>Name</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{convenienceInfo[paramNum].name}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Address</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{convenienceInfo[paramNum].address}</S.PostInfoContentText>
                                    <S.PostInfoTitleText>Tel</S.PostInfoTitleText>
                                    <S.PostInfoContentText>{convenienceInfo[paramNum].tel}</S.PostInfoContentText>
                                    <S.PostInfoDateText>2023.10.13</S.PostInfoDateText>
                                </S.PostInfoBox>
                            </>
                        }
                    </S.PostBox>
                    <S.DevideLine/>
                    <Image src={MapImage} width={700} height={714} alt='mapImage'/>
                    {
                        /*
                        {
                            params.slug.slice(0,4) === 'cafe' &&
                            <KakaoMap lat={cafeInfo[paramNum].latitude} lng={cafeInfo[paramNum].longitude}/>
                        }
    
                        {
                            params.slug.slice(0,9) === 'resturant' &&
                            <KakaoMap lat={resturantInfo[paramNum].latitude} lng={resturantInfo[paramNum].longitude}/>
                        }
    
                        {
                            params.slug.slice(0,11) === 'convenience' &&
                            <KakaoMap lat={convenienceInfo[paramNum].latitude} lng={convenienceInfo[paramNum].longitude}/>
                        }*/
                    }
                </S.AllInforox>
            </S.ContentBox>
        </S.SuggestLayout>
    );
};

export default SuggestDetail;