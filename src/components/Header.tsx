import DarkModeSwitch from "@/components/DarkModeSwitch";
import MenuItem from "@/components/MenuItem";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between mx-6 pt-6 select-none">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-2 items-center text-2xl">
          <span className="bg-amber-500 rounded-xl px-2 py-1">IMDb</span>
          <span>Clone</span>
        </Link>
      </div>
    </div>
  );
}
