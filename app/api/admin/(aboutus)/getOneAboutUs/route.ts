import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IAboutUs } from '@/types';
import { deleteFromR2 } from '@/app/action';
import Aboutus from '@/models/aboutus';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const aboutus = await Aboutus.findById(id);
    if (!aboutus) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(aboutus);
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
    const aboutus = await Aboutus.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(aboutus, { status: 201 });
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
    const aboutus = await Aboutus.findByIdAndUpdate(id, newData, { new: true });
    if (!aboutus) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(aboutus);
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
    const aboutus: IAboutUs | null = await Aboutus.findByIdAndDelete(id, { new: true });
    if (!aboutus) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [aboutus.image.public_id];
    // console.log(public_id_arr);
    await deleteFromR2(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(aboutus);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
