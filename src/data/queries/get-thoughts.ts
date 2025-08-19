import { db } from "../db/client";
import { thoughts } from "../db/schema";
import { desc, eq } from "drizzle-orm";

export async function getThoughts() {
	return await db
		.select({
			id: thoughts.id,
			author: thoughts.author,
			content: thoughts.content,
			isAnonymous: thoughts.isAnonymous,
			createdAt: thoughts.createdAt,
		})
		.from(thoughts)
		.orderBy(desc(thoughts.createdAt));
}
