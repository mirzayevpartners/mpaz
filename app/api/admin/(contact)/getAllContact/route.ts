export const dynamic = 'force-dynamic';

import Contact from '@/models/contact';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const contact = await Contact.find({});
    return NextResponse.json(contact);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
