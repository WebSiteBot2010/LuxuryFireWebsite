import { NextResponse } from "next/server";
import { getBotStats } from "@/lib/discord";

export async function GET() {
  const stats = await getBotStats();
  return NextResponse.json(stats);
}
