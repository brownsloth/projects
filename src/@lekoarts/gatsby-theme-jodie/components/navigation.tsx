/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { replaceSlashes } from "@lekoarts/gatsby-theme-jodie/src/utils/replace-slashes"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"

const NAV_LABELS: Record<string, string> = {
  Projects: `Work`,
}

const Navigation = () => {
  const { navigation, basePath } = useJodieConfig()

  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: `textMuted`,
          textDecoration: `none`,
          fontFamily: `body`,
          fontSize: [`0.72rem`, `0.75rem`],
          fontWeight: 600,
          letterSpacing: `0.16em`,
          textTransform: `uppercase`,
          marginLeft: [2, 3, 3, 0],
          display: `inline-block`,
          py: [1, 1, 1, 3],
          transition: `color 0.2s`,
          "&:hover,&:focus": {
            color: `heading`,
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
      }}
    >
      <ul>
        {navigation.map((navItem) => (
          <li key={navItem.slug}>
            <Link sx={(t) => ({ ...t.styles?.a })} to={replaceSlashes(`/${basePath}/${navItem.slug}`)}>
              {NAV_LABELS[navItem.name] ?? navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
