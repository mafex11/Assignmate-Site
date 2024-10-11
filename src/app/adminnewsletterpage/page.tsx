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
    <div>
      <h1>Newsletter Emails</h1>
      {newsletters.length === 0 ? (
        <p>No newsletter emails found.</p>
      ) : (
        <div>
          <button onClick={copyAllEmails} style={{ marginBottom: '10px' }}>Copy All Emails</button>
          <ul>
            {newsletters.map((newsletter) => (
              <li key={newsletter._id}>
                <p>{newsletter.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsletterPage;
