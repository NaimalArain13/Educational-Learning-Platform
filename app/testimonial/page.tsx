import TestimonialCard, { TestimonialsProps } from "../components/testimonial";

export default function Testimonials() {
    const testimonials: TestimonialsProps[] = [
        {
            description: "The courses provided here are simply amazing! I learned so much about web development and felt fully supported throughout my journey.",
            image: "/profile.jpg",
            name: "James Neduku",
            designation: "Software Developer"
        },
        {
            description: "I really appreciated the hands-on projects and the personalized feedback from instructors. It helped me gain real-world skills.",
            image: "/dp.jpg",
            name: "Erick Kipkemboi",
            designation: "Scrum Master"
        },
        {
            description: "The UI/UX design course was a game-changer for me. I now have the confidence to work on my own design projects, thanks to the guidance and resources provided.",
            image: "/profile.jpg",
            name: "Stephen Karubo",
            designation: "UI/UX Designer"
        },
    ];

    return (
        <div className="flex bg-[#F7F7F7] flex-col min-h-screen items-center gap-y-4 py-12 ">
            <h1 className="text-4xl font-bold mb-4 text-center">What Our Students Say</h1>
            <p className="text-gray-600 mb-10 max-w-xl text-center mx-auto">
                Hear from some of our amazing students who have transformed their careers through our courses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-8  max-w-6xl ">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
}
