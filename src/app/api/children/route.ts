import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const children = await prisma.child.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(children);
  } catch (error) {
    console.error('GET children error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch children' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      age,
      gender,
      guardian,
      admissionDate,
      status
    } = body;

    if (!name || !age || !gender || !guardian) {
      return NextResponse.json(
        { error: 'Name, age, gender and guardian are required' },
        { status: 400 }
      );
    }

    const child = await prisma.child.create({
      data: {
        name: String(name),
        age: Number(age),
        gender: String(gender),
        guardian: String(guardian),
        admissionDate: admissionDate
          ? new Date(admissionDate)
          : new Date(),
        status: status ? String(status) : 'Active'
      }
    });

    return NextResponse.json(child, { status: 201 });
  } catch (error) {
    console.error('POST children error:', error);

    return NextResponse.json(
      { error: 'Failed to create child record' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    if (!id) {
      return NextResponse.json(
        { error: 'Child ID is required' },
        { status: 400 }
      );
    }

    await prisma.child.delete({
      where: { id }
    });

    return NextResponse.json({
      message: 'Child deleted successfully'
    });
  } catch (error) {
    console.error('DELETE child error:', error);

    return NextResponse.json(
      { error: 'Failed to delete child' },
      { status: 500 }
    );
  }
}