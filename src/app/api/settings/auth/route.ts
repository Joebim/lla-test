import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  try {
    const response = await fetch(
      "https://api.staging.delve.fun/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ token: data.access_token });
    } else {
      return NextResponse.json(
        { message: "Authentication failed" },
        { status: response.status },
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
