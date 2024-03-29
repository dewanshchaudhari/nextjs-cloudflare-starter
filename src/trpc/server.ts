import "server-only";

import { headers } from "next/headers";
import { cache } from "react";

import { createCaller } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime = "edge";
/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  const context = getRequestContext();
  heads.set("x-trpc-source", "rsc");
  const opts = {
    resHeaders: heads,
  };
  return createTRPCContext(opts, context);
});

export const api = createCaller(createContext);
