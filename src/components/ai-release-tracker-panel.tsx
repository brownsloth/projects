/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { AI_RELEASE_TRACKER_URL } from "../site-links"

const HIGHLIGHTS = [
  { label: `Models tracked`, value: `159+` },
  { label: `Labs covered`, value: `9` },
  { label: `Since`, value: `ChatGPT · Nov 2022` },
]

const AiReleaseTrackerPanel = () => (
  <section className="tracker-panel">
    <div className="tracker-panel__inner">
      <div className="tracker-panel__copy">
        <p className="section-label">Intelligence landscape</p>
        <h2 className="section-title">Frontier release radar</h2>
        <p className="lead" sx={{ mt: `0 !important`, fontSize: `0.95rem !important` }}>
          I maintain a live view of major LLM releases — benchmarks, context windows, and capability shifts —
          so client recommendations reflect what shipped this week, not last quarter.
        </p>
        <ul className="tracker-panel__stats">
          {HIGHLIGHTS.map((h) => (
            <li key={h.label}>
              <span className="tracker-panel__stat-value">{h.value}</span>
              <span className="tracker-panel__stat-label">{h.label}</span>
            </li>
          ))}
        </ul>
        <a
          href={AI_RELEASE_TRACKER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary tracker-panel__cta"
        >
          Open AI Release Tracker
        </a>
        <p className="tracker-panel__note">
          Opens in a new tab — the tracker blocks embedding, but stays one click away.
        </p>
      </div>

      <a
        href={AI_RELEASE_TRACKER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="tracker-panel__preview"
        aria-label="Open AI Release Tracker in a new tab"
      >
        <div className="tracker-panel__preview-chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="tracker-panel__preview-body">
          <div className="tracker-panel__timeline">
            {[
              { co: `Anthropic`, model: `Claude Opus 4.x`, tag: `SWE-Bench leader` },
              { co: `OpenAI`, model: `GPT-5.x`, tag: `GPQA frontier` },
              { co: `Google`, model: `Gemini 2.x`, tag: `Multimodal` },
              { co: `DeepSeek`, model: `R1 / V3`, tag: `Open-weight` },
            ].map((row) => (
              <div key={row.model} className="tracker-panel__row">
                <span className="tracker-panel__row-co">{row.co}</span>
                <span className="tracker-panel__row-model">{row.model}</span>
                <span className="tracker-panel__row-tag">{row.tag}</span>
              </div>
            ))}
          </div>
          <span className="tracker-panel__preview-link">View full timeline →</span>
        </div>
      </a>
    </div>
  </section>
)

export default AiReleaseTrackerPanel
