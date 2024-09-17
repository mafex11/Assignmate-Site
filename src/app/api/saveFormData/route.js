import connectToDatabase from '../../../../lib/mongodb';
import FormData from '../../../../models/FormData';

// Named export for POST method
export async function POST(req) {
  try {
    // Step 1: Connect to MongoDB
    try {
      await connectToDatabase();
    } catch (error) {
      console.error('Database connection error:', error);
      return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), { status: 500 });
    }

    // Step 2: Parse request body
    let name, email, message, files;
    try {
      if (req.headers.get('Content-Type') === 'multipart/form-data') {
        const formData = await req.formData();
        name = formData.get('name');
        email = formData.get('email');
        message = formData.get('message');
        files = Array.from(formData.getAll('file'));
      } else {
        const body = await req.json();
        name = body.name;
        email = body.email;
        message = body.message;
        files = undefined; // No files in JSON
      }
    } catch (error) {
      console.error('Error parsing request body:', error);
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }

    // Step 3: Ensure file data exists
    if (!files || files.length === 0) {
      return new Response(JSON.stringify({ error: 'No files provided' }), { status: 400 });
    }

    // Step 4: Prepare formData for Cloudinary
    const cloudinaryPromises = files.map(async (file) => {
      const formData = new globalThis.FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'assignmate');

      const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/deow6cqgi/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const cloudinaryResponse = await cloudinaryRes.json();

      if (!cloudinaryResponse.secure_url) {
        throw new Error('Cloudinary upload failed');
      }

      return cloudinaryResponse.secure_url;
    });

    const imageUrls = await Promise.all(cloudinaryPromises);

    // Step 5: Save form data to MongoDB
    try {
      const newFormData = new FormData({
        name,
        email,
        message,
        imageUrl: JSON.stringify(imageUrls),
      });

      await newFormData.save();
      // Return success response
      return new Response(JSON.stringify({ success: true, data: newFormData }), { status: 200 });
    } catch (error) {
      console.error('Error saving form data to MongoDB:', error);
      return new Response(JSON.stringify({ error: 'Failed to save form data' }), { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected server error:', error);
    return new Response(JSON.stringify({ error: 'Server encountered an error' }), { status: 500 });
  }
}
