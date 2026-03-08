import { Phone } from "./db.js"

export function renderPhones(list: Phone[]) {
  const container = document.getElementById("container")
  if (!container) return

  container.innerHTML = ""  // clear previous content

  for (let i = 0; i < list.length; i += 2) {
    const pageDiv = document.createElement("div")
    pageDiv.className = "page"  // wrapper for 2 boxes
    pageDiv.style.display = "flex"
    pageDiv.style.flex = "0 0 100%"
    pageDiv.style.justifyContent = "space-around"
    pageDiv.style.alignItems = "center"
    pageDiv.style.scrollSnapAlign = "start"

    // add 2 boxes inside this page
    for (let j = i; j < i + 2 && j < list.length; j++) {
      const p = list[j]
      const box = document.createElement("div")
      box.className = "box"
      box.style.flex = "0 0 45%"  // each box ~half of page
      box.innerHTML = `
        <div class="icon">${p.icon}</div>
        <div class="name">${p.name}</div>
        <div class="feature">${p.feature}</div>
        <div class="description">${p.description}</div>
      `
      pageDiv.appendChild(box)
    }

    container.appendChild(pageDiv)
  }
}