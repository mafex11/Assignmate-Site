// app/api/newsletter/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb'; // Make sure to create this utility function
import Newsletter from '../../../../models/newsletter';

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    if (!email || !email.trim()) {
      return NextResponse.json({ message: 'Please provide a valid email address' }, { status: 400 });
    }

    await connectToDatabase();
    
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 409 });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
