import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IFormDetails } from '@/types';
import { revalidatePath } from 'next/cache';
import Contact from '@/models/contact';
import Form from '@/models/form';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const formDatas = await Form.findById(id);
    if (!formDatas) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(formDatas);
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
    const contact = await Form.create(newData);
    // revalidatePath('/', 'layout');
    return NextResponse.json(contact, { status: 201 });
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
    const formDatas = await Form.findByIdAndUpdate(id, newData, { new: true });
    if (!formDatas) {
      return NextResponse.json('Not found', { status: 404 });
    }
    // revalidatePath('/', 'layout');
    return NextResponse.json(formDatas);
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
    const formDatas: IFormDetails | null = await Form.findByIdAndDelete(id, { new: true });
    if (!formDatas) {
      return NextResponse.json('Not found', { status: 404 });
    }

    // revalidatePath('/', 'layout');
    return NextResponse.json(formDatas);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
