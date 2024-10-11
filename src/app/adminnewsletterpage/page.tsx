"use client"; // Add this directive at the top

import { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsletterData {
  _id: string;
  email: string;
}

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<NewsletterData[]>([]);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await axios.get('/api/fetchnewsletter'); // Ensure this matches your API endpoint
        setNewsletters(response.data);
      } catch (error) {
        console.error('Error fetching newsletter data', error);
      }
    };

    fetchNewsletters();
  }, []);

  // Function to copy all emails
  const copyAllEmails = () => {
    const emails = newsletters.map(newsletter => newsletter.email).join(', ');
    navigator.clipboard.writeText(emails).then(() => {
      alert('All emails copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy emails: ', err);
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4 md:px-0">
      <h1 className="text-3xl font-semibold mb-6">Newsletter Emails</h1>
      {newsletters.length === 0 ? (
        <p className="text-lg text-gray-500">No newsletter emails found.</p>
      ) : (
        <div className="w-full max-w-3xl">
          <button 
            onClick={copyAllEmails} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-6 hover:bg-blue-600 transition"
          >
            Copy All
          </button>
          <ul className="space-y-4">
            {newsletters.map((newsletter) => (
              <li 
                key={newsletter._id} 
                className="px-4 py-2 bg-gray-100 rounded-md shadow-sm"
              >
                <p className="text-blue-500">{newsletter.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsletterPage;
