import { Phone } from "./db.js"

export function renderPhones(list: Phone[]) {
  const container = document.getElementById("container")
  if(!container) return
  container.innerHTML = ""
  list.forEach(p => {
    const div = document.createElement("div")
    div.className = "box"
    div.innerHTML = `<div class="icon">${p.icon}</div><div>${p.name}</div><div>${p.feature}</div>`
    container.appendChild(div)
  })
}
