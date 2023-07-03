"use client";

import { useState } from "react";

export default function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", Name);
    console.log("Email: ", Email);
    console.log("Message: ", Message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="Name">Full Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={Name}
            type="text"
            id="Name"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            type="text"
            id="Email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="Message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={Message}
            className="h-32"
            id="Message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}