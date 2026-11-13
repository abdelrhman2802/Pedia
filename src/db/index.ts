import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & { __pediaPool?: Pool };

function make() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is required");
  const pool = globalForDb.__pediaPool ?? new Pool({ connectionString: url, max: Number(process.env.PG_POOL_MAX ?? 5), idleTimeoutMillis: 20_000 });
  globalForDb.__pediaPool = pool;
  return drizzle(pool);
}

// Connect lazily: `next build` imports route modules without DATABASE_URL, so the
// connection (and the missing-variable error) must wait until the first query.
let instance: ReturnType<typeof make> | undefined;
export const db = new Proxy({} as ReturnType<typeof make>, {
  get: (_t, prop) => Reflect.get((instance ??= make()), prop),
});
