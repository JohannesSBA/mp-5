"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(url, alias);
    setLoading(true);
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, alias }),
    });
    if (!response.ok) {
      const data = (await response.json()) as { message: string };
      toast.error(data.message, {
        position: "top-center",
      });
      setLoading(false);
      return;
    }
    const data = await response.json();
    toast.success("URL shortened", {
      position: "top-center",
    });
    setUrl("");
    setAlias("");
    setLoading(false);
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const shortUrl = `${baseUrl}/r/${alias || "your-alias"}`;

  return (
    <main className="flex min-h-screen w-full justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header className="flex w-full flex-col gap-2 rounded-md bg-white px-4 py-6 sm:px-6 sm:py-8">
          <h1 className="text-3xl font-bold sm:text-4xl">URL Shortener</h1>
          <p className="text-sm text-gray-500">
            Enter a URL to shorten and an optional alias.
          </p>
        </header>
        <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start">
          <form
            onSubmit={handleSubmit}
            className="flex min-w-0 w-full flex-1 flex-col gap-4 rounded-md border border-gray-300 bg-white p-4 sm:p-6"
          >
            <h2 className="text-2xl font-bold">Shorten a URL</h2>
            <p className="text-sm text-gray-500">
              Enter a URL to shorten and an optional alias.
            </p>
            <div className="flex flex-col gap-2">
              <label htmlFor="url">URL</label>
              <input
                type="text"
                id="url"
                placeholder="Enter your URL"
                className="border border-gray-300 rounded-md p-2"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="alias">Alias</label>
              <input
                type="text"
                id="alias"
                placeholder="Enter your alias"
                className="border border-gray-300 rounded-md p-2"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2"
            >
              {loading ? "Shortening..." : "Shorten"}
            </button>
          </form>
          <div className="flex min-w-0 w-full flex-col gap-2 rounded-md border border-gray-300 bg-white p-4 sm:max-w-md sm:p-6 lg:w-[22rem] lg:max-w-none">
            <h2 className="text-2xl font-bold">Quick Preview</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 break-words">
                <h1>URl: {url}</h1>
                <p>Alias: {shortUrl}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
