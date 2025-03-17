import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Error Code */}
      <h1 className="text-7xl font-bold text-primary">404</h1>

      {/* Message */}
      <p className="text-lg text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>

      {/* Back to Home Button */}
      <Link href="/" className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-opacity-90 transition">
         Go Back Home
      </Link>
    </div>
  );
}
