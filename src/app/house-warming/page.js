import Family from "@/components/family";
import { Caveat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Navigation } from "react-feather";
import EventCard from "@/components/event";

const caveat = Caveat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

export default async function WarmingCeremony() {
  //   const weddingInstance = new HouseWarming(repo);

  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

  //   const date = new Date(
  //     weddingInstance.invitationDetails.date.replace(pattern, "$3-$2-$1")
  //   );

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full px-6">
        <img src="/warming-rangoli.png" className="w-full object-top" />
        <div className="bg-[#B67E31]/60 my-4 w-full text-white px-5 flex flex-col items-center relative">
          <h1 className={`${caveat.className} text-[36px] text-center`}>
            House Warming
            <br />
            Ceremony
          </h1>
          <div className="w-full h-[1px] my-2 bg-white"></div>
          <p
            className={`${robotoMono.className} font-extralight tracking-[7px]`}
          >
            29.02.2024
          </p>
          <img
            src="gold-leaf.png"
            className="absolute left-6 top-20 rotate-[54deg] -z-10"
          />
          <img
            src="gold-leaf.png"
            className="absolute right-6 -bottom-48 -rotate-[60deg] -scale-x-100"
          />
          <div className={`pt-14 pb-20 ${caveat.className} text-center`}>
            <h2 className="text-3xl">Novus Florence Village</h2>
            <h3 className="text-xl">#101, K Block, Phase 2</h3>
            <button
              className={`${robotoMono.className} py-2 px-3 text-xs mt-3 text-black border-black border-[1px] mx-auto rounded-full bg-white flex gap-x-2 items-center`}
            >
              navigate me
              <Navigation className="w-3 h-3" />
            </button>
          </div>
          <Family
            responsibility=""
            role="Business Man"
            name="Kamsu Bhaskara Rao"
          />
          <Family responsibility="" role="Home Maker" name="Kamsu Aruna" />
          <Family
            responsibility=""
            role="Engineer - Confluent"
            name="Kamsu Sasi Teja"
          />
          <Family responsibility="" role="Student" name="Kamsu Ravi Teeja" />
          <div className="h-20"></div>
        </div>
      </div>
      <div className="relative w-full mb-8  mt-32">
        <div className="bg-[#B67E31]/60 px-20 py-5 flex flex-col text-white">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>Events</h3>
        </div>
      </div>
      <div className="my-2 relative w-full">
        <div className="absolute -z-10 w-full opacity-20">
          <img
            src="warming-rangoli.png"
            className="w-[241px] h-[122px] absolute rotate-90 object-right -right-16 top-8"
          />
          <img
            src="warming-rangoli.png"
            className="w-[338px] object-cover h-[172px] -rotate-90 absolute top-36 -left-24 -z-10"
          />
        </div>
        <div className={robotoMono.className}>
          <p className="text-2xl font-extralight mb-9 text-center">
            29th February 2024
          </p>
          <EventCard name="Gruhapravesham" time="2:30 PM" />
          <EventCard name="Satyanarayana Vratam" time={"2:30 PM"} />
          <EventCard name="Lunch" time={"12:00 PM"} />
        </div>
      </div>
      <div className="relative w-full my-12">
        <div className="bg-[#B67E31]/60 px-20 py-5 flex flex-col text-white">
          <h3 className={`${caveat.className} text-4xl mx-auto`}>
            Important Links
          </h3>
        </div>
      </div>
      <div className="w-full px-11">
        <div className="border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Photo Album</p>
        </div>
        <div className="my-7 border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Video</p>
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
