import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";
export interface TestimonialsProps {
    description:string,
    image:string,
    name:string,
    designation:string
}
export default function TestimonialCard(props:TestimonialsProps){
    return(
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-auto  border border-black broder-2  m-4">
            <div className="flex flex-col mb-4">
                <p className="flex flex-row mb-2">
                    <FaRegStar/>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </p>
                <p className="text-sm sm:text-md">{props.description}</p>
            </div>
            <div className="flex flex-row gap-4 ">
                <div className="flex items-center">
                    <Image src={props.image} alt={props.name} width={40} height={0} className="border-2  rounded-full"/>
                </div>
                <div className="flex flex-col ">
                    <h1>{props.name}</h1>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}