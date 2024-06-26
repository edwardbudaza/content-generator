import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load the .env.local file first
dotenv.config({ path: '.env.local' });

// Check if the URL is defined
let dbUrl = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

// If the URL is not defined, load the .env file
if (!dbUrl) {
  dotenv.config({ path: '.env' });
  dbUrl = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;
}

export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl!,
  },
  verbose: true,
  strict: true,
});
