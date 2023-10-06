import { config } from "@/lib/config";
import Link from "next/link";
import React from "react";

const apiUrl = config.apiPrefix + config.apiHost + "/api/sample";

export async function generateStaticParams() {
  const res = await fetch(apiUrl);
  const sampleData = await res.json();
  return sampleData.data.map((data: any) => ({
    id: data.id.toString(),
  }));
  // return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const SampleIdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      SampleIdPage
      <br />
      <span>{params.id}</span>
      <br />
      <Link href={"/"}>←Back</Link>
    </div>
  );
};

export default SampleIdPage;
