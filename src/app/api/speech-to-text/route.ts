import axios from "axios";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(result: NextApiResponse) {
  try {
    const response = await axios.post(
      "https://api.assemblyai.com/v2/realtime/token",
      { expires_in: 3600 },
      {
        headers: {
          authorization: `${process.env.ASSEMBLYAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    const { data } = response;
    const headers = new Headers();
    headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    headers.set("Pragma", "no-cache");
    headers.set("Expires", "0");
    return NextResponse.json({ success: true, data }, { headers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
