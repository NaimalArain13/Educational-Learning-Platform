import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-3 items-center min-h-[80vh]">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 m-5">
          <h1 className="text-2xl md:text-5xl font-bold mt-4">
            Learn New Skills Online
            <br />
            With ease
          </h1>
          <p className="text-md md:text-xl text-justify text-gray-600">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="space-x-4">
            <Button className="py-2 px-4">Start Learning Now</Button>
            <Button className="py-2 px-4">Explore Courses</Button>
          </div>
        </div>
      
        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image 
            src="https://i.pinimg.com/564x/2d/22/ee/2d22eee45dce71ae13209a639e05cc7e.jpg" 
            alt="Learning illustration" 
            width={720} 
            height={700} 
            className="object-cover w-full max-w-1xl"
          />
        </div>
      </section>
      
    )
}