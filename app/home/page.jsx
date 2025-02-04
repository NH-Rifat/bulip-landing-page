'use client';

import Banner from './Banner/page';
import BannerCard from './BannerCard/page';
import Programs from './Programs/page';
import Services from './Services/page';

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerCard />
      <Services />
      <Programs />
    </div>
  );
}
