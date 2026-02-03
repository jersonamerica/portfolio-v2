export default function ExperienceSection() {
  const experiences = [
    {
      company: "Extreme Unreal Technology Inc.",
      position: "Game Developer",
      period: "Jul 2023 - Jan 2025",
    },
    {
      company: "GetDevs",
      position: "Sr React JS Developer",
      period: "Jan 2022 - Aug 2023",
    },
    {
      company: "Swapoolabs",
      position: "Front End Developer",
      period: "Nov 2018 - Nov 2021",
    },
    {
      company: "Diversify OSS",
      position: "Front End Developer",
      period: "Jun 2018 - Sep 2018",
    },
    {
      company: "Idigital Enterprise Inc",
      position: "Front End Developer",
      period: "Feb 2017 - Feb 2018",
    },
    {
      company: "Dottystyle Creative",
      position: "Front End Developer",
      period: "Feb 2016 - Sep 2016",
    },
    {
      company: "Gestalt Consulting Inc",
      position: "System Developer",
      period: "Aug 2015 - Jan 2016",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-black mb-12 text-center"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-900"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {exp.position}
                  </h3>
                  <p className="text-red-900 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-600 whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
