import connectToDatabase from '../../../../lib/mongodb';
import FormDataModel from '../../../../models/FormData';

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
    let name, email, message, files = [];
    try {
      const formData = await req.formData();
      name = formData.get('name');
      email = formData.get('email');
      message = formData.get('message');
      files = formData.getAll('file');  // Multiple files
    } catch (error) {
      console.error('Error parsing request body:', error);
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }

    if (!files || files.length === 0) {
      return new Response(JSON.stringify({ error: 'No files provided' }), { status: 400 });
    }

    // Allowed file extensions for raw types
    const rawFileExtensions = ['docx', 'pdf', 'txt', 'ppt', 'doc'];
    
    let uploadedFiles = [];
    for (const file of files) {
      const fileExtension = file.name.split('.').pop().toLowerCase(); // Get file extension and normalize to lowercase

      // Set resourceType based on file extension
      const resourceType = rawFileExtensions.includes(fileExtension) ? 'raw' : 'auto';  // Detect raw files

      // Prepare formData for Cloudinary
      const cloudinaryFormData = new globalThis.FormData();
      cloudinaryFormData.append('file', file);
      cloudinaryFormData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
      cloudinaryFormData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

      try {
        const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME/${resourceType}/upload`, {
          method: 'POST',
          body: cloudinaryFormData,
        });
        const cloudinaryResponse = await cloudinaryRes.json();

        if (!cloudinaryResponse.secure_url) {
          throw new Error('Cloudinary upload failed');
        }

        uploadedFiles.push(cloudinaryResponse.secure_url);  // Add uploaded file URL to the array
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        return new Response(JSON.stringify({ error: 'Failed to upload file to Cloudinary' }), { status: 500 });
      }
    }

    // Step 3: Save form data with multiple files to MongoDB
    try {
      const newFormData = new FormDataModel({
        name,
        email,
        message,
        imageUrl: uploadedFiles,  // Save array of file URLs
      });

      await newFormData.save();
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
