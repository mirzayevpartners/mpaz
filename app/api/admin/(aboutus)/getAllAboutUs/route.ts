export const dynamic = 'force-dynamic';

import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Aboutus from '@/models/aboutus';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const aboutus = await Aboutus.find({});
    return NextResponse.json(aboutus);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
