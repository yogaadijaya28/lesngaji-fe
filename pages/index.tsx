import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageHomeContainer = dynamic(() => import('@/containers/PageLandingContainer'), {
    ssr: false,
});

const Index: NextPage = () => {

    return (
        <>
            <Head>
                <title>Qur&rsquo;an Verse Learning Center - Les Ngaji Bandung</title>
            </Head>
            <PageHomeContainer />
        </>
    )
}

export default Index
