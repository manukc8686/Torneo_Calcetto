import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { BulkDeleteInput, BulkDeleteResult, ErrorResponse, GeneraSquadreInput, GeneraSquadreResult, Giocatore, GiocatoreInput, GiocatoreUpdate, HealthStatus, Stats } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListGiocatoriUrl: () => string;
/**
 * @summary Get all players
 */
export declare const listGiocatori: (options?: RequestInit) => Promise<Giocatore[]>;
export declare const getListGiocatoriQueryKey: () => readonly ["/api/giocatori"];
export declare const getListGiocatoriQueryOptions: <TData = Awaited<ReturnType<typeof listGiocatori>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGiocatori>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listGiocatori>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListGiocatoriQueryResult = NonNullable<Awaited<ReturnType<typeof listGiocatori>>>;
export type ListGiocatoriQueryError = ErrorType<unknown>;
/**
 * @summary Get all players
 */
export declare function useListGiocatori<TData = Awaited<ReturnType<typeof listGiocatori>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGiocatori>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateGiocatoreUrl: () => string;
/**
 * @summary Create a new player
 */
export declare const createGiocatore: (giocatoreInput: GiocatoreInput, options?: RequestInit) => Promise<Giocatore>;
export declare const getCreateGiocatoreMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGiocatore>>, TError, {
        data: BodyType<GiocatoreInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGiocatore>>, TError, {
    data: BodyType<GiocatoreInput>;
}, TContext>;
export type CreateGiocatoreMutationResult = NonNullable<Awaited<ReturnType<typeof createGiocatore>>>;
export type CreateGiocatoreMutationBody = BodyType<GiocatoreInput>;
export type CreateGiocatoreMutationError = ErrorType<ErrorResponse>;
/**
* @summary Create a new player
*/
export declare const useCreateGiocatore: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGiocatore>>, TError, {
        data: BodyType<GiocatoreInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGiocatore>>, TError, {
    data: BodyType<GiocatoreInput>;
}, TContext>;
export declare const getBulkDeleteGiocatoriUrl: () => string;
/**
 * @summary Delete multiple players by IDs
 */
export declare const bulkDeleteGiocatori: (bulkDeleteInput: BulkDeleteInput, options?: RequestInit) => Promise<BulkDeleteResult>;
export declare const getBulkDeleteGiocatoriMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkDeleteGiocatori>>, TError, {
        data: BodyType<BulkDeleteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof bulkDeleteGiocatori>>, TError, {
    data: BodyType<BulkDeleteInput>;
}, TContext>;
export type BulkDeleteGiocatoriMutationResult = NonNullable<Awaited<ReturnType<typeof bulkDeleteGiocatori>>>;
export type BulkDeleteGiocatoriMutationBody = BodyType<BulkDeleteInput>;
export type BulkDeleteGiocatoriMutationError = ErrorType<ErrorResponse>;
/**
* @summary Delete multiple players by IDs
*/
export declare const useBulkDeleteGiocatori: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkDeleteGiocatori>>, TError, {
        data: BodyType<BulkDeleteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof bulkDeleteGiocatori>>, TError, {
    data: BodyType<BulkDeleteInput>;
}, TContext>;
export declare const getGetGiocatoreUrl: (id: number) => string;
/**
 * @summary Get a player by ID
 */
export declare const getGiocatore: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getGetGiocatoreQueryKey: (id: number) => readonly [`/api/giocatori/${number}`];
export declare const getGetGiocatoreQueryOptions: <TData = Awaited<ReturnType<typeof getGiocatore>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGiocatore>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGiocatore>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGiocatoreQueryResult = NonNullable<Awaited<ReturnType<typeof getGiocatore>>>;
export type GetGiocatoreQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a player by ID
 */
export declare function useGetGiocatore<TData = Awaited<ReturnType<typeof getGiocatore>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGiocatore>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteGiocatoreUrl: (id: number) => string;
/**
 * @summary Delete a player
 */
export declare const deleteGiocatore: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteGiocatoreMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGiocatore>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteGiocatore>>, TError, {
    id: number;
}, TContext>;
export type DeleteGiocatoreMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGiocatore>>>;
export type DeleteGiocatoreMutationError = ErrorType<ErrorResponse>;
/**
* @summary Delete a player
*/
export declare const useDeleteGiocatore: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGiocatore>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteGiocatore>>, TError, {
    id: number;
}, TContext>;
export declare const getUpdateGiocatoreUrl: (id: number) => string;
/**
 * @summary Update a player (nome, ruolo, rating)
 */
export declare const updateGiocatore: (id: number, giocatoreUpdate: GiocatoreUpdate, options?: RequestInit) => Promise<Giocatore>;
export declare const getUpdateGiocatoreMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGiocatore>>, TError, {
        id: number;
        data: BodyType<GiocatoreUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGiocatore>>, TError, {
    id: number;
    data: BodyType<GiocatoreUpdate>;
}, TContext>;
export type UpdateGiocatoreMutationResult = NonNullable<Awaited<ReturnType<typeof updateGiocatore>>>;
export type UpdateGiocatoreMutationBody = BodyType<GiocatoreUpdate>;
export type UpdateGiocatoreMutationError = ErrorType<ErrorResponse>;
/**
* @summary Update a player (nome, ruolo, rating)
*/
export declare const useUpdateGiocatore: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGiocatore>>, TError, {
        id: number;
        data: BodyType<GiocatoreUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGiocatore>>, TError, {
    id: number;
    data: BodyType<GiocatoreUpdate>;
}, TContext>;
export declare const getIncrementPresenzeUrl: (id: number) => string;
/**
 * @summary Increment player presenze by 1
 */
export declare const incrementPresenze: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getIncrementPresenzeMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof incrementPresenze>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof incrementPresenze>>, TError, {
    id: number;
}, TContext>;
export type IncrementPresenzeMutationResult = NonNullable<Awaited<ReturnType<typeof incrementPresenze>>>;
export type IncrementPresenzeMutationError = ErrorType<ErrorResponse>;
/**
* @summary Increment player presenze by 1
*/
export declare const useIncrementPresenze: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof incrementPresenze>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof incrementPresenze>>, TError, {
    id: number;
}, TContext>;
export declare const getDecrementPresenzeUrl: (id: number) => string;
/**
 * @summary Decrement player presenze by 1 (min 0)
 */
export declare const decrementPresenze: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getDecrementPresenzeMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decrementPresenze>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof decrementPresenze>>, TError, {
    id: number;
}, TContext>;
export type DecrementPresenzeMutationResult = NonNullable<Awaited<ReturnType<typeof decrementPresenze>>>;
export type DecrementPresenzeMutationError = ErrorType<ErrorResponse>;
/**
* @summary Decrement player presenze by 1 (min 0)
*/
export declare const useDecrementPresenze: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decrementPresenze>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof decrementPresenze>>, TError, {
    id: number;
}, TContext>;
export declare const getIncrementVittorieUrl: (id: number) => string;
/**
 * @summary Increment player vittorie by 1
 */
export declare const incrementVittorie: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getIncrementVittorieMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof incrementVittorie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof incrementVittorie>>, TError, {
    id: number;
}, TContext>;
export type IncrementVittorieMutationResult = NonNullable<Awaited<ReturnType<typeof incrementVittorie>>>;
export type IncrementVittorieMutationError = ErrorType<ErrorResponse>;
/**
* @summary Increment player vittorie by 1
*/
export declare const useIncrementVittorie: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof incrementVittorie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof incrementVittorie>>, TError, {
    id: number;
}, TContext>;
export declare const getDecrementVittorieUrl: (id: number) => string;
/**
 * @summary Decrement player vittorie by 1 (min 0)
 */
export declare const decrementVittorie: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getDecrementVittorieMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decrementVittorie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof decrementVittorie>>, TError, {
    id: number;
}, TContext>;
export type DecrementVittorieMutationResult = NonNullable<Awaited<ReturnType<typeof decrementVittorie>>>;
export type DecrementVittorieMutationError = ErrorType<ErrorResponse>;
/**
* @summary Decrement player vittorie by 1 (min 0)
*/
export declare const useDecrementVittorie: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decrementVittorie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof decrementVittorie>>, TError, {
    id: number;
}, TContext>;
export declare const getResetStatsUrl: (id: number) => string;
/**
 * @summary Reset player presenze and vittorie to 0
 */
export declare const resetStats: (id: number, options?: RequestInit) => Promise<Giocatore>;
export declare const getResetStatsMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resetStats>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof resetStats>>, TError, {
    id: number;
}, TContext>;
export type ResetStatsMutationResult = NonNullable<Awaited<ReturnType<typeof resetStats>>>;
export type ResetStatsMutationError = ErrorType<ErrorResponse>;
/**
* @summary Reset player presenze and vittorie to 0
*/
export declare const useResetStats: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resetStats>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof resetStats>>, TError, {
    id: number;
}, TContext>;
export declare const getGeneraSquadreUrl: () => string;
/**
 * @summary Generate 3 balanced teams from selected players
 */
export declare const generaSquadre: (generaSquadreInput: GeneraSquadreInput, options?: RequestInit) => Promise<GeneraSquadreResult>;
export declare const getGeneraSquadreMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generaSquadre>>, TError, {
        data: BodyType<GeneraSquadreInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generaSquadre>>, TError, {
    data: BodyType<GeneraSquadreInput>;
}, TContext>;
export type GeneraSquadreMutationResult = NonNullable<Awaited<ReturnType<typeof generaSquadre>>>;
export type GeneraSquadreMutationBody = BodyType<GeneraSquadreInput>;
export type GeneraSquadreMutationError = ErrorType<ErrorResponse>;
/**
* @summary Generate 3 balanced teams from selected players
*/
export declare const useGeneraSquadre: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generaSquadre>>, TError, {
        data: BodyType<GeneraSquadreInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generaSquadre>>, TError, {
    data: BodyType<GeneraSquadreInput>;
}, TContext>;
export declare const getGetStatsUrl: () => string;
/**
 * @summary Get tournament statistics
 */
export declare const getStats: (options?: RequestInit) => Promise<Stats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get tournament statistics
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map