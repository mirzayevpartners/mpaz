export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Video from '@/models/video';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const video = await Video.find({});
    return NextResponse.json(video);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
