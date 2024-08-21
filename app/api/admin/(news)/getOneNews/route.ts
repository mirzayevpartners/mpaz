import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { INews } from '@/types';
import { deleteFromR2 } from '@/app/action';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(news);
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
    const news = await News.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(news, { status: 201 });
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
    const news = await News.findByIdAndUpdate(id, newData, { new: true });
    if (!news) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(news);
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
    const news: INews | null = await News.findByIdAndDelete(id, { new: true });
    if (!news) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [news.mainImage.public_id];
    if (news.images.length > 0) {
      news.images.forEach((image) => {
        public_id_arr.push(image.public_id);
      });
    }
    // console.log(public_id_arr);
    await deleteFromR2(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(news);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
