import { Caveat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Family(props) {
  return (
    <div className={`${robotoMono.className} font-light text-center my-7`}>
      <p className="text-xs mb-1">{props.responsibility}</p>
      <p className={`${caveat.className} text-[42px] leading-[1]`}>
        {props.name}
      </p>
      <p className="font-extralight">{props.role}</p>
    </div>
  );
}
