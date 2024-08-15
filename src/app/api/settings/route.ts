import { NextResponse } from "next/server";

// export const apiClient = axios.create({
//   baseURL: "http://api.staging.delve.fun/api/v1",
//   headers: {
//     Accept: "application/json",
//   },
// });

export async function GET() {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU2MDkxNSwiZXhwIjoxNzIzNTY0NTE1LCJuYmYiOjE3MjM1NjA5MTUsImp0aSI6IndjS3NHaEJtaHdsU0VIUmMiLCJzdWIiOiI5Y2MxYzUwNC0wOThmLTQxMGQtOGE2YS0zOGQxNzU3MzBjMmUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ebrztYp9dz-WvRFCar3cUjlREqWTdDsTPbdvxxGYWX4";
  try {
    const response = await fetch(
      "http://api.staging.delve.fun/api/v1/audio-settings",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      },
    );
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      return NextResponse.json("something went wrong");
    }
    // console.log(response);
    return response;
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
