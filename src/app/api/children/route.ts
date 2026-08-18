import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const children = await prisma.child.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(children, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch children records' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, gender, healthStatus, education } = body;
    
    const newChild = await prisma.child.create({
      data: { name, age, gender, healthStatus, education },
    });
    
    return NextResponse.json(newChild, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create child record' }, { status: 500 });
  }
}