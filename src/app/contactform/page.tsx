"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FormRow from "@/components/FormRow";
import FormLabel from "@/components/FormLabel";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !name) {
      setError("Name and email are required.");
      return;
    }

    setLoading(true);

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Form submission successful:", result);
        setLoading(false);
        setFormSubmitted(true);
      } else {
        console.error("Error submitting form:", result.error);
        setError(result.error || "Error submitting form. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("An error occurred during submission. Please try again.");
      setLoading(false);
    }
  }

  if (!isClient) return null;

  return (
    <Layout>
      <Container>
        {formSubmitted ? (
          <div className="text-white text-center">
            <h1 className="text-3xl font-medium">Form submitted successfully, we will get back to you soon!</h1>
          </div>
        ) : (
          <form
            className="bg-card max-w-lg border border-blue-700 animate-border-beam shadow-2xl shadow-black p-6 mx-auto rounded-xl"
            onSubmit={handleOnSubmit}
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <FormRow className="mb-5">
              <FormLabel htmlFor="name">Name</FormLabel>
              <InputText
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormRow>

            <FormRow className="mb-5">
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputText
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormRow>

            <FormRow className="mb-5">
              <FormLabel htmlFor="message">Requirements & Message</FormLabel>
              <InputText
                id="message"
                name="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormRow>

            {loading && (
              <div className="flex mb-5 text-blue-500">
                <p>Submitting, please wait...</p>
              </div>
            )}

            <Button className="submit">Submit</Button>
          </form>
        )}
      </Container>
    </Layout>
  );
}

export default Form;
