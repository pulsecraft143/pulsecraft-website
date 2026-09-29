import { ContactSubmission, CareerApplication, NewsletterSubscription } from '@/types';
import fs from 'fs';
import path from 'path';

const DB_FILE_PATH = path.join(process.cwd(), 'data', 'submissions_db.json');

interface DatabaseStore {
  contacts: ContactSubmission[];
  applications: CareerApplication[];
  subscribers: NewsletterSubscription[];
}

const defaultStore: DatabaseStore = {
  contacts: [
    {
      id: 'mock-1',
      name: 'Sarah Jenkins',
      email: 's.jenkins@nexusfintech.io',
      company: 'Nexus FinTech',
      phone: '+1 (416) 555-0199',
      projectType: 'FinTech Mobile Application',
      budgetRange: '$50,000 - $100,000',
      timeline: '3-6 months',
      details: 'Looking to engineer an ultra-fast cross-platform trading and portfolio analytics app with biometrics and real-time WebSockets.',
      submittedAt: '2026-08-20T14:32:00.000Z',
      status: 'reviewed',
    },
    {
      id: 'mock-2',
      name: 'David Tremblay',
      email: 'david@quebechealth.ca',
      company: 'OmniHealth Canada',
      phone: '+1 (514) 555-8371',
      projectType: 'AI Health Diagnostic System',
      budgetRange: '$100,000+',
      timeline: '6+ months',
      details: 'We require a HIPAA/PIPEDA compliant LLM diagnostic assist system integrated with hospital EMR systems.',
      submittedAt: '2026-08-25T09:15:00.000Z',
      status: 'new',
    },
  ],
  applications: [
    {
      id: 'app-mock-1',
      fullName: 'Alexandre Roy',
      email: 'alex.roy.dev@gmail.com',
      phone: '+1 (647) 555-4921',
      location: 'Toronto, ON (Hybrid)',
      positionId: 'senior-fullstack-engineer',
      positionTitle: 'Senior Full-Stack Engineer (Next.js & Node.js)',
      linkedinUrl: 'https://linkedin.com/in/alexandreroy',
      portfolioUrl: 'https://alexroy.dev',
      resumeFileName: 'Alexandre_Roy_Resume.pdf',
      message: 'I have 7+ years of experience building high-scale TypeScript & React architectures and love PulseCraft’s engineering standards.',
      submittedAt: '2026-08-22T11:00:00.000Z',
      status: 'screening',
    },
  ],
  subscribers: [
    {
      id: 'sub-mock-1',
      email: 'technology-lead@enterprisegroup.ca',
      subscribedAt: '2026-08-18T16:20:00.000Z',
    },
    {
      id: 'sub-mock-2',
      email: 'investor@vencapital.com',
      subscribedAt: '2026-08-24T18:45:00.000Z',
    },
  ],
};

function readDb(): DatabaseStore {
  try {
    if (!fs.existsSync(DB_FILE_PATH)) {
      const dir = path.dirname(DB_FILE_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(defaultStore, null, 2), 'utf-8');
      return defaultStore;
    }
    const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return defaultStore;
  }
}

function writeDb(store: DatabaseStore): void {
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(store, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to persist database to file:', err);
  }
}

export const db = {
  getContacts: (): ContactSubmission[] => {
    return readDb().contacts;
  },
  saveContact: (contact: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): ContactSubmission => {
    const store = readDb();
    const newContact: ContactSubmission = {
      ...contact,
      id: 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    store.contacts.unshift(newContact);
    writeDb(store);
    return newContact;
  },
  getApplications: (): CareerApplication[] => {
    return readDb().applications;
  },
  saveApplication: (app: Omit<CareerApplication, 'id' | 'submittedAt' | 'status'>): CareerApplication => {
    const store = readDb();
    const newApp: CareerApplication = {
      ...app,
      id: 'app_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };
    store.applications.unshift(newApp);
    writeDb(store);
    return newApp;
  },
  getSubscribers: (): NewsletterSubscription[] => {
    return readDb().subscribers;
  },
  saveSubscriber: (email: string): { success: boolean; message: string } => {
    const store = readDb();
    const existing = store.subscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase().trim()
    );
    if (existing) {
      return { success: true, message: 'You are already subscribed to PulseCraft Insights!' };
    }
    const newSub: NewsletterSubscription = {
      id: 'sub_' + Date.now(),
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString(),
    };
    store.subscribers.unshift(newSub);
    writeDb(store);
    return { success: true, message: 'Thank you for subscribing to PulseCraft Insights.' };
  },
};
