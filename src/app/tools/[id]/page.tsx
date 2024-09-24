import { getTool } from "~/server/queries";

export default async function Tool({
  params: { id: toolId },
}: {
  params: { id: number };
}) {
  const tool = await getTool(toolId);
  return <div>Single tool page - {tool.name}</div>;
}
