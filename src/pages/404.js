import React from "react"
import {graphql} from "gatsby"
import { Container, Content, FetureImage} from "../components"
import {H1} from "../elements"

const notFound = ({data}) => {
    const featureImage = data.imageSharp.fixed

    return (
        <Container>
            <FetureImage fixed={featureImage}/>
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    {" "}
                    Uh-oh... What you're looking for couldn't be found.
                </H1>
            </Content>
        </Container>
    )

}

export default notFound

export const notFoundQuery = graphql`
    query NotFoundQueary {
        imageSharp(fixed: { originalName: { eq: "saddog.jpg"}}) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }


`