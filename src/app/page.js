import { Caveat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Family from "@/components/family";
import EventCard from "@/components/event";
import { useSearchParams } from "next/navigation";
import { Wedding } from "@/models/wedding";
import { Suspense } from "react";

const caveat = Caveat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

export default function EventHome() {
  return (
    <div>
      <Suspense>
        {/* <Home /> */}
      </Suspense>
    </div>
  );
}
