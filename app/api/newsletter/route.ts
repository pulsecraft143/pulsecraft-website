import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/storage';

const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid corporate email address.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = NewsletterSchema.parse(body);

    const result = db.saveSubscriber(validatedData.email);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || 'Invalid email' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Subscription error. Please try again.' },
      { status: 500 }
    );
  }
}
