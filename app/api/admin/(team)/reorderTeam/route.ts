import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Team from '@/models/team';
import { revalidatePath } from 'next/cache';

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const { ids } = (await req.json()) as {
      ids: number[];
    };
    if (!ids || ids.length === 0) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const promises = ids.map((id, index) => {
      return Team.findByIdAndUpdate(id, { order: index }); // Set the `order` to reflect the new position
    });
    await Promise.all(promises);
    revalidatePath('/', 'layout');
    return NextResponse.json('Order updated successfully', { status: 200 });
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
