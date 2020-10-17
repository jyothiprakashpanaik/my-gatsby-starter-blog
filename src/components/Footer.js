import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        facebook: file(relativePath: {eq: "facebook.svg"}) {

            publicURL
        }
        linkedin: file(relativePath: {eq: "linkedin.svg"}) {

            publicURL
        }
        instagram: file(relativePath: {eq: "instagram.svg"}) {

            publicURL
        }
        twitter: file(relativePath: {eq: "twitter.svg"}) {

            publicURL
        }
    }

    `)

    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook Logo"></img>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={data.linkedin.publicURL} alt="Facebook Logo"></img>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="Instagram Logo"></img>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter Logo"></img>
                </a>
            </FooterSocialIcons>
            <p>© 2020 JyothiPrakash.All right reseved.</p>
        </FooterSocialWrapper>
    </FooterWrapper>
}