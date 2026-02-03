export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-black mb-12 text-center"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Experiences
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-black">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  Senior Developer
                </h3>
                <p className="text-red-900 font-semibold">Tech Company Inc.</p>
              </div>
              <span className="text-gray-600">2021 - Present</span>
            </div>
            <p className="text-gray-700">
              Led development of full-stack applications, managed team of 5
              developers, and implemented CI/CD pipelines for improved
              deployment efficiency.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-black">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  Full Stack Developer
                </h3>
                <p className="text-red-900 font-semibold">
                  Digital Solutions Co.
                </p>
              </div>
              <span className="text-gray-600">2019 - 2021</span>
            </div>
            <p className="text-gray-700">
              Developed and maintained multiple web applications using React and
              Node.js. Collaborated with UX team to implement responsive designs
              and improve user experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-black">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  Junior Developer
                </h3>
                <p className="text-red-900 font-semibold">StartUp Ventures</p>
              </div>
              <span className="text-gray-600">2018 - 2019</span>
            </div>
            <p className="text-gray-700">
              Started career as a junior developer working on frontend
              components and learning best practices in web development and
              agile methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
