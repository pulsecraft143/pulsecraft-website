import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/storage';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid corporate email is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  budgetRange: z.string().min(1, 'Budget range is required'),
  timeline: z.string().optional(),
  details: z.string().min(10, 'Project details must be at least 10 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = ContactSchema.parse(body);

    const newSubmission = db.saveContact({
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      phone: validatedData.phone,
      projectType: validatedData.projectType,
      budgetRange: validatedData.budgetRange,
      timeline: validatedData.timeline,
      details: validatedData.details,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our engineering directors will respond within 24 business hours.',
        id: newSubmission.id,
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
      { success: false, error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const contacts = db.getContacts();
  return NextResponse.json({ success: true, count: contacts.length, data: contacts });
}
