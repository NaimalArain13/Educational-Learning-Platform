import Image from "next/image";
export default function About() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          We are a passionate team dedicated to providing the best service in our field.
          With years of experience and a customer-first approach, we aim to bring 
          top-quality solutions to the market and ensure satisfaction for all our clients.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <Image
              className="w-full h-56 object-cover rounded-lg"
              src="https://i.pinimg.com/564x/3a/0f/8c/3a0f8c169acea13383f2bd9ab03f6cf1.jpg"
              alt="Team working"
              layout="responsive"
              width={400}
              height={250}
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To provide excellent services that foster growth and innovation.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <Image
              className="w-full h-56 object-cover rounded-lg"
              src="/goal.jpg"
              alt="Goals"
              layout="responsive"
              width={400}
              height={200}
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Our Goals</h2>
            <p className="text-gray-600 mt-2">
              We strive to reach new heights through constant development, and by 
              putting our clients at the forefront of our focus.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <Image
              className="w-full h-56 object-cover rounded-lg"
              src="https://i.pinimg.com/564x/37/95/f5/3795f503131cf49ea2f90b9fc15afa4e.jpg"
              alt="Values"
              layout="responsive"
              width={400}
              height={250}
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Our Values</h2>
            <p className="text-gray-600 mt-2">
              Integrity, commitment, and innovation define the core of our values, 
              ensuring we provide the best experience for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
