import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Complia Regulatory Services",
    short_name: "Complia",
    description: "Product certification and conformity assessment for global market access.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefa",
    theme_color: "#071b2e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
