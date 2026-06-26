import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Tarun Sharma`,
    siteTitleAlt: `Tarun Sharma — AI Transformation Consultant`,
    siteHeadline: `Independent consultant for teams building production AI — evaluation, RAG, and agentic systems`,
    siteUrl: `https://projects.tarun-ssharma.com`,
    siteDescription: `Independent AI/ML consultant. Rigorous evaluation, production RAG, agentic workflows, and deployable proof — for teams who need transformation, not theater.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `Tarun Sharma`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `Approach`, slug: `/approach` },
          { name: `Contact`, slug: `/contact` },
        ],
        homepagePageLimit: 0,
        homepageProjectLimit: 12,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tarun Sharma — AI Transformation Consultant`,
        short_name: `Tarun Sharma`,
        description: `Independent AI/ML consultant. Rigorous evaluation, production RAG, agentic workflows, and deployable proof.`,
        start_url: `/`,
        background_color: `#0c0c0b`,
        theme_color: `#e07a2f`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
