import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BumpChart from "@/components/BumpChart";

export default function Home() {
  const data: any = [
    {
      id: "Serie 1",
      data: [
        {
          x: "2000",
          y: 2,
        },
        {
          x: "2001",
          y: 10,
        },
        {
          x: "2002",
          y: 8,
        },
        {
          x: "2003",
          y: 4,
        },
        {
          x: "2004",
          y: 6,
        },
      ],
    },
    {
      id: "Serie 2",
      data: [
        {
          x: "2000",
          y: 7,
        },
        {
          x: "2001",
          y: 1,
        },
        {
          x: "2002",
          y: 6,
        },
        {
          x: "2003",
          y: 10,
        },
        {
          x: "2004",
          y: 12,
        },
      ],
    },
    {
      id: "Serie 3",
      data: [
        {
          x: "2000",
          y: 9,
        },
        {
          x: "2001",
          y: 3,
        },
        {
          x: "2002",
          y: 7,
        },
        {
          x: "2003",
          y: 11,
        },
        {
          x: "2004",
          y: 13,
        },
      ],
    },
  ];
  return (
    <div className="flex p-4">
      <div className="w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>This Week</CardTitle>
            <CardDescription>These are the result of this week</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-[300px]">
            <BumpChart dataChart={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
