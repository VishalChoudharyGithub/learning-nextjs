import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-scate-200 p-5">
      <Link href="/" className="mr-5">
        nextJS
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
