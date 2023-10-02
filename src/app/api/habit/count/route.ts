import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { id } = await request.json();
  const session = await getServerSession();
  const currentDate = new Date().toISOString();
  try {
    await sql`
      UPDATE HABIT
      SET done_dates = ARRAY_APPEND(done_dates, ${currentDate})
      WHERE id = ${id}
        AND email = ${session?.user?.email};
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: error?.status });
  }
}
