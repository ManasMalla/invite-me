import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function EventCard(props) {
  return (
    <div className="py-5 text-center">
      <p className={`${caveat.className} text-3xl mb-1 font-light`}>
        {props.name}
      </p>
      <p className="font-light">{props.time}</p>
    </div>
  );
}
