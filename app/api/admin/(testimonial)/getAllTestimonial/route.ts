export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Testimonial from '@/models/testimonial';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const team = await Testimonial.find({});
    return NextResponse.json(team);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
