import { sql } from "@vercel/postgres";
import postgres from "postgres";
import {
  drizzle as VercelDrizzle,
  type VercelPgDatabase,
} from "drizzle-orm/vercel-postgres";
import {
  drizzle as LocalDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import * as schema from "./schema";

let db: VercelPgDatabase<typeof schema> | PostgresJsDatabase<typeof schema>;
if (process.env.NODE_ENV === "production") {
  db = VercelDrizzle(sql, { schema });
} else {
  const queryClient = postgres(process.env.POSTGRES_URL as string);
  db = LocalDrizzle(queryClient, { schema });
}

export { db };
