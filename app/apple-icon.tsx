import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#6B1226",
        color: "#FBF8F3",
        fontSize: 100,
        fontWeight: 700,
      }}
    >
      F
    </div>,
    { ...size },
  );
}
