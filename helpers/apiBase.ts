//env variables get
const prefix = process.env.NEXT_PUBLIC_API_PREFIX;
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export const apiBase = `${prefix}/${url}`;
