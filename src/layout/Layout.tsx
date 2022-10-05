import React from 'react'

import { Header, Footer } from '@components/.';

type Props = {
    children: JSX.Element
}


export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
