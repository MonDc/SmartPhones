export interface Phone {
  id: string
  name: string
  feature: string
  icon: string
  description: string  // new field
}

export const phoneData = [
  { name: "iPhone", feature: "A17 Chip", icon: "📱", description: "The latest iPhone with cutting-edge performance and smooth iOS experience." },
  { name: "Samsung", feature: "AMOLED Display", icon: "📱", description: "Vibrant display with stunning colors and smooth refresh rate." },
  { name: "Pixel", feature: "Best Camera", icon: "📱", description: "Google Pixel camera for amazing low-light and portrait shots." },
  { name: "Xiaomi", feature: "Fast Charge", icon: "📱", description: "Charge your phone extremely fast with high-capacity battery." },
  { name: "OnePlus", feature: "120Hz Display", icon: "📱", description: "Smooth and responsive display perfect for gaming and media." },
  { name: "Sony", feature: "Cinema Cam", icon: "📱", description: "Professional-level video capture and cinematic features." },
  { name: "Nokia", feature: "Strong Build", icon: "📱", description: "Durable and reliable phone built to last." },
  { name: "Huawei", feature: "Battery Life", icon: "📱", description: "Long-lasting battery for uninterrupted daily usage." }
]