export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        <ul className="flex gap-8">
          <li>
            <a href="#profile" className="hover:text-red-900 transition">
              Profile
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-red-900 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-red-900 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-900 transition">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
