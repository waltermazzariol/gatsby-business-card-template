import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_description
    ua
    lang
  }
}`

export const heroFields = graphql`
fragment heroFields on DataJson {
  hero {
    image {
        publicURL
    }
    subtitle
    title
    image_profile {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        resize {
          width
          height
        }
      }
    }
    socialmedia {
      link
      name
    }
  }
}`

export const tagsFields = graphql`
fragment tagsFields on DataJson {
  tags {
    cookie_accept
    cookie_message
    not_found_title
    not_found_message
    not_found_btn
  }
}`