
import { Phone } from "../db/db.js"

export function renderPhones(list:Phone[]){

const container = document.getElementById("container")!

container.innerHTML = ""

for(const p of list){

const div = document.createElement("div")
div.className = "box"

div.innerHTML = `
<div class="icon">${p.icon}</div>
<div>${p.name}</div>
<div>${p.feature}</div>
`

container.appendChild(div)

}

}

