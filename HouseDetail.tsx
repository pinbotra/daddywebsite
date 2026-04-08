"use client";

import { useState } from "react"; // Added to fix the "copied" error
import Image from "next/image";
import { useRouter } from "next/navigation";
import { House } from "@/types";

interface HouseDetailProps {
  house: House;
}

export default function HouseDetail({ house }: HouseDetailProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false); // State for the copy feedback
  const images = [house.image, house.image, house.image];

  // --- 1. Telegram Function ---
  const contactTelegram = () => {
    const telegramUsername = "your_username"; // Change this to your real username
    const message = encodeURIComponent(`Hello! I'm interested in: ${house.name} (${house.price})`);
    window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
  };

  // --- 2. Copy Link Function ---
  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      // Reset the text back to "Copy Page Link" after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* --- GO BACK BUTTON --- */}
        <button
          onClick={() => router.back()}
          className="group mb-6 inline-flex items-center gap-3 py-2 text-xl font-bold text-gray-900 transition-all hover:opacity-70 dark:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tracking-tight">Go back</span>
        </button>

        {/* --- MAIN CARD --- */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={house.image}
              alt={house.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {house.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                  📍 {house.location} • {house.type}
                </p>
              </div>
              <div className="text-3xl font-black text-blue-700 dark:text-blue-400">
                {house.price}
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
               {images.slice(1).map((img, i) => (
                 <div key={i} className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <Image src={img} alt="detail" fill className="object-cover" />
                 </div>
               ))}
            </div>

            {/* --- ACTION BUTTONS (Matched to your screenshot) --- */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              {/* TELEGRAM */}
              <button 
                onClick={contactTelegram}
                className="flex-1 flex items-center justify-center gap-2.5 rounded-xl bg-[#0088cc] py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(0,136,204,0.39)] transition-all hover:bg-[#0077b5] active:scale-[0.98]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2s-.21-.05-.31-.03c-.14.03-2.29 1.45-6.46 4.26-.61.42-1.16.63-1.65.61-.54-.01-1.58-.31-2.35-.57-.95-.31-1.7-.47-1.63-.99.04-.27.42-.55 1.15-.84 4.47-1.94 7.45-3.23 8.95-3.86 4.27-1.8 5.15-2.11 5.73-2.12.13 0 .42.03.61.19.16.13.21.32.23.45.01.06.02.19 0 .33z"/>
                </svg>
                <span className="text-[15px]">Contact on Telegram</span>
              </button>

              {/* COPY LINK */}
              <button 
                onClick={copyToClipboard}
                className="flex-1 flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white py-4 text-base font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                {copied ? (
                  <span className="text-green-600 font-bold text-[15px]">✓ Link Copied!</span>
                ) : (
                  <>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                    </svg>
                    <span className="text-[15px]">Copy Page Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}