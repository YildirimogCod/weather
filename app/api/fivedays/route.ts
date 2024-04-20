import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const lat = 40.4165;
    const lon = -3.7026;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const dailyRes = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const dailyData = await dailyRes.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.error(error);
    return new Response("Error fetching forecasts data", { status: 500 });
  }
}
