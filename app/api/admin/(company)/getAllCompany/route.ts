export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Company from '@/models/company';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const company = await Company.find({});
    return NextResponse.json(company);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
