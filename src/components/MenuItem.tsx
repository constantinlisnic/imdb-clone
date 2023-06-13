import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: React.ComponentType;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link
        href={address}
        className="hover:text-amber-600 flex gap-2 justify-center items-center"
      >
        <div className="text-2xl">
          <Icon />
        </div>
        <p>{title}</p>
      </Link>
    </div>
  );
}
