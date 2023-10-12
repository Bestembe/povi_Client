'use client'
import { useRouter } from 'next/router';
import React from 'react';
import SuggestDetail from "../../../components/suggestDetail/index"

/* export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
} */

export default function SuggestDetailPage ({params}) {
    // const router = useRouter()

    return (
        <SuggestDetail params={params}/>
    );
};
