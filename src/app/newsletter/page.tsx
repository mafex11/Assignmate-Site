// components/newsletter.tsx
'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/newsletter', { email });
      setSuccessMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred.');
    }
  }

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h4 className="text-xl md:text-2xl font-semibold">Join our newsletter</h4>
      <p className="text-base text-muted-foreground">For special offers and Discounts, Join now.</p>
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
        <a href="#" className="underline hover:no-underline">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}

export default Newsletter
