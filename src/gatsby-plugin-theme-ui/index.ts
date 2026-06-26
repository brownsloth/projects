import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"

const theme = merge(originalTheme, {
  config: {
    initialColorModeName: `dark`,
    useColorSchemeMediaQuery: false,
  },
  colors: {
    primary: `#e07a2f`,
    primaryLight: `#f0a060`,
    secondary: `#5a9e6f`,
    accent: `#7cb87a`,
    terminal: `#7cb87a`,
    heading: `#f4f1ec`,
    background: `#0c0c0b`,
    surface: `#141412`,
    surfaceElevated: `#1a1a18`,
    text: `#c8c4bc`,
    textMuted: `#8a8680`,
    textMutedLight: `#6a6660`,
    white: `#f4f1ec`,
    black: `#080807`,
    border: `#2a2826`,
  },
  fonts: {
    body: `"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    heading: `"Cormorant Garamond", Georgia, "Times New Roman", serif`,
    display: `"Cormorant Garamond", Georgia, serif`,
    monospace: `"Fira Code", ui-monospace, monospace`,
  },
  sidebar: {
    normal: `280px`,
    wide: `300px`,
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      minHeight: `100vh`,
    },
    a: {
      color: `primaryLight`,
      "&:hover, &:focus": {
        color: `primary`,
      },
    },
    p: {
      fontFamily: `body`,
      lineHeight: 1.75,
      a: {
        color: `primaryLight`,
        textDecoration: `underline`,
        textUnderlineOffset: `3px`,
        "&:hover, &:focus": {
          color: `primary`,
        },
      },
    },
    h1: { color: `heading`, fontFamily: `display`, fontWeight: 400 },
    h2: { color: `heading`, fontFamily: `display`, fontWeight: 400 },
    h3: { color: `heading`, fontFamily: `display`, fontWeight: 500 },
    pre: {
      fontFamily: `monospace`,
      backgroundColor: `surface`,
      border: `1px solid`,
      borderColor: `border`,
      borderRadius: `2px`,
      fontSize: `0.85rem`,
      color: `terminal`,
    },
    code: {
      fontFamily: `monospace`,
      fontSize: `0.88em`,
      color: `terminal`,
    },
  },
})

export default theme
