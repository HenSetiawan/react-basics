"use client";
import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Header() {
  const notifications: {
    text: string;
    isRead: boolean;
    date: string;
    id: any;
  }[] = [
    {
      text: "Ini adalah notif baru",
      date: "23-01-2001",
      isRead: true,
      id: 1,
    },
    {
      text: "Pesan masuk baru",
      date: "23-03-2001",
      isRead: false,
      id: 2,
    },
  ];
  return (
    <div className="flex p-3 border-b items-center">
      <div className="w-1/2">
        <CommandDemo />
      </div>
      <div className="w-1/2 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="icon relative">
              <span
                className={`${
                  notifications.find(notification => notification.isRead === false) ?  "bg-green-400" : ""
                } w-3 h-3 rounded-full my-1 absolute -top-2 -right-2`}
              ></span>
              <BellIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => {
              return (
                <DropdownMenuItem
                  key={notification.id}
                  className="flex gap-2 items-start"
                >
                  <span
                    className={`${
                      notification.isRead ? "bg-neutral-200" : "bg-green-400"
                    } w-3 h-3 rounded-full my-1`}
                  ></span>
                  <div>
                    <p className="font-medium">{notification.text}</p>
                    <p className="text-xs text-slate-500">
                      {notification.date}
                    </p>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
