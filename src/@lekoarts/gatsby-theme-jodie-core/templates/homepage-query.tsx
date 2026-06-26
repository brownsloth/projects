import { graphql } from "gatsby"
import HomepageComponent, { Head } from "@lekoarts/gatsby-theme-jodie/src/components/homepage"

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($homepagePageLimit: Int!, $homepageProjectLimit: Int!) {
    pages: allPage(sort: { title: ASC }, limit: $homepagePageLimit) {
      nodes {
        slug
        title
        __typename
      }
    }
    projects: allProject(sort: { date: DESC }, limit: $homepageProjectLimit) {
      nodes {
        slug
        title: shortTitle
        category
        date(formatString: "YYYY-MM-DD")
        excerpt
        __typename
      }
    }
  }
`
