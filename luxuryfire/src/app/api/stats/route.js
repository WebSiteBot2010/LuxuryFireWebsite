import { NextResponse } from "next/server";
import { initBot, getStats } from "@/lib/discord";

export async function GET() {
  initBot();
  const stats = getStats();
  return NextResponse.json(stats);
}
