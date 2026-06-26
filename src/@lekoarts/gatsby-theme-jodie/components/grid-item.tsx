/** @jsx jsx */
import { jsx, get } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

const GridItem: React.FC<React.PropsWithChildren<{ to: string; className?: string }>> = ({
  children,
  to,
  ...props
}) => (
  <Link
    to={to}
    sx={{
      position: `relative`,
      // @ts-ignore
      "> div": {
        position: `absolute !important`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      "> div:before": {
        position: `absolute`,
        content: `''`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 5,
        background: `linear-gradient(160deg, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.75) 100%)`,
      },
      "> div:after": {
        position: `absolute`,
        content: `''`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: `inset 0 0 0 0px transparent`,
        border: `1px solid transparent`,
        transition: `all 0.25s ease-in-out`,
      },
      "> div img": {
        transition: `all 0.35s ease 0s !important`,
      },
      "> span": {
        zIndex: 10,
        color: `white`,
        position: `absolute`,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: `left`,
        fontWeight: 600,
        fontFamily: `monospace`,
        fontSize: [2, 3, 3],
        padding: 3,
        textShadow: `0 2px 12px rgba(0, 0, 0, 0.8)`,
        borderTop: `2px solid`,
        borderColor: `primary`,
        background: `linear-gradient(transparent, rgba(13,17,23,0.85))`,
      },
      "&:hover": {
        "> div img": {
          transform: `scale(1.04)`,
        },
        "> div:after": {
          boxShadow: `inset 0 0 0 2px #40916c`,
          borderColor: `#40916c`,
        },
      },
      "&:focus": {
        outline: `none`,
        "> div:after": {
          boxShadow: `inset 0 0 0 3px #e85d04`,
          zIndex: 10,
        },
      },
      variant: `grid-item`,
    }}
    {...props}
  >
    {children}
  </Link>
)

export default GridItem
