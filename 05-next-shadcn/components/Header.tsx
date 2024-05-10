"use client";
import { CommandDemo } from "./Command";
function Header() {
  return (
    <div className="flex p-3 border-b">
      <div className="w-1/2">
        <CommandDemo />
      </div>
    </div>
  );
}

export default Header;
