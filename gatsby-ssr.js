import React from 'react'
import Layout from './src/components/layout'
import { GlobalStyle } from "./src/global/globalStyle"
require('@openfonts/big-shoulders-display_all')
require("typeface-monoton")


export const wrapPageElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            <Layout>{element}</Layout>
        </>
    )
}