import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BumpChart from "@/components/chart/BumpChart";
import BarChart from "@/components/chart/BarChart";

export default function Home() {
  const dataBump: any = [
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

  const dataBar: any = [
    {
      province: "AG",
      "hot dog": 116,
      "hot dogColor": "hsl(25, 70%, 50%)",
      burger: 167,
      burgerColor: "hsl(348, 70%, 50%)",
      sandwich: 37,
      sandwichColor: "hsl(60, 70%, 50%)",
      kebab: 165,
      kebabColor: "hsl(317, 70%, 50%)",
      fries: 128,
      friesColor: "hsl(194, 70%, 50%)",
      donut: 168,
      donutColor: "hsl(76, 70%, 50%)",
    },
    {
      province: "AI",
      "hot dog": 62,
      "hot dogColor": "hsl(153, 70%, 50%)",
      burger: 10,
      burgerColor: "hsl(280, 70%, 50%)",
      sandwich: 50,
      sandwichColor: "hsl(31, 70%, 50%)",
      kebab: 149,
      kebabColor: "hsl(52, 70%, 50%)",
      fries: 80,
      friesColor: "hsl(302, 70%, 50%)",
      donut: 89,
      donutColor: "hsl(52, 70%, 50%)",
    },
    {
      province: "AL",
      "hot dog": 75,
      "hot dogColor": "hsl(17, 70%, 50%)",
      burger: 150,
      burgerColor: "hsl(117, 70%, 50%)",
      sandwich: 38,
      sandwichColor: "hsl(4, 70%, 50%)",
      kebab: 147,
      kebabColor: "hsl(201, 70%, 50%)",
      fries: 15,
      friesColor: "hsl(63, 70%, 50%)",
      donut: 155,
      donutColor: "hsl(146, 70%, 50%)",
    },
    {
      province: "AM",
      "hot dog": 8,
      "hot dogColor": "hsl(8, 70%, 50%)",
      burger: 190,
      burgerColor: "hsl(17, 70%, 50%)",
      sandwich: 174,
      sandwichColor: "hsl(274, 70%, 50%)",
      kebab: 91,
      kebabColor: "hsl(111, 70%, 50%)",
      fries: 74,
      friesColor: "hsl(58, 70%, 50%)",
      donut: 7,
      donutColor: "hsl(293, 70%, 50%)",
    },
  ];
  return (
    <>
      <div className="flex gap-4 p-4">
        <div className="w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>This Week</CardTitle>
              <CardDescription>
                These are the result of this week
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full h-[300px]">
              <BumpChart dataChart={dataBump} />
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Sales by Province</CardTitle>
              <CardDescription>
                These are the result sales of this Week by province
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full h-[300px]">
              <BarChart dataChart={dataBar} indexBy="province" />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
