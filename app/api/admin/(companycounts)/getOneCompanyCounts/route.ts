import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ICompanyCounts } from '@/types';
import { deleteFromR2 } from '@/app/action';
import Companycounts from '@/models/companycounts';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const companycounts = await Companycounts.findById(id);
    if (!companycounts) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(companycounts);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const newData = await req.json();
    if (!newData) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const companycounts = await Companycounts.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(companycounts, { status: 201 });
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const newData = await req.json();
    if (!newData) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const companycounts = await Companycounts.findByIdAndUpdate(id, newData, { new: true });
    if (!companycounts) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(companycounts);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const companycounts: ICompanyCounts | null = await Companycounts.findByIdAndDelete(id, { new: true });
    if (!companycounts) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [companycounts.icon.public_id];
    // console.log(public_id_arr);
    await deleteFromR2(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(companycounts);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
