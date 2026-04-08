import Image from "next/image";
import Link from "next/link";
import { House } from "@/types";
//houses card brooo

interface HouseCardProps {
  house: House;
  index: number;
}

export default function HouseCard({ house, index }: HouseCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
          {house.name}
        </h3>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{house.location}</p>
        <p className="mb-4 text-xl font-bold text-blue-700">{house.price}</p>

        {/* Improved button */}
        <Link
          href={`/detail/${index}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-blue-700 transition-colors hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          View Details
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}