import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IActiveWorks } from '@/types';
import { deleteFromCld } from '@/app/action';
import Activeworks from '@/models/activeworks';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const activeworks = await Activeworks.findById(id);
    if (!activeworks) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(activeworks);
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
    const activeworks = await Activeworks.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(activeworks, { status: 201 });
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
    const activeworks = await Activeworks.findByIdAndUpdate(id, newData, { new: true });
    if (!activeworks) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(activeworks);
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
    const activeworks: IActiveWorks | null = await Activeworks.findByIdAndDelete(id, { new: true });
    if (!activeworks) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [activeworks.icon.public_id];
    // console.log(public_id_arr);
    await deleteFromCld(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(activeworks);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
