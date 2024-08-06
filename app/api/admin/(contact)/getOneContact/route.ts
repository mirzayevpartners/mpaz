import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { IContact, INews } from '@/types';
import { deleteFromCld } from '@/app/action';
import { revalidatePath } from 'next/cache';
import Contact from '@/models/contact';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const contact = await Contact.findById(id);
    if (!contact) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(contact);
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
    const contact = await Contact.create(newData);
    revalidatePath('/', 'layout');
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
    const contact = await Contact.findByIdAndUpdate(id, newData, { new: true });
    if (!contact) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(contact);
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
    const contact: IContact | null = await Contact.findByIdAndDelete(id, { new: true });
    if (!contact) {
      return NextResponse.json('Not found', { status: 404 });
    }

    revalidatePath('/', 'layout');
    return NextResponse.json(contact);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
