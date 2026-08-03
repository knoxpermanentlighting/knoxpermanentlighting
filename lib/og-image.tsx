import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function renderOgImage() {
  const logoPath = path.join(process.cwd(), "public", "knox-logo-cropped.png");
  const logoSrc = `data:image/png;base64,${fs.readFileSync(logoPath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0d",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,65,54,0.38), transparent 55%), radial-gradient(circle at 85% 78%, rgba(59,130,246,0.32), transparent 55%), radial-gradient(circle at 50% 100%, rgba(46,204,113,0.22), transparent 60%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={640} height={321} style={{ objectFit: "contain" }} alt="" />
        <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
          {["#ff4136", "#ffc93c", "#2ecc71", "#3b82f6", "#a855f7"].map((c) => (
            <div key={c} style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: c }} />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 42, fontWeight: 700, color: "#ffffff" }}>
          Permanent Christmas Lights
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 26, color: "#f87171" }}>
          Serving the Wasatch Front, Utah
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
