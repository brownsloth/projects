/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import EngagementShowcase, { type Engagement } from "../../../components/engagement-showcase"

const DEMO_BY_SLUG: Record<string, string> = {
  "/quote-memory-fuzzy-subtitle-search-across-tv-shows": `/quote-memory/`,
  "/quote-memory-fuzzy-subtitle-search-across-tv-shows/": `/quote-memory/`,
  "/hindi-jinnie-english-to-hindi-translation": `/hindi-jinnie/`,
  "/hindi-jinnie-english-to-hindi-translation/": `/hindi-jinnie/`,
  "/paperlens-pdf-highlight-annotate": `/paperlens/`,
  "/paperlens-pdf-highlight-annotate/": `/paperlens/`,
}

export type JodieProjectsProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      category: string
      date: string
      excerpt: string
    }[]
  }
}

const Projects: React.FC<PageProps<JodieProjectsProps>> = ({ data: { projects } }) => {
  const engagements: Engagement[] = projects.nodes.map((p) => ({
    slug: p.slug,
    title: p.shortTitle,
    category: p.category,
    date: p.date,
    excerpt: p.excerpt,
    demoHref: DEMO_BY_SLUG[p.slug],
  }))

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        Work
      </h1>
      <section className="hero-manifesto" sx={{ pb: `2rem !important` }}>
        <p className="eyebrow">Portfolio</p>
        <h2 className="display-headline" style={{ fontSize: `clamp(2rem, 4vw, 3rem)` }}>
          <span className="display-line">Selected</span>
          <span className="display-line display-line--accent">engagements</span>
        </h2>
        <p className="lead">
          Each project represents a capability delivered — benchmarks, systems, and live demos built to
          demonstrate what works, not what sounds good in a meeting.
        </p>
      </section>
      {engagements.length > 0 ? (
        <EngagementShowcase projects={engagements} showIntro={false} />
      ) : (
        <div sx={{ padding: 4, color: `textMuted` }}>No projects found.</div>
      )}
    </Layout>
  )
}

export default Projects

export const Head: HeadFC<JodieProjectsProps> = ({ location }) => (
  <Seo title="Work — Selected Engagements" pathname={location.pathname} />
)
