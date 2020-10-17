import React from 'react'
import { ConstainerWrapper } from "../elements"
import {Nav} from "../components"

export const Container = ({children}) => {
    return <ConstainerWrapper>
        <Nav/>
        {children}
    </ConstainerWrapper>
}