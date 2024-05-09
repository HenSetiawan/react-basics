"use client";
import UserItem from "./UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

function Sidebar() {
  const listSideBarItem: {
    groupTitle: string;
    items: { title: string; icon: JSX.Element }[];
  }[] = [
    {
      groupTitle: "Suggestions",
      items: [
        {
          title: "Calendar",
          icon: <Calendar className="mr-2 h-4 w-4" />,
        },
        {
          title: "Search Emoji",
          icon: <Smile className="mr-2 h-4 w-4" />,
        },
        {
          title: "Calculator",
          icon: <Calculator className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      groupTitle: "Settings",
      items: [
        {
          title: "Profile",
          icon: <User className="mr-2 h-4 w-4" />,
        },
        {
          title: "Billing",
          icon: <CreditCard className="mr-2 h-4 w-4" />,
        },
        {
          title: "Settings",
          icon: <Settings className="mr-2 h-4 w-4" />,
        },
      ],
    },
  ];
  return (
    <div className="flex gap-2 flex-col border-r w-[250px] min-h-screen min-w-[250px] p-2">
      <UserItem />
      <div className="grow p-2">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {listSideBarItem.map((sideBarItem, index) => {
              return (
                <>
                  {index !== 0 ? <CommandSeparator /> : ''}
                  <CommandGroup
                    key={sideBarItem.groupTitle}
                    heading={sideBarItem.groupTitle}
                  >
                    {sideBarItem.items.map((item) => {
                      return (
                        <CommandItem key={item.title}>
                          {item.icon}
                          <span>{item.title}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </>
              );
            })}
          </CommandList>
        </Command>
      </div>
      <div>settings</div>
    </div>
  );
}

export default Sidebar;
