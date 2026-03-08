import { phoneData } from "./db.js"
import { renderPhones } from "./render.js"

window.addEventListener("DOMContentLoaded", () => {
  const phones = phoneData.map(p => ({ ...p, id: crypto.randomUUID() }))
  renderPhones(phones)
})