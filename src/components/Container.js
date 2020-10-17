import React from 'react'
import { ConstainerWrapper } from "../elements"
import {Nav,Footer} from "../components"

export const Container = ({children}) => {
    return (
    <ConstainerWrapper>
        <Nav/>
        {children}
        <Footer/>        
    </ConstainerWrapper>
    )
}