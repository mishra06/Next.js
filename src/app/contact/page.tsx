"use client";

import React, { FormEvent, useState } from "react";
import { Vortex } from "@/components/ui/vortex";

function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
    setEmail(""),
    setMessage("")
  };
  return (
    <div className="w-[calc(100%-4rem)] mx-auto  w-screen  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-screen h-screen"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className='className="mt-2 text-6xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"'>
            Contact&apos;Us
          </h2>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full text-white p-4 bg-neutral-950 placeholder:text-white-700"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 text-white focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-white-700"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Page;
