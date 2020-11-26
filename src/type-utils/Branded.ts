/**
 * Make type to be nominative
 */
export type Branded<T, B extends string> = T & { __brand?: B };
