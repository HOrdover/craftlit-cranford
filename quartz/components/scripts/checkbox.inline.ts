import { getFullSlug } from "../../util/path"

const checkboxId = (index: number) => `${getFullSlug(window)}-checkbox-${index}`

if (typeof document !== "undefined") {
  document.addEventListener("nav", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    for (const checkbox of checkboxes) {
      checkbox.addEventListener("click", (e) => {
        const target = e.target as HTMLInputElement
        if (target.checked) {
          target.setAttribute("checked", "")
        } else {
          target.removeAttribute("checked")
        }
      })
    }
  })
}