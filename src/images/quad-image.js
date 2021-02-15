import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const QuadImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "quard-graphs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1490) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default QuadImage
