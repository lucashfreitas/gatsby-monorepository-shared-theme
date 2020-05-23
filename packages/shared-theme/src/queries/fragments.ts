import { graphql } from 'gatsby';

export const fluidImageFragment = graphql`
  fragment FluidImage on File {
    publicURL
    childImageSharp {
      fluid(quality: 100, maxWidth: 2160) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
