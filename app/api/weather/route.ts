import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
  try {
    const lat = 40.4165;
    const lon = -3.7026;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const res = await axios.get(url);
    return NextResponse.json(res.data);
    console.log(url);
  } catch (error) {
    console.log("Error catching forecasting API request");
    return new Response("Error fetching forecasts data", { status: 500 });
  }
}
