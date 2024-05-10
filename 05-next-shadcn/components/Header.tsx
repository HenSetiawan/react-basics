"use client";
import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
function Header() {
  return (
    <div className="flex p-3 border-b items-center">
      <div className="w-1/2">
        <CommandDemo />
      </div>
      <div className="w-1/2 flex justify-end">
        <Button variant="outline" className="icon">
          <BellIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default Header;
