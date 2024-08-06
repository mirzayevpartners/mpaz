export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Activeworks from '@/models/activeworks';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const activeworks = await Activeworks.find({});
    return NextResponse.json(activeworks);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
