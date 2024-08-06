import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ISocials } from '@/types';
import { revalidatePath } from 'next/cache';
import Socials from '@/models/socials';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const socials = await Socials.findById(id);
    if (!socials) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(socials);
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
    const socials = await Socials.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(socials, { status: 201 });
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
    const socials = await Socials.findByIdAndUpdate(id, newData, { new: true });
    if (!socials) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(socials);
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
    const socials: ISocials | null = await Socials.findByIdAndDelete(id, { new: true });
    if (!socials) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(socials);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
