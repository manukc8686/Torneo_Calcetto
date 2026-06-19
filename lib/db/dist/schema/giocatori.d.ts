import { z } from "zod/v4";
export declare const RUOLI: readonly ["Attaccante", "Difensore", "Centrocampista", "Portiere"];
export declare const giocatori: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "giocatori";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "giocatori";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        nome: import("drizzle-orm/pg-core").PgColumn<{
            name: "nome";
            tableName: "giocatori";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ruolo: import("drizzle-orm/pg-core").PgColumn<{
            name: "ruolo";
            tableName: "giocatori";
            dataType: "string";
            columnType: "PgText";
            data: "Attaccante" | "Difensore" | "Centrocampista" | "Portiere";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["Attaccante", "Difensore", "Centrocampista", "Portiere"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rating: import("drizzle-orm/pg-core").PgColumn<{
            name: "rating";
            tableName: "giocatori";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        presenze: import("drizzle-orm/pg-core").PgColumn<{
            name: "presenze";
            tableName: "giocatori";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        vittorie: import("drizzle-orm/pg-core").PgColumn<{
            name: "vittorie";
            tableName: "giocatori";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertGiocatoreSchema: z.ZodObject<{
    nome: z.ZodString;
    ruolo: z.ZodEnum<{
        Attaccante: "Attaccante";
        Difensore: "Difensore";
        Centrocampista: "Centrocampista";
        Portiere: "Portiere";
    }>;
    rating: z.ZodOptional<z.ZodInt>;
}, {
    out: {};
    in: {};
}>;
export type InsertGiocatore = z.infer<typeof insertGiocatoreSchema>;
export type Giocatore = typeof giocatori.$inferSelect;
//# sourceMappingURL=giocatori.d.ts.map