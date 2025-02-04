import React from "react";
import icon from "../../../../assets/icon_large.png";
import Image from "next/image";



const certificationData = {
  title: "Certification Pathway",
  description:
    "Buljee Tech provides a clear and complete certification pathway to help you earn industry-recognized certifications and land jobs with top global employers. Our pathway ensures that you get the best training, resources, and support at every step.",
  steps: [
    {
      title: "Choose Courses",
      description:
        "Start by exploring the available courses to find the one that matches your career aspirations and industry demands. Our comprehensive catalog provides specialized courses, each designed to offer distinct benefits. If you're unsure about the right course, our support team is available 24/7.",
    },
    {
      title: "Enroll for the Program",
      description:
        "After deciding on your preferred course under any program, navigate through our website/application to register quickly and securely. Enter your personal information, go through payment, and you're done. The whole process of enrollment only takes a few minutes to complete.",
    },
    {
      title: "Training",
      description:
        "At Buljee Tech we offer extensive training programs that take on average about 3 months to complete and are specially designed to meet the particular needs of each subject. These hands-on course training sessions are conducted in our physical venues, ensuring you receive the best learning experience.",
    },
    {
      title: "Get Ready for the Certification",
      description:
        "When working through the training, make sure to get ready for the final central certification exam. Collect the materials, for instance, curriculum, books, online sheets, study guides & attend mock exams, workshops.",
    },
    {
      title: "Take the Exam",
      description:
        "After completing your training, you'll be registered for the final exam, which will be held at designated compounds. Our exams adhere to international standards, such as ISO certifications. Be sure to arrive early with the necessary identification and follow all the guidelines to ensure a smooth exam experience.",
    },
    {
      title: "Results & Certification",
      description:
        "After taking the evaluation, you can be rest assured that your result shall be delivered in a few working days. In case you manage to clear the exam, well congratulations, now you get to hold a certificate that is highly sought after and accepted by industries all over the world!",
    },
    {
      title: "Employment",
      description:
        "Buljee guarantees job placements for all certified graduates, ensuring that they step into the digital workforce with confidence. Through our alumni network and partnerships with 3000+ businesses across the globe, we assure all certified trainees a guaranteed job prospects with a base salary starting from BDT 30,000.",
    },
  ],
};

const CertificationPathway = () => {
  return (
    <div className="bg-[#01334A] text-white p-6 md:p-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        {certificationData.title}
      </h1>
      <p className="text-center max-w-2xl mt-4">
        {certificationData.description}
      </p>
      <div className="relative flex flex-col mt-8 w-full max-w-5xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-info-secondary-dark hidden md:block"></div>
        {certificationData.steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center w-full py-6 ${
              index % 2 === 0
                ? "md:flex-row md:items-end md:text-right"
                : "md:flex-row-reverse md:items-start  md:text-left"
            }`}
          >
            <div className="relative bg-transparent p-6  w-full md:w-1/2">
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <Image src={icon} alt="icon" className="w-12 h-12" />
              </div>
              <div className="text-xl font-semibold ">{step.title}</div>
              <p className=" mt-2 ">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationPathway;


