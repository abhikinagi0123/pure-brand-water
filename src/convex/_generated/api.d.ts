/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth_emailOtp from "../auth/emailOtp.js";
import type * as auth from "../auth.js";
import type * as blog from "../blog.js";
import type * as customizations from "../customizations.js";
import type * as http from "../http.js";
import type * as newsletter from "../newsletter.js";
import type * as portfolio from "../portfolio.js";
import type * as quotes from "../quotes.js";
import type * as seedData from "../seedData.js";
import type * as testimonials from "../testimonials.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "auth/emailOtp": typeof auth_emailOtp;
  auth: typeof auth;
  blog: typeof blog;
  customizations: typeof customizations;
  http: typeof http;
  newsletter: typeof newsletter;
  portfolio: typeof portfolio;
  quotes: typeof quotes;
  seedData: typeof seedData;
  testimonials: typeof testimonials;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
