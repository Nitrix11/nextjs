import Image from 'next/image';
import pic1 from "./image/download.jpg";
import pic2 from "./image/WhatsApp Image 2025-03-27 at 03.18.22_767bfbf7.jpg";

export default function Home() {
  return (
    <div className="bg-[#f4f4f4]  gap-[100px] y-[60px] px-[20px] text-center text-black flex flex-row items-start"> {/* Added flex and flex-row */}
      <div className="w-6/12 relative mb-[20px]" style={{ height: '75vh', width: "400px" }}> {/* 60% width */}
        <div className="w-full h-full rounded-[10px] overflow-hidden">
          <Image 
            src={pic1} // Replace with your first image
            alt="Description 1" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full rounded-[10px] absolute top-0 left-0 overflow-hidden">
     
        </div>
      </div>

      <div className="w-6/12 text-left flex flex-col justify-center px-4"> {/* 40% width, flex, flex-col, justify-center, added padding */}
        <h2 className="text-[1.5em] mb-[10px] text-[#ffc107]">About Hardhat Solution</h2>
        <h1 className="text-[2em] mb-[10px]">We are the leader in Construction</h1>
        <p className="text-[1em] my-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="flex items-center justify-start my-[20px]">
          <span className="text-[3em] text-[#ffc107] mr-[10px]">850+</span>
          <div>
            <span className="text-sm">COMPLETED</span><br/>
            <span className="text-sm">PROJECTS</span>
          </div>
        </div>

        <div className="flex items-center justify-start mb-[20px]">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-5 h-5 text-[#ffc107] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.505L.27 8.24l6.573-.957L10 1l3.15 6.283 6.573.957-4.925 4.345 1.123 6.505z" />
            </svg>
          ))}
          <span className="text-sm ml-2">5 Rating | 4.5 Reviews</span>
        </div>

        <button className="bg-[#ffc107] text-white py-2 px-4 rounded mt-[20px]">Read More</button>
      </div>
    </div>
  );
}