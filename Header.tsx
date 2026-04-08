// src/components/Header.tsx
"use client";

import Image from "next/image";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export default function Header({
  search,
  setSearch,
  category,
  setCategory,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-3 shadow-md dark:bg-gray-900 md:flex-nowrap md:px-8">
      {/* Search & Filter */}
      <div className="flex w-full max-w-md items-center md:w-auto">
        <div className="flex w-full items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="cursor-pointer appearance-none border-none bg-transparent px-2 py-1 text-sm font-semibold text-gray-800 outline-none dark:text-gray-200"
          >
            <option value="all">All Types</option>
            <option value="Condo">Condos</option>
            <option value="Villa">Villas</option>
            <option value="Townhouse">Townhouses</option>
          </select>

          <div className="mx-3 h-6 w-px bg-gray-300 dark:bg-gray-600" />

          <i className="fas fa-search mr-2 text-sm text-blue-700" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or location..."
            className="w-full border-none bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-gray-200 md:w-56"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="#condo-section"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Condos
        </a>
        <a
          href="#villa-section"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Villas
        </a>
        <a
          href="#townhouse-section"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
        Townhouses
        </a>
        <a
          href="#experience"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Contact
        </a>
      </nav>

      {/* === Social Icons with real links === */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Telegram */}
        <a
          href="https://t.me/your_telegram_username" // ← CHANGE THIS
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 active:scale-95"
          title="Contact on Telegram"
        >
          <Image
            src="/images/icons/telegram.png"
            alt="Telegram"
            width={44}
            height={44}
            className="h-9 w-9 md:h-11 md:w-11"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/your_page_name" // ← CHANGE THIS
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 active:scale-95"
          title="Facebook Page"
        >
          <Image
            src="/images/icons/facebook.png" // ← or facebook.png
            alt="Facebook"
            width={44}
            height={44}
            className="h-9 w-9 md:h-11 md:w-11"
          />
        </a>

        {/* Phone Call */}
        <a
          href="tel:+85512735789" // ← CHANGE THIS (your real phone number with +855)
          className="transition-transform hover:scale-110 active:scale-95"
          title="Call Us"
        >
          <Image
            src="/images/icons/phone-call.png"
            alt="Phone Call"
            width={44}
            height={44}
            className="h-9 w-9 md:h-11 md:w-11"
          />
        </a>
      </div>
    </header>
  );
}