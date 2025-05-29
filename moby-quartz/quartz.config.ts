{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ QuartzConfig \} from "./quartz/cfg"\
import * as Plugin from "./quartz/plugins"\
\
const config: QuartzConfig = \{\
  configuration: \{\
    pageTitle: "Moby-Dick Companion",\
    pageTitleSuffix: "",\
    enableSPA: true,\
    enablePopovers: true,\
    analytics: \{\
      provider: "plausible", // or leave empty if unused\
    \},\
    locale: "en-US",\
    baseUrl: "/",\
    ignorePatterns: ["private", "templates", ".obsidian"],\
    defaultDateType: "modified",\
    theme: \{\
      fontOrigin: "googleFonts",\
      cdnCaching: true,\
      typography: \{\
        header: "Schibsted Grotesk",\
        body: "Source Sans Pro",\
        code: "IBM Plex Mono",\
      \},\
      colors: \{\
        lightMode: \{\
          light: "#faf8f8",\
          lightgray: "#e5e5e5",\
          gray: "#b8b8b8",\
          darkgray: "#4e4e4e",\
          dark: "#2b2b2b",\
          secondary: "#284b63",\
          tertiary: "#84a59d",\
          highlight: "rgba(143, 159, 169, 0.15)",\
          textHighlight: "#fff23688",\
        \},\
        darkMode: \{\
          light: "#161618",\
          lightgray: "#393639",\
          gray: "#646464",\
          darkgray: "#d4d4d4",\
          dark: "#ebebec",\
          secondary: "#7b97aa",\
          tertiary: "#84a59d",\
          highlight: "rgba(143, 159, 169, 0.15)",\
          textHighlight: "#b3aa0288",\
        \},\
      \},\
    \},\
  \},\
\
  contentDir: "./content",\
\
  plugins: \{\
    transformers: [\
      Plugin.FrontMatter(),\
      Plugin.CreatedModifiedDate(\{\
        priority: ["frontmatter", "git", "filesystem"],\
      \}),\
      Plugin.SyntaxHighlighting(\{\
        theme: \{\
          light: "github-light",\
          dark: "one-dark-pro",\
        \},\
      \}),\
      Plugin.Mermaid(),\
      Plugin.ObsidianFlavoredMarkdown(),\
    ],\
    emitters: [\
      Plugin.ContentPage(),\
      Plugin.TagPage(),\
      Plugin.ExplorerPage(),\
      Plugin.NotFoundPage(),\
    ],\
  \},\
\}\
\
export default config}