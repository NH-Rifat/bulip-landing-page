'use client';
import Image from 'next/image';
import { useState } from 'react';

import featuredImg from '../../../public/assets/featuredImg.png';
import newspic from '../../../public/assets/latestNews.png';

const latestNews = {
  title:
    "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
  category: 'Current Events',
  image: newspic,
};

const allNewsData = [
  {
    id: 1,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
    category: 'Technology',
    image: featuredImg,
  },
  {
    id: 2,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
    category: 'Technology',
    image: featuredImg,
  },
  {
    id: 3,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
    category: 'Technology',
    image: featuredImg,
  },
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(0);
  const newsPerPage = 3;

  const handleNextPage = () => {
    if ((currentPage + 1) * newsPerPage < allNewsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mt-5 lg:mt-10 mb-4 md:mb-10">
        {/* Latest News Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="flex flex-col md:flex-row div_news_latest">
            <Image
              src={latestNews.image}
              alt="Latest News"
              className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              height={400}
              width={400}
            />
            <div className="px-5 py-4 bg-gray-100 ">
              <span className="text-sm text-gray-500 uppercase">
                {latestNews.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{latestNews.title}</h3>
              <p className="text-gray-400 mb-4">{latestNews.description}</p>
              <div className="flex justify-end items-center">
                <span></span>
                <button className=" border border-[#F15B2D] text-[#F15B2D] px-2 py-1 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Featured News</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allNewsData.map((news) => (
                <div key={news.id} className="div_news_featured">
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full rounded-lg mb-4"
                    height={200}
                    width={200}
                  />
                  <span className="text-sm text-gray-500 uppercase">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <button className="border border-[#004464] text-[#004464] px-2 py-1 rounded-lg ">
                    Read More
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
          </div>
        </div>
      </div>
    </div>
  );
}
