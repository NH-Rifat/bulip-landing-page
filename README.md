This is a [Next.js](https://nextjs.org) project Tailwind CSS with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone this project:

```bash
npm install
# or
yarn
# or
pnpm dev
# or
bun dev
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

The project is structured as follows:

- `app/`: Contains the main application components and pages.
  - `home/`: Contains the home page components.
    - `Banner/page.jsx`: Displays the banner section on the home page.
    - `HomeCard/page.jsx`: Displays the home cards with various information.
    - `Hero/page.jsx`: Displays the hero section on the home page.
    - `Community/page.jsx`: Displays the community section on the home page.
    - `News/page.jsx`: Displays the news section on the home page.
    - `TestimonialSection/page.jsx`: Displays the testimonial section on the home page.
    - `PartnerSection/page.jsx`: Displays the partner section on the home page.
  - `Components/`: Contains reusable components.
    - `Career/CareerBanner/page.jsx`: Displays the career banner section.
    - `Career/CareerPlacement/page.jsx`: Displays the career placement section.
    - `ContactUs/Appointment/page.jsx`: Displays the appointment form.
    - `ContactUs/FAQ/page.jsx`: Displays the FAQ section for contact us.
    - `ContactUs/Header/page.jsx`: Displays the header section for contact us.
    - `Location/FAQ/page.jsx`: Displays the FAQ section for locations.
    - `Location/GlobalLocation/page.jsx`: Displays the global locations section.
    - `Location/LocationBanner/page.jsx`: Displays the location banner section.
    - `News/NewsArticalCard/page.jsx`: Displays the news article card.
    - `News/NewsBanner/page.jsx`: Displays the news banner section.
    - `News/NewsData/page.jsx`: Displays the news data carousel.
    - `Programs/CertificationPathway/page.jsx`: Displays the certification pathway section.
    - `Programs/PogramsBanner/page.jsx`: Displays the programs banner section.
    - `Programs/TrainingPrograms/page.jsx`: Displays the training programs section.
    - `aboutUs/Banner/page.jsx`: Displays the about us banner section.
    - `aboutUs/EmpoweringSection/page.jsx`: Displays the empowering section.
    - `aboutUs/LeaderShip/page.jsx`: Displays the leadership section.
    - `aboutUs/LeadershipCards/page.jsx`: Displays the leadership cards.
    - `aboutUs/page.jsx`: Displays the about us section.
  - `Shared/`: Contains shared components like navigation and footer.
    - `Footer/page.jsx`: Displays the footer section.
    - `Navigation/page.jsx`: Displays the navigation bar.

## Functions and Components

### Home Page Components

- **Banner**: Displays the main banner on the home page.

  - File: [`app/home/Banner/page.jsx`](app/home/Banner/page.jsx)

- **BannerCard**: Displays cards with various information on the home page.

  - File: [`app/home/HomeCard/page.jsx`](app/home/BannerCard/page.jsx)

- **service**: Displays the hero section on the home page.

  - File: [`app/home/Hero/page.jsx`](app/home/Service/page.jsx)

- **Community**: Displays the community section on the home page.

  - File: [`app/home/Community/page.jsx`](app/home/Community/page.jsx)

- **News**: Displays the news section on the home page.

  - File: [`app/home/News/page.jsx`](app/home/News/page.jsx)

- **TestimonialSection**: Displays the testimonial section on the home page.

  - File: [`app/home/TestimonialSection/page.jsx`](app/home/TestimonialSection/page.jsx)

- **PartnerSection**: Displays the partner section on the home page.
  - File: [`app/home/PartnerSection/page.jsx`](app/home/PartnerSection/page.jsx)

### Shared Components

- **Footer**: Displays the footer section.

  - File: [`app/Shared/Footer/page.jsx`](app/Shared/Footer/page.jsx)

- **Header**: Displays the navigation bar.
  - File: [`app/Shared/Navigation/page.jsx`](app/Shared/Header/page.jsx)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The Project deploy in Next.js app is to use Vercel try (https://bulipe-tech-limited.vercel.app/)
https://github.com/faysal-bulipe/Bulipe-tech-limited.git
