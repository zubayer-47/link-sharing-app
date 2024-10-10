import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

type Props = {
  to: string;
  logo: string;
  alt: string;
  name: string;
  color: "red" | "black" | "blue";
};

export default function LinkItem({ alt, color, logo, name, to }: Props) {
  const bg = {
    red: "bg-[#FF0000]",
    black: "bg-[#24292e]",
    blue: "bg-[#0a66c2]",
  };

  return (
    <Link
      to={to}
      target="_blank"
      className={`flex w-full items-center justify-between rounded-lg p-3 ${bg[color]}`}
    >
      <span className="flex items-center gap-2">
        <img src={logo} alt={alt} className="h-6 w-6 object-contain" />

        <h3 className="text-gray-50">{name}</h3>
      </span>

      <ArrowRight className="h-5 w-5 text-gray-100" />
    </Link>
  );
}
