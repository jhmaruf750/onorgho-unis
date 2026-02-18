import Image from 'next/image';
import Timeline from '../components/Timeline';
import WhoWeAre from "../components/WhoWeAre";
import BatchJourney from "../components/BatchJourney";
import AboutSchool from "../components/AboutSchool";





export default function Home() {
  return (
    <div className=" text-white">
      {/* Hero */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"

        style={{ backgroundColor: '#000' }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/images/school.jpg')",
            backgroundPosition: "center top",
          }}
          aria-hidden={true}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/45 to-black/85 transition-opacity duration-300" />

        <div className="relative z-10 max-w-7xl w-full px-6 text-center fade-in">
          <div className="mx-auto mb-6 w-36 h-36 md:w-44 md:h-44">
            <Image
              src="/images/logo.png"
              alt="ONORGHO UNIS logo"
              width={176}
              height={176}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-heading hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.10em] md:tracking-[0.12em] uppercase">
            ONORGHO UNIS
          </h1>
          <p className="hero-subtitle mt-5 text-sm md:text-lg font-semibold tracking-[0.04em]">
            Batch of 2019
          </p>
          <p className="hero-subtitle hero-school mt-1.5 text-xs md:text-sm">
            Shibganj Government Model High School
          </p>
        </div>

        {/* subtle bottom hint */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <div className="h-0.5 w-24 bg-white/20 rounded-full" />
        </div>
      </section>



<WhoWeAre />


<BatchJourney />

<AboutSchool />



   


      {/* Timeline */}
      <Timeline />
    </div>
  );
}
