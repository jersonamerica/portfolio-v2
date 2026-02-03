export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2026 Jerson America. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-red-900 transition">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-red-900 transition">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-red-900 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
