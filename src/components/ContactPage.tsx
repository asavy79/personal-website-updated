import { Input } from "./Input";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

type SubmissionType = {
  name: string;
  email: string;
  message: string;
};

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const submission: SubmissionType = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await addDoc(collection(db, "messages"), submission);
      setSubmitted(true);
    } catch (e) {
      setError(true);
      console.log(e);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="contact"
      className={
        "flex flex-col items-center p-5" +
        `transition-opacity duration-500 ${inView ? "fade-in" : "fade-out"}`
      }
      ref={ref}
    >
      <h3 className="p-3 text-5xl font-light text-blue-800 mt-20">
        Contact Me
      </h3>
      <div className="flex flex-row space-x-10 mt-10">
        <div>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 items-center mb-10"
          >
            <div>
              <h3 className="font-bold">Name</h3>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name..."
                required
              />
            </div>

            <div>
              <h3 className="font-bold">Email</h3>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email..."
                required
                type="email"
              />
            </div>
            <div>
              <h3 className="font-bold">Message</h3>
              <textarea
                className="p-3 shadow-md rounded-xl border border-gray-500"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols={36}
                rows={10}
                required
              ></textarea>
            </div>
            <h3 className="text-green-500">
              {submitted ? "Message sent!" : ""}
            </h3>
            <h3 className="text-red-500">
              {error ? "Something went wrong" : ""}
            </h3>
            <button
              type="submit"
              className="rounded-full bg-blue-600 w-40 p-3 text-white hover:bg-blue-500 text-center font-light"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
