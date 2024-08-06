export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import Question from '@/models/question';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const question = await Question.find({});
    return NextResponse.json(question);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
