export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Team from '@/models/team';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const team = await Team.find({});
    return NextResponse.json(team);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
