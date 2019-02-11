import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Sketchbook = () => (
  <StaticQuery
    query={graphql`
      query {
        sketchbookImages: allFile(filter: { sourceInstanceName: { eq: "sketchbook" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox sketchbookImages={data.sketchbookImages.edges} />}
  />
)
export default Sketchbook