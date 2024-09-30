import CategorySection from "@/app/components/category";
import CourseCard, { CourseCardProp } from "@/app/components/courseCard";
import React from "react";


export default function Courses() {
  const courses: CourseCardProp[] = [
    {
      image: "https://i.pinimg.com/564x/12/c6/a1/12c6a1e8ebf38fe7199ec680594de9a1.jpg",
      category: "Design",
      rating: "5.0",
      courseTitle: "UI/UX Design 201",
      courseDes:
        "Learn advanced UI/UX design techniques and principles that will enhance your creative process and lead to better product designs.",
      price: 400,
    },
    {
      image: "https://i.pinimg.com/564x/41/5c/a1/415ca1e02bafb6793371cfaa9e38d20a.jpg",
      category: "Programming",
      rating: "5.0",
      courseTitle: "Introduction to Python",
      courseDes:
        "Master the basics of Python programming language, from syntax and data structures to functions and object-oriented programming.",
      price: 400,
    },
    {
      image: "https://i.pinimg.com/564x/b4/7b/c1/b47bc1ec1a5bf67d190180500ca38c3c.jpg",
      category: "Business",
      rating: "5.0",
      courseTitle: "Data Analysis for Beginners",
      courseDes:
        "Kickstart your career in data analytics by learning the fundamentals of data analysis using real-world datasets.",
      price: 400,
    },
    {
      image: "https://i.pinimg.com/564x/50/dd/56/50dd56c2c9cb0dd152527cc0a193b792.jpg",
      category: "Art",
      rating: "5.0",
      courseTitle: "Art Specialization",
      courseDes:
        "Develop your art skills with expert guidance and specialized techniques to bring your creative vision to life.",
      price: 400,
    },
    {
      image: "https://i.pinimg.com/736x/35/24/d8/3524d8d9ea9122f80f27545bc5844f52.jpg",
      category: "Law",
      rating: "5.0",
      courseTitle: "Rule of Law",
      courseDes:
        "Gain a comprehensive understanding of the rule of law and its application in modern legal systems.",
      price: 400,
    },
    {
      image: "https://i.pinimg.com/564x/a6/83/b6/a683b65b5d1a1e19c70ede350dec69ec.jpg",
      category: "Tech",
      rating: "5.0",
      courseTitle: "Introduction to Webflow",
      courseDes:
        "Discover the power of Webflow, a no-code tool for building responsive and dynamic websites without needing to write code.",
      price: 400,
    },
  ];

  return (
    <>
      <CategorySection />
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-lg text-gray-600">Your Unlimited Guide to Learning</p>
      </div>

      {/* Courses Grid */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center px-4 max-w-7xl w-full mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </>
  );
}