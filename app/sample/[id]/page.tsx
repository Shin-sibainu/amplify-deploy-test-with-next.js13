import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch(`http://127.0.0.1:3000/api/sample`);
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
