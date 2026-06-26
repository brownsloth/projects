/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

export type Engagement = {
  slug: string
  title: string
  category?: string
  date?: string
  excerpt?: string
  demoHref?: string
}

type Props = {
  projects: Engagement[]
  showIntro?: boolean
}

const EngagementShowcase = ({ projects, showIntro = true }: Props) => (
  <section className="engagements">
    {showIntro && (
      <>
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Engagements that compound</h2>
        <p className="lead" sx={{ mt: `0 !important`, mb: 4, fontSize: `0.95rem !important`, color: `textMuted` }}>
          Benchmarks, production systems, and deployable proofs — each built to demonstrate capability, not
          accumulate dust.
        </p>
      </>
    )}

    {projects.map((project) => (
      <article key={project.slug} className="engagement-card">
        <div className="engagement-card__meta">
          {project.date && <time dateTime={project.date}>{project.date}</time>}
          {project.category && <span className="engagement-card__category">{project.category}</span>}
        </div>
        <div>
          <h3 className="engagement-card__title">
            <Link to={project.slug} sx={{ color: `inherit`, textDecoration: `none` }}>
              {project.title}
            </Link>
          </h3>
          {project.excerpt && <p className="engagement-card__excerpt">{project.excerpt}</p>}
          {project.demoHref && (
            <a href={project.demoHref} className="engagement-card__live">
              ● live system
            </a>
          )}
        </div>
        <Link to={project.slug} className="engagement-card__arrow">
          View →
        </Link>
      </article>
    ))}
  </section>
)

export default EngagementShowcase
