export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
          Jerson America
        </h1>
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
