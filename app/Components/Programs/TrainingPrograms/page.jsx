import React from "react";

const headerData = {
  title: "What Bulipe Tech Training Programs Include",
  description:
    "These hands-on course training sessions are conducted in our physical venues, ensuring you receive the best learning experience. You will be able to access course materials on the Bulipe App or through our repository on the web to review & study materials at your convenience.",
};

const programs = [
  {
    id: 1,
    title: "Workshops",
    description: "Hands-on, interactive workshops led by industry experts.",
  },
  {
    id: 2,
    title: "Instructor-led Classes",
    description:
      "Live classes with real-time guidance and personalized instruction.",
  },
  {
    id: 3,
    title: "Online Training Modules",
    description:
      "Flexible, self-paced lessons available through the Bulipe App.",
  },
  {
    id: 4,
    title: "Practical Assignments",
    description:
      "Real-world tasks to apply learned skills and gain hands-on experience.",
  },
  {
    id: 5,
    title: "Case Studies",
    description:
      "Analysis of actual industry scenarios to reinforce learning and problem-solving.",
  },
  {
    id: 6,
    title: "Guest Lectures from Industry Experts",
    description:
      "Insights from professionals about industry trends and best practices.",
  },
  {
    id: 7,
    title: "Interactive Discussions and Group Projects",
    description:
      "Collaborative activities to develop communication and teamwork skills.",
  },
  {
    id: 8,
    title: "Mock Exams and Practice Tests",
    description: "Simulated exams to prepare for the final certification.",
  },
  {
    id: 9,
    title: "Mentorship and Coaching",
    description:
      "Personalized guidance from experienced mentors for skill refinement and career advice.",
  },
  {
    id: 10,
    title: "Career Development Sessions",
    description:
      "Resume building, interview preparation, and networking to help secure job opportunities.",
  },
];

export default function TrainingPrograms() {
  return (
    <div>
      <section className="bg-gray-50 py-12 px-6 lg:px-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {headerData.title}
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            {headerData.description}
          </p>
        </div>
        {/* Program List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex items-start bg-white rounded-lg p-4 border border-info-secondary-light"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-info-secondary-light text-black font-bold rounded-full mr-4">
                {program.id}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
