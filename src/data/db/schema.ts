import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const thoughts = pgTable("thoughts", {
	id: text("id").primaryKey().notNull(),
	author: text("author").notNull(),
	content: text("content").notNull(),
	isAnonymous: boolean("is_anonymous").default(false),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});
