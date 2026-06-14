import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";
export const alt = "Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", backgroundColor: "#fafafa", padding: "80px" }}>
        <div style={{ fontFamily: "sans-serif", fontSize: "48px", fontWeight: "600", color: "#000000", marginBottom: "16px", display: "flex" }}>
          {DATA.name} — Blog
        </div>
        <div style={{ fontSize: "20px", color: "#404040", maxWidth: "800px", display: "flex" }}>
          Thoughts on software development, life, and more.
        </div>
      </div>
    ),
    { ...size }
  );
}
