"use client"; // Add this directive at the top

import { useEffect, useState } from 'react';
import axios from 'axios';

interface FormData {
  _id: string;
  name: string;
  email: string;
  message: string;
  imageUrl: string[];
  createdAt: string;
  isTagged?: boolean; // Add optional property for tagging
}

const FormsPage = () => {
  const [forms, setForms] = useState<FormData[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Default to 'desc' for newest first

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('/api/fetchcustomforms'); // Adjust this if needed
        const formsWithTags = response.data.map((form: FormData) => ({
          ...form,
          isTagged: false, // Initialize to false
        }));
        setForms(formsWithTags);
        // Restore tagged state from localStorage
        restoreTaggedState(formsWithTags);
      } catch (error) {
        console.error('Error fetching form data', error);
      }
    };

    fetchForms();
  }, []);

  // Restore tagged state from localStorage
  const restoreTaggedState = (fetchedForms: FormData[]) => {
    const taggedForms = localStorage.getItem('taggedForms');
    if (taggedForms) {
      const parsedTaggedForms: string[] = JSON.parse(taggedForms);
      const updatedForms = fetchedForms.map(form => ({
        ...form,
        isTagged: parsedTaggedForms.includes(form._id), // Check if the form is tagged
      }));
      setForms(updatedForms);
    }
  };

  // Toggle the tag for a form
  const toggleTag = (id: string) => {
    setForms(prevForms => {
      const updatedForms = prevForms.map(form => 
        form._id === id ? { ...form, isTagged: !form.isTagged } : form
      );

      // Update localStorage with current tagged forms
      const taggedForms = updatedForms.filter(form => form.isTagged).map(form => form._id);
      localStorage.setItem('taggedForms', JSON.stringify(taggedForms));

      return updatedForms;
    });
  };

  // Sort forms by date
  const sortedForms = forms.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA; // Sort based on order
  });

  // Handle sorting order change
  const handleSortOrderChange = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc')); // Toggle sorting order
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Submissions</h1>
      <button
        onClick={handleSortOrderChange}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300"
      >
        Sort by Date: {sortOrder === 'asc' ? 'Newest' : 'Oldest'}
      </button>
      {sortedForms.length === 0 ? (
        <p className="text-lg text-gray-600">No forms submitted yet.</p>
      ) : (
        <ul className="w-full min-w-lg max-w-3xl space-y-4">
          {sortedForms.map(form => (
            <li key={form._id} className="border rounded-lg p-4 shadow-md bg-black">
              <h2 className="text-xl font-semibold">{form.name}</h2>
              <p className="text-gray-400">Email: <span className="text-gray-300 font-medium">{form.email}</span></p>
              <p className="text-gray-400">
                Message: 
                <span className="font-medium block text-gray-300 break-words">{form.message}</span>
              </p>
              <p className="text-gray-400">Date Submitted: <span className="text-gray-300 font-medium">{new Date(form.createdAt).toLocaleDateString()}</span></p>
              <h3 className="text-lg font-semibold mt-2">Attached Files:</h3>
              <ul className="list-disc list-inside pl-5">
                {form.imageUrl.map((url, index) => (
                  <li key={index}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Download File {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleTag(form._id)}
                className={`mt-4 px-4 py-2 rounded-lg transition duration-300 w-36 
                  ${form.isTagged ? 'bg-green-500 text-white' : 'bg-red-600 text-gray-200 hover:bg-gray-500'}`}
              >
                {form.isTagged ? 'Finished' : 'Unfinished'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormsPage;
