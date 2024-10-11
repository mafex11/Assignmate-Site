"use client"; // Add this directive at the top

import { useEffect, useState } from 'react';
import axios from 'axios';

interface ContactFormData {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isTagged?: boolean; // Add optional property for tagging
}

const ContactFormsPage = () => {
  const [contactForms, setContactForms] = useState<ContactFormData[]>([]);

  useEffect(() => {
    const fetchContactForms = async () => {
      try {
        const response = await axios.get('/api/fetchcontactforms'); // Adjust this if needed
        const formsWithTags = response.data.map((form: ContactFormData) => ({
          ...form,
          isTagged: false, // Initialize to false
        }));
        setContactForms(formsWithTags);
        // Restore tagged state from localStorage
        restoreTaggedState(formsWithTags);
      } catch (error) {
        console.error('Error fetching contact form data', error);
      }
    };

    fetchContactForms();
  }, []);

  // Restore tagged state from localStorage
  const restoreTaggedState = (fetchedForms: ContactFormData[]) => {
    const taggedForms = localStorage.getItem('taggedContactForms');
    if (taggedForms) {
      const parsedTaggedForms: string[] = JSON.parse(taggedForms);
      const updatedForms = fetchedForms.map(form => ({
        ...form,
        isTagged: parsedTaggedForms.includes(form._id), // Check if the form is tagged
      }));
      setContactForms(updatedForms);
    }
  };

  // Toggle the tag for a form
  const toggleTag = (id: string) => {
    setContactForms(prevForms => {
      const updatedForms = prevForms.map(form => 
        form._id === id ? { ...form, isTagged: !form.isTagged } : form
      );

      // Update localStorage with current tagged forms
      const taggedForms = updatedForms.filter(form => form.isTagged).map(form => form._id);
      localStorage.setItem('taggedContactForms', JSON.stringify(taggedForms));

      return updatedForms;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      {contactForms.length === 0 ? (
        <p className="text-lg text-gray-600">No contact forms submitted yet.</p>
      ) : (
        <ul className="w-full max-w-3xl space-y-4">
          {contactForms.map(form => (
            <li key={form._id} className="border rounded-lg p-4 shadow-md bg-black">
              <h2 className="text-xl font-semibold">{form.name}</h2>
              <p className="text-gray-400">Email: <span className="text-gray-300 font-medium">{form.email}</span></p>
              <p className="text-gray-400">
                Message: 
                <span className="font-medium block text-gray-300 break-words">{form.message}</span>
              </p>
              <p className="text-gray-400">Date Submitted: <span className="text-gray-300 font-medium">{new Date(form.createdAt).toLocaleDateString()}</span></p>
              
              <button
                onClick={() => toggleTag(form._id)}
                className={`mt-4 px-4 py-2 rounded-lg transition duration-300 w-36 
                  ${form.isTagged ? 'bg-green-500 text-white' : 'bg-red-600 text-gray-200 hover:bg-gray-500'}`}
              >
                {form.isTagged ? 'Reviewed' : 'Pending Review'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactFormsPage;
