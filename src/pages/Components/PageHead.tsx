import Head from "next/head";
import react from "react";

const HomeHead = () => {
    return (
        <Head>
            <title>Rishabh's Blog</title>
            <meta name="description" content="Welcome to personal blog of Rishabh Gupta, here I share my thoughts and experiences on new technologies or work experiences (basically ranting)." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HomeHead;