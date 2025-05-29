const clipboardStyle = undefined
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

// 🧠 Delay the clipboard script until it's safe (browser-side only)
if (typeof document !== "undefined") {
  import("./scripts/clipboard.inline").then((mod) => {
    Body.afterDOMLoaded = mod.default
  })
}

Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor