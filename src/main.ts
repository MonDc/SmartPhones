
import { savePhones, getPhones, Phone } from "./db/db.js"
import { renderPhones } from "./ui/render.js"

const phones:Phone[] = [

{id:crypto.randomUUID(),name:"iPhone",feature:"A17 Chip",icon:"📱"},
{id:crypto.randomUUID(),name:"Samsung",feature:"AMOLED Screen",icon:"📱"},
{id:crypto.randomUUID(),name:"Pixel",feature:"Best Camera",icon:"📱"},
{id:crypto.randomUUID(),name:"Xiaomi",feature:"Fast Charging",icon:"📱"},
{id:crypto.randomUUID(),name:"OnePlus",feature:"120Hz Display",icon:"📱"},
{id:crypto.randomUUID(),name:"Sony",feature:"Cinema Camera",icon:"📱"},
{id:crypto.randomUUID(),name:"Nokia",feature:"Strong Build",icon:"📱"},
{id:crypto.randomUUID(),name:"Huawei",feature:"Battery Life",icon:"📱"}

]

async function start(){

await savePhones(phones)

const data = await getPhones()

renderPhones(data)

}

start()

