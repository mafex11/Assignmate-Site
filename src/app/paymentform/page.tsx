"use client";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FormRow from "@/components/FormRow";
import FormLabel from "@/components/FormLabel";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentId, setPaymentId] = useState(""); // New state for Payment ID
  const [message, setMessage] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onDrop = useCallback((acceptedFilesArray: File[]) => {
    const newFileNames = acceptedFilesArray.map((file) => file.name);
    setFileNames((prevNames) => [...prevNames, ...newFileNames]);
    setAcceptedFiles((prevFiles) => [...prevFiles, ...acceptedFilesArray]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    onError: (err) => setError("Error with file upload. Please try again."),
  });

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !paymentId) {
      setError("Name, email, and payment ID are required.");
      return;
    }

    if (acceptedFiles.length === 0) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("paymentId", paymentId); // Append Payment ID
    formData.append("message", message);

    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await fetch("/api/paymentform", { // Adjusted API route
        method: "POST",
        body: formData,
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
            <h1 className="text-3xl font-medium">Form submitted successfully!</h1>
            <p className="mt-4 text-lg text-blue-400">Thank you for your submission.</p>
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
              <FormLabel htmlFor="paymentId">Payment ID</FormLabel>
              <InputText
                id="paymentId"
                name="paymentId"
                type="text"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
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

            <FormRow className="mb-5">
              <FormLabel htmlFor="file">Please upload files regarding payment</FormLabel>
              <div
                {...getRootProps()}
                className={`border-dashed ${
                  isDragActive ? "border-blue-600" : ""
                }`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-blue-400">Drop the files here...</p>
                ) : (
                  <p className="text-blue-400 cursor-pointer">
                    Drag files here, or click to select files
                  </p>
                )}
              </div>
            </FormRow>

            {fileNames.length > 0 && (
              <div className="mb-5">
                <h4>Uploaded Files:</h4>
                <ul className="ml-10 text-blue-400">
                  {fileNames.map((fileName, index) => (
                    <li key={index}>{fileName}</li>
                  ))}
                </ul>
              </div>
            )}

            {loading && (
              <div className="flex mb-5 text-blue-500">
                <p>Uploading files, please wait...</p>
                <div role="status">
                  {/* Loader SVG */}
                  {/* Include your loader SVG code here */}
                </div>
              </div>
            )}

            <Button className="submit">Submit</Button>
          </form>
        )}
      </Container>
    </Layout>
  );
}

export default PaymentForm;
