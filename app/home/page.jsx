'use client';

import Banner from './Banner/page';
import BannerCard from './BannerCard/page';
import OurCommunity from './Community/page';
import News from './News/page';
import PartnerSection from './PartnerSection/page';
import Programs from './Programs/page';
import Services from './Services/page';
import Testimonial from './TestimonialSection/page';

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerCard />
      <Services />
      <Programs />
      <OurCommunity />
      <PartnerSection />
      <Testimonial />
      <News />
    </div>
  );
}
