export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-12 text-center" style={{ fontFamily: "var(--font-orbitron)" }}>
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-red-900">
            <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Frontend
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• HTML & CSS</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-red-900">
            <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Backend
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Node.js</li>
              <li>• Express</li>
              <li>• Python</li>
              <li>• Database Design</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-red-900">
            <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Tools
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Git & GitHub</li>
              <li>• Docker</li>
              <li>• AWS</li>
              <li>• DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
