export default function Achievement(){
    return(
        <div className="flex flex-col items-center text-center gap-y-5 py-12">
            <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
            <p className="text-gray-600 mb-10 max-w-7xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore praesentium consequuntur cupiditate quo dolore voluptates sequi, tempore unde minima! Nulla earum fugit laboriosam eaque dolor expedita aliquam accusantium officiis vero?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 w-full max-w-6xl">
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl">+200</h1>
                    <p>Courses</p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl">50K</h1>
                    <p>Mentors</p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl">370K</h1>
                    <p>Students</p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl">100+</h1>
                    <p>Recognition</p>
                </div>
               
            </div>
        </div>
    )
}