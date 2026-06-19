import * as schema from "./schema";
export declare const pool: import("pg").Pool;
export declare const db: import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> & {
    $client: import("pg").Pool;
};
export * from "./schema";
/**
 * Creates tables if they don't exist yet and seeds demo data on first boot.
 *
 * This app's schema is tiny and changes rarely, so we manage it with a
 * plain idempotent `CREATE TABLE IF NOT EXISTS` here instead of running
 * `drizzle-kit` migrations at deploy time. For a larger/evolving schema,
 * switch to `drizzle-kit generate` + `drizzle-orm/node-postgres/migrator`.
 */
export declare function ensureDatabaseReady(): Promise<void>;
//# sourceMappingURL=index.d.ts.map