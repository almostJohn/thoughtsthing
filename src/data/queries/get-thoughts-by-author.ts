import { db } from "../db/client";
import { eq, and, desc } from "drizzle-orm";
import { thoughts } from "../db/schema";

export async function getThoughtsByAuthor(query: string) {
	if (!query.trim()) {
		return await db.select().from(thoughts).orderBy(desc(thoughts.createdAt));
	}

	return await db
		.select()
		.from(thoughts)
		.where(eq(thoughts.author, query))
		.orderBy(desc(thoughts.createdAt));
}
