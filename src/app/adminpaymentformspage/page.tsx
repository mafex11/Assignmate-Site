"use client"; // Add this directive at the top

import { useEffect, useState } from 'react';
import axios from 'axios';

interface PaymentFormData {
  _id: string;
  name: string;
  email: string;
  paymentId: string;
  message: string;
  imageUrl: string[];
  createdAt: string;
  isTagged?: boolean; // Optional property for tagging
}

const PaymentFormsPage = () => {
  const [paymentForms, setPaymentForms] = useState<PaymentFormData[]>([]);
  const [sortedByDate, setSortedByDate] = useState(true);

  useEffect(() => {
    const fetchPaymentForms = async () => {
      try {
        const response = await axios.get('/api/fetchpaymentforms'); // Adjust this if needed
        const paymentFormsWithTags = response.data.map((paymentForm: PaymentFormData) => ({
          ...paymentForm,
          isTagged: false, // Initialize to false
        }));
        setPaymentForms(paymentFormsWithTags);
        restoreTaggedState(paymentFormsWithTags); // Restore tagged state from localStorage
      } catch (error) {
        console.error('Error fetching payment form data', error);
      }
    };

    fetchPaymentForms();
  }, []);

  // Restore tagged state from localStorage
  const restoreTaggedState = (fetchedForms: PaymentFormData[]) => {
    const taggedForms = localStorage.getItem('taggedPaymentForms');
    if (taggedForms) {
      const parsedTaggedForms: string[] = JSON.parse(taggedForms);
      const updatedForms = fetchedForms.map(form => ({
        ...form,
        isTagged: parsedTaggedForms.includes(form._id), // Check if the form is tagged
      }));
      setPaymentForms(updatedForms);
    }
  };

  // Toggle the tag for a form
  const toggleTag = (id: string) => {
    setPaymentForms(prevForms => {
      const updatedForms = prevForms.map(form =>
        form._id === id ? { ...form, isTagged: !form.isTagged } : form
      );

      // Update localStorage with current tagged forms
      const taggedForms = updatedForms.filter(form => form.isTagged).map(form => form._id);
      localStorage.setItem('taggedPaymentForms', JSON.stringify(taggedForms));

      return updatedForms;
    });
  };

  // Sorting function to toggle between sorting by date
  const sortFormsByDate = () => {
    const sortedForms = [...paymentForms].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortedByDate ? dateA - dateB : dateB - dateA; // Toggle between ascending and descending
    });
    setPaymentForms(sortedForms);
    setSortedByDate(!sortedByDate);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Payment Form Submissions</h1>
      <button
        onClick={sortFormsByDate}
        className="mb-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
      >
        {sortedByDate ? 'Sort by Oldest' : 'Sort by Newest'}
      </button>
      {paymentForms.length === 0 ? (
        <p className="text-lg text-gray-600">No payment forms submitted yet.</p>
      ) : (
        <ul className="w-full max-w-3xl space-y-4">
          {paymentForms.map(paymentForm => (
            <li key={paymentForm._id} className="border rounded-lg p-4 shadow-md bg-black">
              <h2 className="text-xl font-semibold">{paymentForm.name}</h2>
              <p className="text-gray-400">
                Email: <span className="text-gray-300 font-medium">{paymentForm.email}</span>
              </p>
              <p className="text-gray-400">
                Payment ID: <span className="font-medium text-gray-300">{paymentForm.paymentId}</span>
              </p>
              <p className="text-gray-400">
                Message: <span className="font-medium block text-gray-300 break-words">{paymentForm.message}</span>
              </p>
              <p className="text-gray-400">
                Date Submitted: <span className="text-gray-300 font-medium">{new Date(paymentForm.createdAt).toLocaleDateString()}</span>
              </p>
              <h3 className="text-lg font-semibold mt-2">Attached Files:</h3>
              <ul className="list-disc list-inside pl-5">
                {paymentForm.imageUrl.map((url, index) => (
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
                onClick={() => toggleTag(paymentForm._id)}
                className={`mt-4 px-4 py-2 rounded-lg transition duration-300 w-36 
                  ${paymentForm.isTagged ? 'bg-green-500 text-white' : 'bg-red-600 text-gray-200 hover:bg-gray-500'}`}
              >
                {paymentForm.isTagged ? 'Finished' : 'Unfinished'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentFormsPage;
