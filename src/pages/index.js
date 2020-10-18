import React from "react"
import { Container, FeatureImage,Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard 
        date="October 17, 2020" 
        title="My First Post! Hello World!" 
        excerpt="Build this day on a foundation of pleasant thoughts. Never fret at any imperfections that you fear may impede your progress. Remind yourself, as often as necessary, that you are a creature of God and have the power to achieve any dream by lifting up your thoughts. You can fly when you decide that you can. Never consider yourself defeated again. Let the vision in your heart be in your life's blueprint. Smile!" 
        slug="/test" />
      </Content>
  </Container>
  )
}
export default IndexPage