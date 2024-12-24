"use client";

import { useState } from "react";

export const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://formspree.io/f/xvgggrjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-3">
      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
        Contact
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Get in Touch
      </h2>
      <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Want to chat? Just shoot me a dm and I&apos;ll respond whenever I can. I
        will ignore all soliciting.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded dark:text-black"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
