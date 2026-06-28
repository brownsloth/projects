import * as path from "path"
import type { GatsbyNode } from "gatsby"

/** Gatsby develop intercepts HTML routes; serve static mini-apps explicitly. */
export const onCreateDevServer: GatsbyNode["onCreateDevServer"] = ({ app }) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const express = require("express") as typeof import("express")
  for (const name of ["quote-memory", "hindi-jinnie", "paperlens"]) {
    const dir = path.join(__dirname, "static", name)
    app.use(`/${name}`, express.static(dir, { index: "index.html" }))
  }
}
