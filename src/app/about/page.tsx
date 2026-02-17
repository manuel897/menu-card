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
          At{' '}
          <strong>
            {process.env.TITLE_1} {process.env.TITLE_2}
          </strong>{' '}
          , we blend the comforting aroma of freshly brewed coffee with the
          warmth of oven-fresh pastries to create a cozy space where every visit
          feels like home. Founded on a love for simple, honest ingredients and
          handcrafted flavors, our bakery is dedicated to serving high-quality
          breads, cakes, and desserts made fresh every day. From our signature
          croissants and cinnamon rolls to our hearty loaves and specialty
          coffees, everything we make is infused with care, passion, and a touch
          of creativity.
        </p>
        <p>
          Our mission goes beyond baking — it’s about building community. We
          believe that great food brings people together, whether you’re
          starting your morning with a latte and muffin or unwinding in the
          afternoon with friends over a slice of cake. Every detail, from our
          earthy green and brown tones to the inviting scent of coffee beans and
          butter, reflects our commitment to warmth, comfort, and connection. At
          Java Bakery, you’re not just a customer — you’re part of our story,
          one delicious bite at a time.
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
        <p>Baker Street, Buntown</p>
        <a
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
