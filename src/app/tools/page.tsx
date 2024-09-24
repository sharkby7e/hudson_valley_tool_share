import { getTools } from "~/server/queries";
import Link from "next/link";

export default async function Tools() {
  const tools = await getTools();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-xl">Tools</h1>

      {tools.map((tool, idx) => (
        <div key={tool.id + "-" + idx} className="text-xl text-white">
          <Link href={`/tools/${tool.id}`}>{tool.name}</Link>
        </div>
      ))}
    </main>
  );
}
