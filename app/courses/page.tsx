import CategorySection from "@/app/components/category";
import CourseCard, { CourseCardProp } from "@/app/components/courseCard";
import React from "react";


export default function Courses() {
  const courses: CourseCardProp[] = [
    {
      image: "/profile.jpg",
      category: "Design",
      rating: "5.0",
      courseTitle: "UI/UX Design 201",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
    {
      image: "/dp.jpg",
      category: "Programming",
      rating: "5.0",
      courseTitle: "Introduction to Python",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
    {
      image: "/profile.jpg",
      category: "Business",
      rating: "5.0",
      courseTitle: "Data Analysis for Beginners",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
    {
      image: "/dp.jpg",
      category: "Art",
      rating: "5.0",
      courseTitle: "Art Specialization",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
    {
      image: "/profile.jpg",
      category: "Law",
      rating: "5.0",
      courseTitle: "Rule of Law",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
    {
      image: "/dp.jpg",
      category: "Tech",
      rating: "5.0",
      courseTitle: "Introduction to Webflow",
      courseDes:
        "Lorem ispum doctr fiej sdggei sffjwofe feijrgoid fjisswsf sdgmo fetre",
      price: 400,
    },
  ];
  return (
    <>
      <CategorySection />
      {/* Header Section */}
      <div className="text-center  py-12">
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-lg text-gray-600">Your Unlimited Guide to Learning</p>
      </div>

      {/* Courses Grid */}
      <div className="flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6  px-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      </div>
      
    </>
  );
}
