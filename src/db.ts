export interface Phone {
  id: string
  name: string
  feature: string
  icon: string
}

export const phones: Phone[] = [
  {id: crypto.randomUUID(), name:"iPhone", feature:"A17 Chip", icon:"📱"},
  {id: crypto.randomUUID(), name:"Samsung", feature:"AMOLED", icon:"📱"},
  {id: crypto.randomUUID(), name:"Pixel", feature:"Best Camera", icon:"📱"},
  {id: crypto.randomUUID(), name:"Xiaomi", feature:"Fast Charge", icon:"📱"},
  {id: crypto.randomUUID(), name:"OnePlus", feature:"120Hz Display", icon:"📱"},
  {id: crypto.randomUUID(), name:"Sony", feature:"Cinema Cam", icon:"📱"},
  {id: crypto.randomUUID(), name:"Nokia", feature:"Strong Build", icon:"📱"},
  {id: crypto.randomUUID(), name:"Huawei", feature:"Battery Life", icon:"📱"}
]
