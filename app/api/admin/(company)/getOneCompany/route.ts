import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ICompany } from '@/types';
import Company from '@/models/company';
import { revalidatePath } from 'next/cache';
import { deleteFromR2 } from '@/app/action';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const company = await Company.findById(id);
    if (!company) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(company);
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
    const company = await Company.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(company, { status: 201 });
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
    const company = await Company.findByIdAndUpdate(id, newData, { new: true });
    if (!company) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(company);
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
    const company: ICompany | null = await Company.findByIdAndDelete(id, { new: true });
    if (!company) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [company.image.public_id];
    // console.log(public_id_arr);
    await deleteFromR2(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(company);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
