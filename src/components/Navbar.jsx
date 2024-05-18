import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around bg-slate-500 text-yellow-100 p-5 text-xl cursor-pointer ">
        <a href="" className="font-serif font-bold text-2xl text-yellow-200">
          Assignmenty
        </a>
        <ul className="flex gap-10 ">
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
