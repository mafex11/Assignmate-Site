import Newsletter from "../../../../models/newsletter";
import connectToDatabase from '../../../../lib/mongodb';

export async function GET(req) {
  await connectToDatabase();

  try {
    const newsletters = await Newsletter.find();
    return new Response(JSON.stringify(newsletters), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch newsletter data" }), { status: 500 });
  }
}
