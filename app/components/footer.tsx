import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8 md:px-8">
        
        {/* First Section: Newsletter Subscription */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-xl text-center sm:text-left text-gray-700">Subscribe to our newsletter</h1>
            <p className="text-center sm:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
          </div>
          <div className="flex flex-col">
          <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 md:space-y-0 md:space-x-3">
            <input type="email" placeholder="Enter your email" className="p-2 px-7 rounded-md border border-gray-500 tracking-widest text-center" />
            <Button className="p-5 text-lg">Subscribe</Button>
          </div>
          <p className="text-sm tracking-tighter mt-3 text-center md:text-left">
            By subscribing, you agree with our{" "}
            <Link href="#" className="underline underline-offset-4">
              Privacy Policy
            </Link>
          </p>
          </div>
          
        </div>

        {/* Middle Section: Links and Logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex space-x-3 items-center justify-center md:justify-start">
            <Image src={"/dp.jpg"} alt="" width={48} height={40} className="rounded-full" />
            <p className="font-bold text-xl">e-LEARN</p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Courses</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Business</Link>
              <Link href={"#"}>Development</Link>
              <Link href={"#"}>Technology</Link>
              <Link href={"#"}>Design</Link>
              <Link href={"#"}>Programming</Link>
            </div>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Resources</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Career</Link>
              <Link href={"#"}>Resume</Link>
              <Link href={"#"}>Learning</Link>
              <Link href={"#"}>Interview Preparation</Link>
              <Link href={"#"}>Jobs</Link>
            </div>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-black text-xl font-bold mb-2">About Us</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Help/Support</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Terms and Conditions</Link>
              <Link href={"#"}>Partner</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left">
            <p>© 2024 Tech Store. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/product" className="text-gray-800 hover:text-white underline underline-offset-3">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-white underline underline-offset-3">
                Terms of Services
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-white underline underline-offset-3">
                Cookies Settings
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <p>Part of</p>
            <div className="w-30 h-8 bg-gray-800 flex items-center justify-center rounded-md hover:bg-transparent hover:scale-105 hover:shadow-2xl hover:shadow-black">
              <p className="text-white hover:text-black text-lg p-1 px-3">e-Learning</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
