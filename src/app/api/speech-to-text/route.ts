import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.assemblyai.com/v2/realtime/token",
      {
        method: "POST",
        headers: {
          authorization: `${process.env.ASSEMBLYAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expires_in: 3600 }),
        cache: "no-store",
      },
    );
    const data = await response.json();
    const headers = new Headers();
    headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    headers.set("Pragma", "no-cache");
    headers.set("Expires", "0");

    return NextResponse.json({ success: true, data }, { headers });
  } catch {
    return NextResponse.json({ success: false });
  }
}
