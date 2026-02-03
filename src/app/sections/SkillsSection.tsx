export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "PHP",
        "Java",
        "Javascript",
        "jQuery",
        "Meteor",
        "Reactjs",
        "Redux",
        "NextJS",
        "Angular",
        "Powerscript",
        "TailwindCSS",
      ],
      badgeColor: "bg-blue-50 text-blue-900",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "C#", "MySQL", "MSSQL", "DB2", "MongoDB"],
      badgeColor: "bg-green-50 text-green-900",
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "Webpack",
        "SASS/LESS",
        "Typescript",
        "Bootstrap",
        "UIkit",
        "Material UI",
        "jest",
        "enzyme",
        "react-testing-library",
        "react-query",
        "Unity",
        "Blender",
      ],
      badgeColor: "bg-purple-50 text-purple-900",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-black mb-4 text-center"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Skills
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive collection of technologies and tools I&apos;ve
          mastered throughout my development journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-900"
            >
              <h3
                className="text-2xl font-bold text-black mb-6"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${category.badgeColor} px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
