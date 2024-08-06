import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IGallery, IVideo } from '@/types';
import { deleteFromCld } from '@/app/action';
import Gallery from '@/models/gallery';
import Video from '@/models/video';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const video = await Video.findById(id);
    if (!video) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(video);
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
    const video = await Video.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(video, { status: 201 });
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
    const video = await Video.findByIdAndUpdate(id, newData, { new: true });
    if (!video) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(video);
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
    const video: IVideo | null = await Video.findByIdAndDelete(id, { new: true });
    if (!video) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(video);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
