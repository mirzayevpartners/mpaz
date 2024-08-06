import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { IQuestion } from '@/types';
import Question from '@/models/question';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const question = await Question.findById(id);
    if (!question) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(question);
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
    const question = await Question.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(question, { status: 201 });
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
    const question = await Question.findByIdAndUpdate(id, newData, { new: true });
    if (!question) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(question);
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
    const question: IQuestion | null = await Question.findByIdAndDelete(id, { new: true });
    if (!question) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(question);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
