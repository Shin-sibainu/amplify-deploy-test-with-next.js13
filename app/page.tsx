import Image from "next/image";
import Link from "next/link";

//https://dev.classmethod.jp/articles/nextjs-static-cache/

const getSampleData = async () => {
  const res = await fetch(`http://localhost:3000/api/sample`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  const sampleData = await getSampleData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="font-medium text-4xl">Hello Next.js from AWS🚀</h2>
        <Link href="/sample" className="text-center mt-8 block text-blue-600">
          /sample/page.tsx
        </Link>
        <Link
          href={`/sample/${1}`}
          className="text-center mt-8 block text-blue-600"
        >
          /sample/[id]/page.tsx
        </Link>
        <div className="text-center mt-20">
          <h3>Sample Data</h3>
          <ul>
            {sampleData.data.map((data: any) => (
              <Link key={data.id} href={`/sample/${data.id}`}>
                <li>{data.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
