import Image from 'next/image';
import { oswald, ephesis, arapey } from '../fonts';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-15 bg-white pt-16 sm:pt-14 md:pt-20 pb-16 sm:pb-14 md:pb-20"
    >
      <div className="max-w-[70rem] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-0">
        {/* Image Container */}
        <div className="relative w-[300px] sm:w-[360px] md:w-[400px] lg:w-[440px] aspect-[4/5] md:mr-[-40px] lg:mr-[-20px] xl:mr-0">
          <Image
            src="/about/about.png"
            alt="Makeup Artist"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover rounded-md"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 md:pl-10 px-2 text-center md:text-left">
          <p
            className={`text-[#6DC0C8] uppercase tracking-widest text-sm sm:text-[15px] mb-1 ${oswald.className}`}
          >
            About Me
          </p>
          <h2
            className={`text-[36px] sm:text-[48px] md:text-[64px] font-normal text-gray-900 tracking-[.5px] leading-tight mb-4 ${ephesis.className}`}
          >
            Jesse Camille Din Santos
          </h2>
          <h3
            className={`text-[18px] sm:text-[22px] md:text-[24px] font-normal text-gray-900 tracking-[.5px] mb-6 ${arapey.className}`}
          >
            “Makeup is not a mask—it&apos;s art, passion, and<br className="hidden sm:inline" />
            self-expression.”
          </h3>
          <p className="text-gray-700 text-justify text-sm sm:text-base leading-relaxed">
            Hi, I&apos;m a professional makeup artist with a passion for enhancing natural beauty
            and helping clients feel confident, radiant, and empowered. With a keen eye for
            detail and a creative touch, I tailor every look to suit individual features,
            occasions, and personal styles.
          </p>
        </div>
      </div>
    </section>
  );
}