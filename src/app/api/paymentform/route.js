import connectToDatabase from '../../../../lib/mongodb'; // Ensure this points to your database connection utility
import PaymentForm from '../../../../models/paymentforms'; // Adjust the import path if necessary

export async function POST(req) {
  try {
    // Step 1: Connect to MongoDB
    await connectToDatabase();

    // Step 2: Parse request body
    let name, email, paymentId, message, files = [];
    try {
      const formData = await req.formData();
      name = formData.get('name');
      email = formData.get('email');
      paymentId = formData.get('paymentId'); // New field for Payment ID
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
      cloudinaryFormData.append('upload_preset', 'assignmate'); // Adjust based on your Cloudinary preset
      cloudinaryFormData.append('api_key', '329738488717522'); // Ensure this is stored securely

      try {
        const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/deow6cqgi/${resourceType}/upload`, {
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
      const newPaymentForm = new PaymentForm({
        name,
        email,
        paymentId, // Save Payment ID
        message,
        imageUrl: uploadedFiles,  // Save array of file URLs
      });

      await newPaymentForm.save();
      return new Response(JSON.stringify({ success: true, data: newPaymentForm }), { status: 200 });
    } catch (error) {
      console.error('Error saving form data to MongoDB:', error);
      return new Response(JSON.stringify({ error: 'Failed to save form data' }), { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected server error:', error);
    return new Response(JSON.stringify({ error: 'Server encountered an error' }), { status: 500 });
  }
}
