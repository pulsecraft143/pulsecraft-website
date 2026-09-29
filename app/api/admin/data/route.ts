import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';

export async function GET() {
  const contacts = db.getContacts();
  const applications = db.getApplications();
  const subscribers = db.getSubscribers();

  return NextResponse.json({
    success: true,
    contacts,
    applications,
    subscribers,
  });
}
