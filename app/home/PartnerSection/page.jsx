import Image from 'next/image';
import digitalOcean from '../../../public/assets/partners/DigitalOcean-logo.png';
import Hostinger from '../../../public/assets/partners/Hostinger-logo.png';
import ibm from '../../../public/assets/partners/IBM_logo.png';
import Microsoft from '../../../public/assets/partners/microsoft-logo.webp';

const partnerSectionData = {
  heading: 'Our Partners',
  buttons: [
    { text: 'Technology Partners', isActive: true },
    { text: 'Branding Partners', isActive: false },
    { text: 'Training Partners', isActive: false },
    { text: 'Banking Partners', isActive: false },
  ],
  partners: [
    { src: ibm, alt: 'IBM' },
    { src: Hostinger, alt: 'Hostinger' },
    { src: digitalOcean, alt: 'Digital Ocean' },
    { src: Microsoft, alt: 'Microsoft' },
  ],
};

export default function PartnerSection() {
  return (
    <div>
      <section className="py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">
            {partnerSectionData.heading}
          </h2>
          <hr className="w-12 mx-auto border-t-2 border-orange-500 mt-2" />
        </div>
        <div className="flex justify-center space-x-4 text-sm font-medium mb-4">
          {partnerSectionData.buttons.map((button, index) => (
            <button
              key={index}
              className={`text-gray-500 hover:text-teal-500 hover:border-b-2 hover:border-teal-500 ${
                button.isActive
                  ? 'text-teal-500 border-b-2 border-teal-500'
                  : ''
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-12">
          {partnerSectionData.partners.map((partner, index) => (
            <div key={index} className="div_partner_section_bg_and_text_color">
              <Image
                src={partner.src}
                width={200}
                height={100}
                alt={partner.alt}
                className=""
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="p-2 rounded-full border hover:bg-gray-100 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
