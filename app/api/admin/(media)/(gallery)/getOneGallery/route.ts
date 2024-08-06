import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IGallery } from '@/types';
import { deleteFromCld } from '@/app/action';
import Gallery from '@/models/gallery';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(gallery);
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
    const gallery = await Gallery.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(gallery, { status: 201 });
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
    const gallery = await Gallery.findByIdAndUpdate(id, newData, { new: true });
    if (!gallery) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(gallery);
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
    const gallery: IGallery | null = await Gallery.findByIdAndDelete(id, { new: true });
    if (!gallery) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr: string[] = [];
    if (gallery.images.length > 0) {
      gallery.images.forEach((image) => {
        public_id_arr.push(image.public_id);
      });
    }
    // console.log(public_id_arr);
    await deleteFromCld(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(gallery);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
