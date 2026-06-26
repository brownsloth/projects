/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import { LINKEDIN_URL, GITHUB_URL } from "../../../site-links"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, t.sidebar?.normal, t.sidebar?.wide],
        bottom: 0,
        color: `textMuted`,
        fontSize: `0.72rem`,
        fontFamily: `body`,
        letterSpacing: `0.04em`,
        p: [3, 3, 4],
        background: `background`,
        borderTop: [`1px solid`, `1px solid`, `1px solid`, `none`],
        borderRight: [`none`, `none`, `none`, `1px solid`],
        borderColor: `border`,
        a: {
          color: `textMuted`,
          textDecoration: `none`,
          "&:hover,&:focus": {
            color: `primaryLight`,
          },
        },
      }}
    >
      <div sx={{ mb: 1 }}>© {new Date().getFullYear()} {siteTitle}</div>
      <div>
        <Link href={LINKEDIN_URL} aria-label="LinkedIn">
          LinkedIn
        </Link>
        {` · `}
        <Link href={GITHUB_URL} aria-label="GitHub">
          GitHub
        </Link>
      </div>
    </footer>
  )
}

export default Footer
