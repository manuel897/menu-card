import ImageCard from '@/components/image-card';
import '@/styles/app.css';
import { playfairDisplay } from '../ui/fonts';
import Image from 'next/image';

const About = () => (
  <section className="w-full bg-white min-h-screen pt-20 app-container">
    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl tracking-tight secondary-title">ABOUT</h2>
        <div
          style={{ backgroundColor: '#0b1f24' }}
          className="w-16 h-1 mx-auto mt-2 rounded"
        ></div>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="relative w-full h-[300px] lg:w-1/2 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/lords-photo.jpg"
            alt="Lords Bakery"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* About Text */}
        <div className={`${playfairDisplay.className} w-full lg:w-1/2`}>
          <AboutSection />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  return (
    <div className="text-gray-700 text-lg leading-relaxed space-y-6">
      <p>
        Nestled in a charming location right beside the city park,{' '}
        <strong>Lords Bakery</strong> has been a beloved part of the community
        for over a decade. Established nearly 10 years ago, our bakery has
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
  );
};

export default About;
