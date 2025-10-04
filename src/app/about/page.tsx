import '@/styles/app.css';
import Image from 'next/image';
import { abrilFatface, dmSerifText } from '../ui/fonts';

const About = () => (
  <section
    className={`${dmSerifText.className} w-full min-h-screen pt-10 pb-10 bg-caramel bg-[url('/cupcake-bg.jpeg')] bg-blend-darken bg-cover bg-no-repeat bg-center bg-fixed`}
  >
    <div className="max-w-7xl mx-auto md:px-2 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2
          className={`${abrilFatface.className} text-4xl tracking-tight text-cream`}
        >
          ABOUT US
        </h2>
      </div>

      {/* Image */}
      <div className="relative w-full h-[300px] lg:w-full lg:h-[400px] md:w-full overflow-hidden shadow-lg group">
        <Image
          src={
            process.env.NEXT_PUBLIC_IS_GITHUB_PAGE === 'true'
              ? '/menu-card/about-us.png'
              : '/about-us.png'
          }
          alt="About Us Image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 p-4 rounded-2xl">
        <AboutSection />

        <ContactSection />
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  return (
    <div className={`font-normal text-cream text-justify w-full`}>
      <div>
        <p>
          Nestled in a charming location right beside the city park,{' '}
          <strong>
            {process.env.TITLE_1} {process.env.TITLE_2}
          </strong>{' '}
          has been a beloved part of the community for over two decades.
          Established nearly <strong> 26 years</strong> ago, our bakery has
          become a favorite stop for families, park visitors, and anyone with a
          love for fresh, handcrafted treats.
        </p>
        <p>
          What sets us apart? We believe in keeping everything close to home.
          All our products are made using locally sourced ingredients and
          produced by <strong>Mariya Food Products</strong>, our own food
          production brand. This ensures that every bite you take is made with
          care, quality, and consistency.
        </p>
        <p>
          Whether you&apos;re looking for a cozy place to unwind after a walk in
          the park, or a delicious selection of cakes, pastries, and baked
          delights — we welcome you with the warmth of home and the taste of
          tradition.
        </p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div
      className={`contact text-cream bg-caramel/70 w-full p-6 space-y-4 rounded-2xl`}
    >
      <h1 className={`${abrilFatface.className} text-3xl font-bold `}>
        CONTACT
      </h1>
      <p className="leading-tight">
        We&apos;d love to hear from you — whether it&apos;s for custom orders,
        feedback, or just to say hello!
      </p>

      <div className="space-y-1">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>
          Visit Our Bakery
        </h2>
        <p>Temple Bypass Road, Thodupuzha</p>
        <a
          // TODO: Add the actual Google Maps link
          href={process.env.GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-300 hover:underline font-medium"
        >
          View on Google Maps
        </a>
      </div>

      <div className="">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>
          Call Us
        </h2>
        <p>+91 {process.env.MOBILE_1} </p>
        <p>+91 {process.env.MOBILE_2} </p>
      </div>

      <div className="space-y-1">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>
          Instagram
        </h2>
        <p>
          <a
            // TODO: Add the actual Instagram link
            href={process.env.INSTAGRAM_URL_1}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 hover:underline font-medium"
          >
            {process.env.INSTAGRAM_TAG_1}
          </a>
        </p>
        <p>
          <a
            // TODO: Add the actual Instagram link
            href={process.env.INSTAGRAM_URL_2}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 hover:underline font-medium"
          >
            {process.env.INSTAGRAM_TAG_2}
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
