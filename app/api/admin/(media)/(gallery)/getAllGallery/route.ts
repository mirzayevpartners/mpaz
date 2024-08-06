export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Gallery from '@/models/gallery';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const gallery = await Gallery.find({});
    return NextResponse.json(gallery);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
