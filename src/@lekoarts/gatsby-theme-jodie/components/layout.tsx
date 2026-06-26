/** @jsx jsx */
import { jsx, get } from "theme-ui"
import * as React from "react"
import { Global } from "@emotion/react"
import Wrapper from "@lekoarts/gatsby-theme-jodie/src/components/layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import { SkipNavTarget, SkipNavTrigger } from "@lekoarts/gatsby-theme-jodie/src/components/skip-nav"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color }: LayoutProps) => {
  const isDefault = !color || color === `white`

  return (
    <React.Fragment>
      <Global
        styles={(t) => ({
          "*,*:after,*:before": {
            boxSizing: `border-box`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            background: get(t, `colors.primary`),
            color: get(t, `colors.white`),
          },
        })}
      />
      <SkipNavTrigger />
      <Wrapper>
        <Sidebar />
        <main sx={{ gridColumnStart: [1, 1, 1, 2], backgroundColor: isDefault ? `background` : undefined }}>
          <SkipNavTarget />
          {children}
        </main>
        <Footer />
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
