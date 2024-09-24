import "server-only";
import { db } from "./db";

export async function getTools() {
  const tools = await db.query.tools.findMany();
  return tools;
}

export async function getTool(id: number) {
  const tool = await db.query.tools.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  return tool;
}
