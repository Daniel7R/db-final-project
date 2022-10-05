import Head from 'next/head';
import React from 'react'

interface Props {
    title: string
}

export const Seo = (props: Props) => {
    const { title } = props;
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="SQL DATABASES NEXT.JS" />
        </Head>
    )
}
