"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('/api/newsletterapi', { email });
      setSuccessMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h4 className="text-xl md:text-2xl font-semibold">Join our newsletter</h4>
      <p className="text-base text-muted-foreground">For special offers and Discounts, Subscribe now.</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
        <Input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
        />
        <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
          Subscribe
        </Button>
      </form>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <p className="text-xs text-muted-foreground">
        By subscribing you agree with our{' '}
        <a href="/privacypolicy" className="underline hover:no-underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default Newsletter;
