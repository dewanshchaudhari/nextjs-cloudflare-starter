// import Database from "better-sqlite3";
// import { drizzle } from "drizzle-orm/d1";

// import { env } from "@/env";
import * as schema from "./schema";

// /**
//  * Cache the database connection in development. This avoids creating a new connection on every HMR
//  * update.
//  */
// const globalForDb = globalThis as unknown as {
//   conn: Database.Database | undefined;
// };

// export const conn =
//   globalForDb.conn ?? new Database(env.DATABASE_URL, { fileMustExist: false });
// if (env.NODE_ENV !== "production") globalForDb.conn = conn;

// export const db = drizzle(conn, { schema });

import { drizzle } from "drizzle-orm/d1";

export const db = (database: D1Database) => drizzle(database, { schema });
