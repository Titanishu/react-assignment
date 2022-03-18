/**
 * Base API endpoint.
 *
 * We provide it from command line in package.json
 * scripts section, but only because it's a only one param.
 * .env files are way better in terms of managing env variables.
 */
export const API_BASE = String(process.env.REACT_APP_API_BASE || '')
