import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageLandingContainer = dynamic(() => import('@/containers/PageLandingContainer'), {
    ssr: false,
});

const Daftar: NextPage = () => {


    return (
        <>
            <Head>
            <title>Qur&rsquo;an Verse Learning Center - Les Ngaji Bandung</title>
            </Head>
            <PageLandingContainer />
        </>
    )
}

export default Daftar

