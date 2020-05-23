import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BannerImage: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bannerImage: file(relativePath: { eq: "bannerImage.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      render={(data) => <Img fluid={data.bannerImage.childImageSharp.fluid} />}
    />
  );
};

export default BannerImage;
