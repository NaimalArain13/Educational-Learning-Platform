import HeroSection from './components/heroSection';
import Courses from './courses/page';
import Team from './team/page';
import Testimonials from './testimonial/page';


export default function HomePage() {
  return (
    <div  className=" min-h-screen ">
     <HeroSection />
      <div className="bg-[#F7F7F7] flex flex-col md:flex-row gap-3 w-full max-w-8xl h-[150px] justify-between p-11 items-center ">
      <h1 className="text-lg md:text-3xl font-semibold md:font-bold">
        Trusted by 200+ companies <br /> world-wide
      </h1>
      <div className="md:flex md:flex-row md:gap-3 md:mr-16 hidden ">
      <div className={`font-serif font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md bg-gray-200`}>roboto|LoGo</div>
      <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center  ">LogoISPUM</div>
      <div className="font-monospace font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-full bg-zinc-200">LogoISPUM</div>
      <div className="font-serif font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md ">LogoISPUM</div>
      <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md bg-gray-300">LogoISPUM</div>
      </div>
      </div> 
       <Courses />
       <Team />
       <Testimonials />
    </div>
    
  );
}

