import connectToDatabase from '../../../../lib/mongodb';
import ContactFormModel from '../../../../models/ContactForm'; // Adjust the model import as necessary

export async function POST(req) {
  try {
    // Step 1: Connect to MongoDB
    await connectToDatabase();

    // Step 2: Parse request body
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    // Step 3: Save form data to MongoDB
    const newContactForm = new ContactFormModel({
      name,
      email,
      message,
    });

    await newContactForm.save();
    return new Response(JSON.stringify({ success: true, data: newContactForm }), { status: 200 });
  } catch (error) {
    console.error('Error saving contact form data to MongoDB:', error);
    return new Response(JSON.stringify({ error: 'Failed to save contact form data' }), { status: 500 });
  }
}
