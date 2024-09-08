import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IService } from '@/types';
import { deleteFromR2 } from '@/app/action';
import Service from '@/models/service';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(service);
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
    const service = await Service.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(service, { status: 201 });
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
    // console.log('newData', newData)
    const service = await Service.findByIdAndUpdate(id, newData, { new: true });
    if (!service) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(service);
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
    const service: IService | null = await Service.findByIdAndDelete(id, { new: true });
    if (!service) {
      return NextResponse.json('Not found', { status: 404 });
    }

    // const public_id_arr = [service.icon.public_id];
    // console.log(public_id_arr);
    // await deleteFromR2(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(service);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
