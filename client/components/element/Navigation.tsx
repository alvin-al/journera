import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-between m-12">
        <div>
          <Link href="/">Logo Journera</Link>
        </div>
        <div>
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Tour</Link>
            </li>
            <li>
              <Link href="/">Travel</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div>Hamburger bar</div>
      </div>
    </div>
  );
};

export default Navigation;
