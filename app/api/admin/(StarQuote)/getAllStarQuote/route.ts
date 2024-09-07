export const dynamic = 'force-dynamic';
import Starquote from '@/models/starquote';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const starquote = await Starquote.find({});
    return NextResponse.json(starquote);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
