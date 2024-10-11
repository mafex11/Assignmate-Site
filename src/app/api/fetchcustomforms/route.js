import FormData from "../../../../models/FormData";
import connectToDatabase from '../../../../lib/mongodb';

export async function GET(req) {
  await connectToDatabase();

  try {
    const forms = await FormData.find();
    return new Response(JSON.stringify(forms), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch form data" }), { status: 500 });
  }
}
