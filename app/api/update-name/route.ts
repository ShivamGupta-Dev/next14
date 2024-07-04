import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from 'next-auth/react';
import { auth } from '@/auth';

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  try {
    const session = await auth();
    if (!session || session.user.email !== email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await db.user.update({
      where: { email },
      data: { name },
    });

    return NextResponse.json({ message: 'Name updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update name' }, { status: 500 });
  }
}
