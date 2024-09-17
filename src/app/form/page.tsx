"use client";
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [isClient, setIsClient] = useState(false);  // Track client-side rendering
  const [error, setError] = useState<string | null>(null);  // Track error messages
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  useEffect(() => {
    setIsClient(true);  // Ensure the code runs only on the client
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    try {
      setAcceptedFiles(acceptedFiles);
      
      acceptedFiles.forEach(file => {
        const reader = new FileReader();

        reader.onload = function () {
          setPreview(this.result);
        };

        reader.onerror = () => {
          setError('Error reading file');
        };

        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Error handling file drop:', error);
      setError('Error processing files. Please try again.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onError: (err) => setError('Error with file upload. Please try again.'),  // Catch any Dropzone-specific errors
  });

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  
    if (acceptedFiles.length === 0) return;
  
    const formData = new FormData();
    
    // Append user details
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    
    // Append files
    acceptedFiles.forEach(file => {
      formData.append('file', file);
    });

    try {
      const response = await fetch('/api/saveFormData', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log('Form submission successful:', result);
      } else {
        console.error('Error submitting form:', result.error);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  }

  // Prevent server-side rendering by returning null if not on the client
  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <Container>
        <h1 className="text-6xl font-black text-center text-slate-900 mb-20">
          Contact Us
        </h1>

        <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          <FormRow className="mb-5">
            <FormLabel htmlFor="name">Name</FormLabel>
            <InputText className='text-black' id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormRow>

          <FormRow className="mb-5">
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputText className='text-black' id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormRow>

          <FormRow className="mb-5">
            <FormLabel htmlFor="message">Message</FormLabel>
            <InputText className='text-black' id="message" name="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          </FormRow>

          <FormRow className="mb-5">
            <FormLabel htmlFor="image">Images</FormLabel>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? <p>Drop the files here...</p> : <p>Drag-n-drop some files here, or click to select files</p>}
            </div>
          </FormRow>

          {preview && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {Array.isArray(preview) 
                ? preview.map((img, index) => (
                  <div key={index} className="relative w-full">
                    <img src={img as string} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))
                : (
                  <img src={preview as string} alt="Upload preview" className="w-full h-auto object-cover" />
                )
              }
            </div>
          )}

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Form;