import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import {FeatureImageWraper} from "../elements"

export const FeatureImage = ({fixed}) => {

    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "office.jpg"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)
    return (
        <FeatureImageWraper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed} style={{
                position: "relative",
                left: 0,
                top:0,
                width: "100%",
                height: "100%"
            }}/>
        </FeatureImageWraper>
    )

}