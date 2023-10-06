import { NextResponse } from "next/server";

const sampleData = [
  {
    id: 1,
    title: "sample1",
  },
  { id: 2, title: "sample2" },
  { id: 3, title: "sample3" },
];

export function GET() {
  return NextResponse.json({ data: sampleData }, { status: 200 });
}
