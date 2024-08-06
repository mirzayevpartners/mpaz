export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Service from '@/models/service';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json(services);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
