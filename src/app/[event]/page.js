"use client";

import { Caveat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Family from "@/components/family";
import EventCard from "@/components/event";
import { useSearchParams } from "next/navigation";
import { Wedding } from "@/models/wedding";
import Link from "next/link";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const caveat = Caveat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

export default async function Home({ params }) {
  useEffect(() => {
    var tl = gsap
      .timeline({})
      .fromTo(
        ".loader",
        { y: 0 },
        { ease: "Power4.easeOut", y: "-100%", duration: 2 },
        "+=0.5"
      );
  });
  const res = await fetch(
    `https://invite-me-ba9d3-default-rtdb.firebaseio.com/${params.event}.json`
  );
  const repo = await res.json();
  console.log("------");
  const weddingInstance = new Wedding(repo);
  console.log(weddingInstance);
  console.log("------");
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

  const date = new Date(
    weddingInstance.invitationDetails.date.replace(pattern, "$3-$2-$1")
  );
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <div className="z-50 top-0 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="/radhasundariyam.png" class="w-1/2 lg:w-1/4" />
      </div>
      <div className="px-12 w-full flex flex-col items-center">
        <h1 className={`${caveat.className} text-[36px] text-center`}>
          {weddingInstance.bride.short_name} &{" "}
          {weddingInstance.groom.short_name}
        </h1>
        <div className="w-full h-[1px] my-2 bg-black"></div>
        <p className={`${robotoMono.className} font-extralight tracking-[7px]`}>
          {date.getDate()}.03.{date.getFullYear()}
        </p>
      </div>
      <div className="relative w-full my-5 text-center">
        <div className="colorful-gradient-background px-20 pt-3 pb-6 flex flex-col">
          <h3 className={`${caveat.className} text-2xl`}>
            {weddingInstance.invitationDetails.venue.name}
          </h3>
          <Link
            className={`${robotoMono.className} p-2 text-xs mt-3 text-white mx-auto rounded-md bg-black`}
            href={weddingInstance.mapAndDirections.map}
            // onClick={() => {
            //   console.log("clicked");
            // }}
          >
            Google Maps
          </Link>
        </div>
        <div className="w-full absolute top-0 px-20 pt-3 pb-6 flex flex-col ">
          <h3 className={`${caveat.className} text-2xl`}>
            {weddingInstance.invitationDetails.venue.name}
          </h3>
          <Link
            className={`${robotoMono.className} p-2 text-xs mt-3 text-white mx-auto rounded-md bg-black`}
            // onClick={() => {
            //   window.open("/house-warming", "_self");
            // }}
            href={weddingInstance.mapAndDirections.map}
          >
            Google Maps
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center gap-x-4">
          <img
            src="/rangoli.png"
            className="w-40 h-80 object-right object-cover rangoli"
          />
          <div className={`${robotoMono.className}`}>
            <h2 className={`${caveat.className} text-4xl`}>
              {weddingInstance.bride.name}
            </h2>
            <h3 className="font-extralight">
              {weddingInstance.bride.occupation}
            </h3>
            <a
              className="text-xs mt-[6px]"
              href={`https://instagram.com/${weddingInstance.bride.contact.instagram}`}
            >
              {weddingInstance.bride.contact.instagram}
            </a>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-4">
          <div className={`${robotoMono.className} grow ml-8`}>
            <h2 className={`${caveat.className} text-4xl`}>
              {weddingInstance.groom.name}
            </h2>
            <h3 className="font-extralight">
              {weddingInstance.groom.occupation}
            </h3>
            <a
              className="text-xs mt-[6px]"
              href={`https://instagram.com/${weddingInstance.groom.contact.instagram}`}
            >
              {weddingInstance.groom.contact.instagram}
            </a>
          </div>
          <img
            src="/rangoli.png"
            className="w-40 h-80 object-left object-cover rangoli"
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
          name={weddingInstance.bride.parents.father.name}
          role={weddingInstance.bride.parents.father.occupation}
          responsibility="Bride’s Father"
        />
        <Family
          name={weddingInstance.bride.parents.mother.name}
          role={weddingInstance.bride.parents.mother.occupation}
          responsibility="Bride’s Mother"
        />
        <Family
          name={weddingInstance.groom.parents.father.name}
          role={weddingInstance.groom.parents.father.occupation}
          responsibility="Groom’s Father"
        />
        <Family
          name={weddingInstance.groom.parents.mother.name}
          role={weddingInstance.groom.parents.mother.occupation}
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
            className="h-[360px] object-cover w-[250px] right-0 absolute object-left rangoli"
          />
          <img
            src="rangoli.png"
            className="h-64 object-cover w-40 absolute top-64 left-0 -z-10 rangoli"
          />
        </div>
        <div className={robotoMono.className}>
          <p className="text-2xl font-extralight mb-9 text-center">
            24th March 2024
          </p>
          <EventCard
            name="Mehendi"
            time={weddingInstance.invitationDetails.eventTimings.mehendi}
          />
          <EventCard
            name="Sangeet"
            time={weddingInstance.invitationDetails.eventTimings.sangeet}
          />
          <EventCard
            name="Wedding Ceremony"
            time={
              weddingInstance.invitationDetails.eventTimings.weddingCeremony
            }
          />
          <EventCard
            name="Reception"
            time={weddingInstance.invitationDetails.eventTimings.reception}
          />
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
        {/* <div className="border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <p className={`${caveat.className} text-3xl`}>Pre-Wedding Shoot</p>
        </div> */}
        <div className="my-7 border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center">
          <a
            className={`${caveat.className} text-3xl`}
            href="https://drive.google.com/drive/folders/1ybOW_mFssqqY1UGndZ6ctExNGyQ0TMiy?usp=drive_link"
          >
            Wedding Album
          </a>
        </div>
        <div
          className="border-[1.5px] border-black shadow-md rounded-2xl w-full py-2 text-center cursor-pointer"
          onClick={() => {
            alert("This link will be available soon");
          }}
        >
          <p className={`${caveat.className} text-3xl`}>Wedding Video</p>
        </div>
      </div>
      <div
        className={`bg-[#E5E5E5] mt-20 w-full py-2 text-center ${robotoMono.className}`}
      >
        <p className="pb-3">a product of cacheho.com and theananta.in</p>
        <p className="text-xs">
          © 2024 CacheHo + theAnanta | All Rights Reserved
        </p>
      </div>
    </main>
  );
}
