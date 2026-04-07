import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 rounded-md border border-gray-300 bg-white p-4 sm:p-6">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-sm text-gray-500">
        The alias may have been mistyped, deleted, or never created in the first
        place.
      </p>
      <Link href="/" className="text-sm text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
