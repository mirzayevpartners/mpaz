export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Companycounts from '@/models/companycounts';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const companycounts = await Companycounts.find({});
    return NextResponse.json(companycounts);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
