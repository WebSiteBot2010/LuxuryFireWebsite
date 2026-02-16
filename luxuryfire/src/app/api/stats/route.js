import { NextResponse } from "next/server";
import { initBot, getStats } from "@/lib/discord-server";

export async function GET() {
  initBot();
  const stats = getStats();
  return NextResponse.json(stats);
}
