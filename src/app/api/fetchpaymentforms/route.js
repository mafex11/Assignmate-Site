import connectToDatabase from '../../../../lib/mongodb';
import PaymentForm from '../../../../models/paymentforms';

export async function GET(req) {
  try {
    // Step 1: Connect to MongoDB
    try {
      await connectToDatabase();
    } catch (error) {
      console.error('Database connection error:', error);
      return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), { status: 500 });
    }

    // Step 2: Fetch all payment forms from the database
    try {
      const paymentForms = await PaymentForm.find({}).sort({ createdAt: -1 }); // Sort by date (newest first)
      return new Response(JSON.stringify(paymentForms), { status: 200 });
    } catch (error) {
      console.error('Error fetching payment forms:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch payment forms' }), { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected server error:', error);
    return new Response(JSON.stringify({ error: 'Server encountered an error' }), { status: 500 });
  }
}
