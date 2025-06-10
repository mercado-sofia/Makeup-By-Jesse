import Image from 'next/image';
import { oswald } from '../fonts';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-22 bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
      <div className="w-full max-w-[420px] aspect-[4/5] relative mx-auto md:mx-0 md:mr-[-40px]">
        <Image
          src="/about/about.jpg"
          alt="Makeup Artist"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover rounded-md"
        />
      </div>

        <div>
          <p className="text-[#6DC0C8] uppercase tracking-widest text-sm mb-1">About Me</p>
          <h2 className={`text-[46px] font-normal text-gray-900 tracking-[.5px] mb-6 ${oswald.className}`}>Jesse Camille Din Santos</h2>
        <h3 className="text-[24px] font-normal text-gray-900 tracking-[.5px] mb-6 max-w-[490px]">
            “Makeup is not a mask—it&apos;s art, passion, and self-expression.”
        </h3>
          <p className="text-gray-700 mb-4 max-w-[490px] text-justify">
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