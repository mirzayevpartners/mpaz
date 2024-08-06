export const dynamic = 'force-dynamic';

import Socials from '@/models/socials';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const socials = await Socials.find({});
    return NextResponse.json(socials);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
