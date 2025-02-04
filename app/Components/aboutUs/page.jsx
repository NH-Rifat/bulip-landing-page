import React from 'react'
import icon1 from "@/assets/Line-Graphic-Bulb.png";
import icon2 from "@/assets/Line-Graphic-Rocket.png";
import Image from 'next/image';
export default function AboutUs() {

    const sections = [
        {
          title: 'MISSION',
          icon: icon2, 
          description:
            'Our primary goal is to provide comprehensive digital skills training to individuals from economically disadvantaged backgrounds, empowering them to secure employment, improve their livelihoods, or launch their own ventures.',
        },
        {
          title: 'VISION',
          icon: icon1, 
          description:
            'To create a scalable and sustainable model for digital skills education that enables millions to overcome poverty.',
        },
      ];

  return (
    <div>
         <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">About Us</h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {sections?.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-gray-100 rounded-lg overflow-hidden shadow-md`}
            >
             
              <div className="flex items-center justify-center bg-secondary-normal text-white p-8 md:w-1/3">
                {/* <div className="text-6xl">{section.icon}</div> */}
                <Image src={section.icon} width={200} height={100} alt={section.title} className='h-20 w-20' />
              </div>

         
              <div className="p-8 md:w-2/3 flex items-center text-justify">
                <div>
                  <h3 className="text-teal-900 text-xl font-bold">{section.title}</h3>
                  <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
