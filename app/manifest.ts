import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FrndCircle: Meet New Friends Through Real-Life Activities",
    short_name: "FrndCircle",
    description:
      "Discover and host activities like coffee meetups, bike rides, board game nights, and brunches with like-minded people in your city.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#c66a3d",
    categories: ["social", "lifestyle", "events"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
