import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface UnderlineButtonProps {
  children: string;
  href: string;
}

const UnderlineButton = ({ children, href }: UnderlineButtonProps) => {
  return (
    <div>
      <Link
        href={href}
        className='border-b-2 hover:border-black flex items-center gap-2 px-2 py-1'
      >
        <button className=''>{children}</button>
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default UnderlineButton;
