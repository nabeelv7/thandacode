import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GitHub from "@auth/sveltekit/providers/github";
import { db } from "$lib/server/db";

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
});
