export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/news';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const news = await News.find({});
    return NextResponse.json(news);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
