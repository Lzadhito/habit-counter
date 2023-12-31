import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { sql } from '@vercel/postgres';

export async function GET() {
  const session = await getServerSession();
  const { rows: habits } = await sql`
    SELECT * FROM HABIT
    WHERE email = ${session?.user?.email}
    ORDER BY created_at DESC;
  `;
  return NextResponse.json({
    habits,
  });
}

export async function POST(request: Request) {
  const { newHabit, isBadHabit, occurence } = await request.json();
  const session = await getServerSession();

  try {
    await sql`
      INSERT INTO HABIT(email, name, is_bad_habit, occurrence)
      VALUES (${session?.user?.email}, ${newHabit}, ${isBadHabit}, ${occurence})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: error?.status });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await sql`
      DELETE FROM HABIT
      WHERE id = ${id};
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: error?.status });
  }
}
