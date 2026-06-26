import { graphql } from "gatsby"
import ProjectsComponent, { Head } from "@lekoarts/gatsby-theme-jodie/src/components/projects"

export default ProjectsComponent

export { Head }

export const query = graphql`
  {
    projects: allProject(sort: { date: DESC }) {
      nodes {
        shortTitle
        slug
        category
        date(formatString: "YYYY-MM-DD")
        excerpt
      }
    }
  }
`
