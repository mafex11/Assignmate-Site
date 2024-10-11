import connectToDatabase from '../../../../lib/mongodb';
import ContactFormModel from '../../../../models/ContactForm';

export async function GET(req) {
  try {
    // Step 1: Connect to MongoDB
    try {
      await connectToDatabase();
    } catch (error) {
      console.error('Database connection error:', error);
      return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), { status: 500 });
    }

    // Step 2: Fetch all contact forms from the database
    try {
      const contactForms = await ContactFormModel.find({}).sort({ createdAt: -1 }); // Sort by newest first
      return new Response(JSON.stringify(contactForms), { status: 200 });
    } catch (error) {
      console.error('Error fetching contact forms:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch contact forms' }), { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected server error:', error);
    return new Response(JSON.stringify({ error: 'Server encountered an error' }), { status: 500 });
  }
}
