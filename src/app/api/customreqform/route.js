import connectToDatabase from '../../../../lib/mongodb';
import FormDataModel from '../../../../models/FormData';

export async function POST(req) {
  try {
    await connectToDatabase();

    let name, email, message, price, files = [];
    try {
      const formData = await req.formData();
      name = formData.get('name');
      email = formData.get('email');
      message = formData.get('message');
      price = formData.get('price'); // Get price from the form data
      files = formData.getAll('file');
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }

    if (!files || files.length === 0) {
      return new Response(JSON.stringify({ error: 'No files provided' }), { status: 400 });
    }

    // Upload files to Cloudinary (unchanged)
    let uploadedFiles = [];
    for (const file of files) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const resourceType = ['docx', 'pdf', 'txt', 'ppt', 'doc'].includes(fileExtension) ? 'raw' : 'auto';
      const cloudinaryFormData = new globalThis.FormData();
      cloudinaryFormData.append('file', file);
      cloudinaryFormData.append('upload_preset', 'assignmate');
      cloudinaryFormData.append('api_key', '329738488717522');

      try {
        const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/deow6cqgi/${resourceType}/upload`, {
          method: 'POST',
          body: cloudinaryFormData,
        });
        const cloudinaryResponse = await cloudinaryRes.json();
        uploadedFiles.push(cloudinaryResponse.secure_url);
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to upload file to Cloudinary' }), { status: 500 });
      }
    }

    // Save form data with price
    try {
      const newFormData = new FormDataModel({
        name,
        email,
        message,
        price, // Include price
        imageUrl: uploadedFiles,
      });

      await newFormData.save();
      return new Response(JSON.stringify({ success: true, data: newFormData }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to save form data' }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server encountered an error' }), { status: 500 });
  }
}
