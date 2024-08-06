import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ITeam } from '@/types';
import { deleteFromCld } from '@/app/action';
import Team from '@/models/team';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json('Bad request', { status: 400 });
    }
    const team = await Team.findById(id);
    if (!team) {
      return NextResponse.json('Not found', { status: 404 });
    }
    return NextResponse.json(team);
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
    const team = await Team.create(newData);
    revalidatePath('/', 'layout');
    return NextResponse.json(team, { status: 201 });
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
    const team = await Team.findByIdAndUpdate(id, newData, { new: true });
    if (!team) {
      return NextResponse.json('Not found', { status: 404 });
    }
    revalidatePath('/', 'layout');
    return NextResponse.json(team);
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
    const team: ITeam | null = await Team.findByIdAndDelete(id, { new: true });
    if (!team) {
      return NextResponse.json('Not found', { status: 404 });
    }

    const public_id_arr = [team.photo.public_id];
    // console.log(public_id_arr);
    await deleteFromCld(public_id_arr);
    revalidatePath('/', 'layout');
    return NextResponse.json(team);
  } catch (e) {
    return NextResponse.json('Server error', { status: 500 });
  }
}
