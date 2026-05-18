import React from "react";
import { Code, Database, Server, Wrench, BookOpen, Award, GraduationCap, Trophy } from "lucide-react";

function About({ profile }) {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Code,
      color: "text-blue-400",
      items: profile?.skills?.frontend || [],
    },
    {
      name: "Backend",
      icon: Server,
      color: "text-green-400",
      items: profile?.skills?.backend || [],
    },
    {
      name: "Databases",
      icon: Database,
      color: "text-yellow-400",
      items: profile?.skills?.databases || [],
    },
    {
      name: "Languages",
      icon: BookOpen,
      color: "text-purple-400",
      items: profile?.skills?.languages || [],
    },
    {
      name: "Tools",
      icon: Wrench,
      color: "text-teal-400",
      items: profile?.skills?.tools || [],
    },
    {
      name: "Coursework",
      icon: GraduationCap,
      color: "text-orange-400",
      items: profile?.skills?.coursework || [],
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#1e1e1e] p-4 text-gray-300 sm:p-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
            About Me
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
        </div>

        {/* Profile Section */}
        <div className="mb-10 flex cursor-pointer flex-col items-center gap-8 rounded-lg border border-gray-700 bg-[#252526] p-8 transition-transform duration-300 ease-in-out hover:-translate-y-2 md:flex-row md:gap-12">
          {profile?.avatarUrl && (
            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-500/50 shadow-lg shadow-blue-500/20 md:h-56 md:w-56">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-blue-400">{profile?.name}</span>
            </h2>
            <p className="mt-1 text-lg text-gray-400">{profile?.title}</p>
            {profile?.location && (
              <p className="mt-1 text-sm text-gray-500">📍 {profile.location}</p>
            )}
            <p className="mt-4 max-w-lg text-gray-400 leading-relaxed">
              {profile?.summary}
            </p>
          </div>
        </div>

        {/* Education Section */}
        {profile?.education && (
          <div className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-blue-400 w-6 h-6" /> Education
            </h2>
            <div className="rounded-lg border border-gray-700 bg-[#252526] p-6 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{profile.education.degree}</h3>
                  <p className="text-blue-400 mt-1">{profile.education.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{profile.education.period}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 font-semibold">
                    CGPA: {profile.education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-2">
            <Code className="text-blue-400 w-6 h-6" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-lg border border-gray-700 bg-[#252526] p-5 shadow-md hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                  <h3 className="text-base font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        {profile?.achievements && (
          <div className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="text-yellow-400 w-6 h-6" /> Achievements & Certifications
            </h2>
            <div className="rounded-lg border border-gray-700 bg-[#252526] p-6 space-y-3">
              {profile.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300">
                  <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {profile?.skills?.soft && (
          <div className="mb-4">
            <h2 className="mb-4 text-2xl font-bold text-white">Soft Skills</h2>
            <div className="flex flex-wrap gap-3">
              {profile.skills.soft.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-[#252526] border border-gray-700 text-gray-300 text-sm rounded-full hover:border-blue-500 hover:text-blue-300 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default About;
