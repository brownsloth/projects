/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

export type TerminalProject = {
  slug: string
  title: string
  category?: string
  date?: string
  excerpt?: string
  demoHref?: string
}

type Props = {
  projects: TerminalProject[]
}

const TerminalProjectList = ({ projects }: Props) => (
  <div className="terminal-list" sx={{ px: [3, 4, 5, 6], py: [3, 4] }}>
    {projects.map((project) => (
      <article key={project.slug} className="terminal-post" sx={{ py: [3, 4] }}>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `center`,
            gap: 2,
            mb: 2,
            fontFamily: `monospace`,
            fontSize: `0.72rem`,
            color: `textMuted`,
          }}
        >
          {project.date && <time dateTime={project.date}>{project.date}</time>}
          {project.category && (
            <span sx={{ color: `secondary`, letterSpacing: `0.04em` }}>{project.category}</span>
          )}
          {project.demoHref && (
            <a href={project.demoHref} className="terminal-badge terminal-badge--live">
              ● live demo
            </a>
          )}
        </div>

        <h3
          sx={{
            m: 0,
            fontFamily: `monospace`,
            fontSize: [`1.1rem`, `1.25rem`, `1.35rem`],
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          <Link to={project.slug} className="terminal-post-link">
            {project.title}
          </Link>
        </h3>

        {project.excerpt && (
          <p
            sx={{
              mt: 2,
              mb: 0,
              fontFamily: `monospace`,
              fontSize: [`0.78rem`, `0.82rem`],
              color: `textMuted`,
              lineHeight: 1.65,
              maxWidth: `65ch`,
            }}
          >
            {project.excerpt}
          </p>
        )}
      </article>
    ))}
  </div>
)

export default TerminalProjectList
