import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/storage';

const CareerApplySchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(5, 'Phone number is required'),
  location: z.string().min(2, 'Location is required'),
  positionId: z.string().min(1),
  positionTitle: z.string().min(1),
  linkedinUrl: z.string().optional(),
  portfolioUrl: z.string().optional(),
  resumeFileName: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = CareerApplySchema.parse(body);

    const newApp = db.saveApplication({
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      location: validatedData.location,
      positionId: validatedData.positionId,
      positionTitle: validatedData.positionTitle,
      linkedinUrl: validatedData.linkedinUrl,
      portfolioUrl: validatedData.portfolioUrl,
      resumeFileName: validatedData.resumeFileName || 'Resume_Uploaded.pdf',
      message: validatedData.message || '',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application received. We will contact you within 48 business hours.',
        id: newApp.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Internal error processing application.' },
      { status: 500 }
    );
  }
}
