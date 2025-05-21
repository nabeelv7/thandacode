import { db } from "$lib/server/db";
import { repos, users } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const allRepos = await db.select().from(repos);
  console.log(allRepos);
  return {
    repos: allRepos,
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const session = await event.locals.auth();

    const data = await event.request.formData();
    const repoName = data.get("repo-name");

    if (!repoName) {
      return {
        status: 400,
        body: {
          error: "Repo name is required",
        },
      };
    }

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, session.user.email));

    await db.insert(repos).values({
      name: repoName,
      ownerId: user.id,
      createdAt: Date.now(),
    });

    return {
      status: 200,
    };
  },
};
