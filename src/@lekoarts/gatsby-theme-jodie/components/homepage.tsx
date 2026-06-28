/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import modifyGrid from "../utils/modify-grid"
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import EngagementShowcase, { type Engagement } from "../../../components/engagement-showcase"
import AiReleaseTrackerPanel from "../../../components/ai-release-tracker-panel"

const DEMO_BY_SLUG: Record<string, string> = {
  "/quote-memory-fuzzy-subtitle-search-across-tv-shows": `/quote-memory/`,
  "/quote-memory-fuzzy-subtitle-search-across-tv-shows/": `/quote-memory/`,
  "/hindi-jinnie-english-to-hindi-translation": `/hindi-jinnie/`,
  "/hindi-jinnie-english-to-hindi-translation/": `/hindi-jinnie/`,
  "/paper-lens-pdf-highlight-annotate": `/paperlens/`,
  "/paper-lens-pdf-highlight-annotate/": `/paperlens/`,
}

const PILLARS = [
  {
    n: `01`,
    title: `Measure`,
    body: `Rigorous evaluation before deployment — custom benchmarks, retrieval sweeps, and response-mode taxonomies that expose what models actually do.`,
  },
  {
    n: `02`,
    title: `Build`,
    body: `Agentic pipelines, RAG architectures, and knowledge systems engineered for production — not proof-of-concept theater.`,
  },
  {
    n: `03`,
    title: `Prove`,
    body: `Shipped demos, reproducible artifacts, and measurable outcomes clients can inspect, not slide decks they must trust.`,
  },
]

export type JodieHomepageProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      category: string
      date: string
      excerpt: string
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
      __typename: "MdxPage"
    }[]
  }
}

const Homepage: React.FC<PageProps<JodieHomepageProps>> = ({ data: { pages, projects } }) => {
  const rawItems = [...pages.nodes, ...projects.nodes]
  const items = modifyGrid(rawItems)

  const engagements: Engagement[] = items
    .filter((item) => item.__typename === `MdxProject`)
    .map((item) => {
      const p = item as JodieHomepageProps["projects"]["nodes"][0]
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        date: p.date,
        excerpt: p.excerpt,
        demoHref: DEMO_BY_SLUG[p.slug],
      }
    })

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        Tarun Sharma — AI/ML Consultant
      </h1>

      <section className="hero-manifesto">
        <div className="hero-manifesto__accent-bar" />
        <p className="eyebrow">Independent AI Consultant</p>

        <h2 className="display-headline" style={{ fontSize: `clamp(2.5rem, 6vw, 4.25rem)` }}>
          <span className="display-line">From ambition</span>
          <span className="display-line display-line--accent">to production</span>
          <span className="display-line">intelligence</span>
        </h2>

        <p className="lead">
          I partner with teams who need more than a pilot — who need AI systems that survive contact with reality.
          Evaluation suites that tell the truth. RAG pipelines that retrieve. Agentic workflows that deliver. And
          proof you can click, not promises you have to take on faith.
        </p>

        <div className="hero-cta-row">
          <Link to="/contact/" className="btn-primary">
            Get in touch
          </Link>
          <Link to="/approach/" className="btn-ghost">
            Our approach
          </Link>
        </div>
      </section>

      <section className="pillars">
        {PILLARS.map((p) => (
          <div key={p.n} className="pillar">
            <div className="pillar__number">{p.n}</div>
            <h3 className="pillar__title">{p.title}</h3>
            <p className="pillar__body">{p.body}</p>
          </div>
        ))}
      </section>

      <AiReleaseTrackerPanel />

      <EngagementShowcase projects={engagements} />

      <div className="demos-strip">
        <span className="demos-strip__label">
          <span>▸</span> live systems
        </span>
        <a href="/quote-memory/">Quote Memory</a>
        <a href="/hindi-jinnie/">Hindi Jinnie Translation</a>
        <a href="/paperlens/">PaperLens</a>
      </div>

      <section className="cta-band">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Ready to build something that lasts?</h2>
        <p className="cta-band__sub">
          Open to consulting engagements, research collaborations, and transformation projects where
          measurement and delivery matter equally.
        </p>
        <Link to="/contact/" className="btn-primary">
          Contact
        </Link>
      </section>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
