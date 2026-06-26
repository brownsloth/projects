/** @jsx jsx */
import { jsx, get } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"
import Navigation from "./navigation"

const Sidebar = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useJodieConfig()

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        backgroundColor: `background`,
        borderRight: [`none`, `none`, `none`, `1px solid`],
        borderColor: `border`,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
      }}
      data-testid="sidebar"
    >
      <div sx={{ display: [`none`, `none`, `none`, `block`], width: `100%` }}>
        <Link to={basePath} aria-label={`${siteTitle}, Back to Home`} sx={{ display: `block`, mb: 4 }}>
          <Logo />
        </Link>

        <div
          sx={{
            fontFamily: `display`,
            fontSize: [4, 5],
            fontWeight: 400,
            color: `heading`,
            lineHeight: 1.15,
            letterSpacing: `-0.01em`,
          }}
        >
          {siteTitle}
        </div>

        <div
          sx={{
            fontSize: `0.72rem`,
            fontWeight: 600,
            letterSpacing: `0.18em`,
            textTransform: `uppercase`,
            color: `primary`,
            mt: 2,
          }}
        >
          AI &amp; ML Consultant
        </div>

        <p
          sx={{
            fontSize: `0.88rem`,
            color: `textMuted`,
            mt: 3,
            lineHeight: 1.7,
            maxWidth: `22ch`,
            m: 0,
            pt: 3,
            borderTop: `1px solid`,
            borderColor: `border`,
          }}
        >
          Transformation through rigorous build, not advisory theater.
        </p>

        <Link
          to="/contact/"
          className="btn-primary"
          sx={{
            display: `inline-block`,
            mt: 4,
            fontSize: `0.65rem`,
            py: 2,
            px: 3,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </div>

      <Link
        to={basePath}
        aria-label={`${siteTitle}, Back to Home`}
        sx={{ display: [`block`, `block`, `block`, `none`], width: `2.5rem` }}
      >
        <Logo />
      </Link>

      <Navigation />
    </header>
  )
}

export default Sidebar
