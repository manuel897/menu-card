import '@/styles/app.css';
import { abrilFatface, dmSerifText } from '../ui/fonts';
import Image from 'next/image';

const About = () => (
  <section className={`${dmSerifText.className} w-full min-h-screen pt-10 pb-10 about-container`}>
    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className={`${abrilFatface.className} text-4xl tracking-tight secondary-title`}>ABOUT</h2>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="relative w-full h-[300px] lg:w-full lg:h-[400px] overflow-hidden shadow-lg group">
          <Image
            src="/lords-photo.jpg"
            alt="Lords Bakery"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <AboutSection />

        <ContactSection />

      </div>
    </div>
  </section>
);

const AboutSection = () => {
  return (
    <div className={`about text-justify leading-tight w-full`}>
      <div>
        <p>
          Nestled in a charming location right beside the city park,{' '}
          <strong>Lords Bakers</strong> has been a beloved part of the community
          for over a decade. Established nearly 26 years ago, our bakery has
          become a favorite stop for families, park visitors, and anyone with a
          love for fresh, handcrafted treats.
        </p>
        <p>
          What sets us apart? We believe in keeping everything close to home. All
          our products are made using ingredients sourced directly from{' '}
          <strong>Mariya Food Products</strong>, our own food production brand.
          This ensures that every bite you take is made with care, quality, and
          consistency.
        </p>
        <p>
          Whether you're looking for a cozy place to unwind after a walk in the
          park, or a delicious selection of cakes, pastries, and baked delights —
          Lords Bakery welcomes you with the warmth of home and the taste of
          tradition.
        </p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className={`contact w-full p-6 space-y-4 rounded-2xl`}>
      <h1 className={`${abrilFatface.className} text-3xl font-bold text-brown-800`}>Contact Us</h1>
      <p className="leading-tight">
        We'd love to hear from you — whether it's for custom orders, feedback, or just to say hello!
      </p>

      <div className="space-y-1">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>🍞 Visit Our Bakery</h2>
        <p>Temple Bypass Road, Thodupuzha</p>
        <a
        // TODO: Add the actual Google Maps link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-100 hover:underline font-medium"
        >
          View on Google Maps
        </a>
      </div>

      <div className="">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>📞 Call Us</h2>
        {/* TODO: Add the actual phone number */}
        <p>+91 ----------</p>
      </div>

      <div className="space-y-1">
        <h2 className={`${abrilFatface.className} text-xl font-semibold`}>📸 Follow Us</h2>
        <a
        // TODO: Add the actual Instagram link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-100 hover:underline font-medium"
        >
          @lords_bakers on Instagram
        </a>
      </div>
    </div>
  );
};

export default About;
