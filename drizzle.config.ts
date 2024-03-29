import { type Config } from "drizzle-kit";
import path from "path";
import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migration",
  driver: "d1",
  dbCredentials: {
    dbName: "starter",
    wranglerConfigPath: path.join(__dirname, "wrangler.toml"),
  },
  tablesFilter: ["starter_*"],
} satisfies Config;
