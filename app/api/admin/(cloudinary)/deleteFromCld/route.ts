import { NextRequest, NextResponse } from 'next/server';
import { deleteFromCld } from '@/app/action';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { public_id_arr } = data;
  try {
    await deleteFromCld(public_id_arr);
    return NextResponse.json({ message: 'Images deleted successfully' });
  } catch (e) {
    return NextResponse.json({ message: 'Error deleting images' }, { status: 400 });
  }
}
