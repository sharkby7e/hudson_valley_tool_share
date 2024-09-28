import { sql } from "@vercel/postgres";
import postgres from "postgres";
import { drizzle as VercelDrizzle } from "drizzle-orm/vercel-postgres";
import {
  drizzle as LocalDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import * as schema from "./schema";

let db;
if (process.env.NODE_ENV === "production") {
  db = VercelDrizzle(sql, { schema });
} else {
  const migrationClient = postgres(process.env.POSTGRES_URL as string);
  db = LocalDrizzle(migrationClient, { schema });
}

export { db };
