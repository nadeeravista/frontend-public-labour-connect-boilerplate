/**
 * Generated types from OpenAPI schema
 * This file provides convenient access to schema types and path types
 */

import type { components, paths } from "./openapi";

// Export schema types with cleaner names
export type SchemaTypes = components["schemas"];

// Export path types with cleaner names
export type PathTypes = paths;

// Re-export the original types for backward compatibility
export type { components, paths } from "./openapi";
