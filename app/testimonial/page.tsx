import TestimonialCard, { TestimonialsProps } from "@/app/components/testimonial"

export default function Testimonials(){
    const testimonials:TestimonialsProps[]=[
        {
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore praesentium consequuntur cupiditate quo dolore voluptates sequi, tempore unde",
            image:"/profile.jpg",
            name:"James Neduku",
            designation:"Software Developer"
        },
        {
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore praesentium consequuntur cupiditate quo dolore voluptates sequi, tempore unde",
            image:"/dp.jpg",
            name:"Erick Kipkemboi",
            designation:"Scrum Master"
        },
        {
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore praesentium consequuntur cupiditate quo dolore voluptates sequi, tempore unde",
            image:"/profile.jpg",
            name:"Stephen Karubo",
            designation:"UI/UX Designer"
        },
    ]
    return(
       <div className="flex bg-[#F7F7F7] flex-col min-h-screen items-start gap-y-4 py-12">
        <h1 className="text-4xl font-bold mb-4 ml-11">What Our Students Say</h1>
        <p className="text-gray-600 mb-10 max-w-1xl ml-11 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, maiores obcaecati! Quam, omnis molestias? Quidem obcaecati nesciunt voluptatum adipisci, rem odio itaque rerum natus tempore inventore, error laudantium blanditiis assumenda.</p>
        <div className="grid grid-cols justify-center md:grid-cols-3 gap-11 px-8 w-full max-w-6xl ">
            {testimonials.map((testimonial,index)=>
            <TestimonialCard key={index} {...testimonial} />)}
        </div>
       </div>
    )
}