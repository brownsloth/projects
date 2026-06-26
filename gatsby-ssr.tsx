import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/work-sans.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
    <link rel="preconnect" href="https://fonts.googleapis.com" key="gfontsPreconnect" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" key="gfontsStatic" />,
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Fira+Code:wght@400;500&display=swap"
      rel="stylesheet"
      key="displayFonts"
    />,
  ])
}
