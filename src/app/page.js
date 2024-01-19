import Image from "next/image";
import { Caveat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Family from "@/components/family";
import EventCard from "@/components/event";

const caveat = Caveat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <div className="px-12 w-full flex flex-col items-center">
        <h1 className={`${caveat.className} text-[42px]`}>Priya & Amit</h1>
        <div className="w-full h-[1px] my-2 bg-black"></div>
        <p className={`${robotoMono.className} font-extralight tracking-[7px]`}>
          20.08.2024
        </p>
      </div>
      <div className="relative w-full my-5">
        <div className="colorful-gradient-background px-20 pt-3 pb-6 flex flex-col">
          <h3 className={`${caveat.className} text-2xl`}>
            Royal Palace Banquet Hall
          </h3>
          <button
            className={`${robotoMono.className} p-2 text-xs mt-3 text-white mx-auto rounded-md bg-black`}
          >
            navigate me
          </button>
        </div>
        <div className="w-full absolute top-0 px-20 pt-3 pb-6 flex flex-col ">
          <h3 className={`${caveat.className} text-2xl`}>
            Royal Palace Banquet Hall
          </h3>
          <button
            className={`${robotoMono.className} p-2 text-xs mt-3 text-white mx-auto rounded-md bg-black`}
          >
            navigate me
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center gap-x-4">
          <img
            src="/rangoli.png"
            className="w-40 h-80 object-right object-cover"
          />
          <div className={`${robotoMono.className}`}>
            <h2 className={`${caveat.className} text-4xl`}>Priya Sharma</h2>
            <h3 className="font-extralight">Software Engineer</h3>
            <p className="text-xs mt-[6px]">@priya_insta </p>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-4">
          <div className={`${robotoMono.className} grow ml-8`}>
            <h2 className={`${caveat.className} text-4xl`}>Amit Patel</h2>
            <h3 className="font-extralight">Civil Engineer</h3>
            <p className="text-xs mt-[6px]">@amit_insta</p>
          </div>
          <img
            src="/rangoli.png"
            className="w-40 h-80 object-left object-cover"
          />
        </div>
      </div>
      <div className="relative w-full mt-8 mb-5">
        <div className="colorful-gradient-background px-20 py-5 flex flex-col">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>Family</h3>
        </div>
        <div className="w-full absolute top-0 px-20 py-5 flex flex-col ">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>Family</h3>
        </div>
      </div>
      <div>
        <Family
          name="Rajesh Sharma"
          role="Business Man"
          responsibility="Bride’s Father"
        />
        <Family
          name="Anita Sharma "
          role="Homemaker"
          responsibility="Bride’s Mother"
        />
        <Family
          name="Vijay Patel"
          role="Retired Government Officer"
          responsibility="Groom’s Father"
        />
        <Family
          name="Meera Patel"
          role="School Principal"
          responsibility="Groom’s Mother"
        />
      </div>
      <div className="relative w-full my-8">
        <div className="colorful-gradient-background px-20 py-5 flex flex-col">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>Events</h3>
        </div>
        <div className="w-full absolute top-0 px-20 py-5 flex flex-col ">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>Events</h3>
        </div>
      </div>
      <div className="my-2 relative w-full">
        <div className="absolute -z-10 w-full opacity-25">
          <img
            src="rangoli.png"
            className="h-[360px] object-cover w-[250px] right-0 absolute object-left"
          />
          <img
            src="rangoli.png"
            className="h-64 object-cover w-40 absolute top-64 left-0 -z-10"
          />
        </div>
        <div className={robotoMono.className}>
          <p className="text-2xl font-extralight mb-9 text-center">
            20th August 2024
          </p>
          <EventCard name="Mehendi" time="2:30 PM" />
          <EventCard name="Sangeet" time="7:00 PM" />
          <EventCard name="Wedding Ceremony" time="8:30 PM" />
          <EventCard name="Reception" time="10:00 PM" />
        </div>
      </div>
      <div className="relative w-full my-12">
        <div className="colorful-gradient-background px-20 py-5 flex flex-col">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>
            Important Links
          </h3>
        </div>
        <div className="w-full absolute top-0 px-20 py-5 flex flex-col ">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>
            Important Links
          </h3>
        </div>
      </div>
      <div className="w-full px-11">
        <div className="border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Pre-Wedding Shoot</p>
        </div>
        <div className="my-7 border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Wedding Album</p>
        </div>
        <div className="border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Wedding Video</p>
        </div>
      </div>
      <div
        className={`bg-[#E5E5E5] mt-20 w-full py-2 text-center ${robotoMono.className}`}
      >
        <p className="pb-3">a product of cacheho.com</p>
        <p className="text-xs">© 2024 CacheHo | All Rights Reserved</p>
      </div>
    </main>
  );
}
