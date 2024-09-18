"use client";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
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
  const [fileNames, setFileNames] = useState<string[]>([]); // Track file names for display
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]); // Track uploaded files
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission status

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
    multiple: true, // Enable multiple file uploads
    onError: (err) => setError("Error with file upload. Please try again."),
  });

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email&&!name) {
      setError("Name and email is required.");
      return;
    }

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!name) {
      setError("Name is required.");
      return;
    }

    if (acceptedFiles.length === 0) return;

    setLoading(true); // Show loader when upload starts

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await fetch("/api/saveFormData", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Form submission successful:", result);
        setLoading(false); // Hide loader on success
        setFormSubmitted(true); // Set form submission status
      } else {
        console.error("Error submitting form:", result.error);
        setError(result.error || "Error submitting form. Please try again.");
        setLoading(false); // Hide loader on error
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("An error occurred during submission. Please try again.");
      setLoading(false); // Hide loader on error
    }
  }

  if (!isClient) return null;

  return (
    <Layout>
      <Container>
        {formSubmitted ? ( // Conditionally render success message or form
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
              <FormLabel htmlFor="message">Message</FormLabel>
              <InputText
                id="message"
                name="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormRow>

            <FormRow className="mb-5">
              <FormLabel htmlFor="file">Files</FormLabel>
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

            {/* Display file names */}
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

            {/* Loader */}
            {loading && (
              <div className="flex mb-5 text-blue-500">
                <p>Uploading files, please wait...</p>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="ml-6 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
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

export default Form;
