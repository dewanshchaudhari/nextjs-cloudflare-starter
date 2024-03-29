import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { db } from "@/server/db";
import { accounts } from "@/server/db/schema";
import { eq } from "drizzle-orm";
export const runtime = "edge";

export async function GET(request: NextRequest) {
  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  const context = getRequestContext();
  const a = Date.now();
  const article = await db((context.env as CloudflareEnv).DB)
    .select()
    .from(accounts);
  const b = Date.now();

  console.log("article", article);

  return new Response(JSON.stringify({ data: article, time: b - a }));
}
