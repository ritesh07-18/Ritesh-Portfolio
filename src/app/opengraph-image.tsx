import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGeist() {
  try {
    return await readFile(
      join(
        process.cwd(),
        "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
      ),
    );
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const geist = await loadGeist();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf9f6",
          padding: 56,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            background: "#ffffff",
            border: "1px solid #eae9e4",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ width: 10, background: "#a23e18" }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#a23e18",
                }}
              />
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: 3.4,
                  color: "#a23e18",
                }}
              >
                FOUNDER &amp; FULL-STACK DEVELOPER
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 92,
                  letterSpacing: -3,
                  color: "#18181b",
                  lineHeight: 1.05,
                }}
              >
                {site.name}
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 34,
                  letterSpacing: -0.6,
                  color: "#47464b",
                  lineHeight: 1.3,
                }}
              >
                Building apps, websites and AI-powered products.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #eae9e4",
                paddingTop: 26,
                fontSize: 24,
                color: "#71717a",
              }}
            >
              <div>{site.college}</div>
              <div style={{ color: "#a23e18" }}>riteshmaurya.dev</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: geist
        ? [{ name: "Geist", data: geist, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
