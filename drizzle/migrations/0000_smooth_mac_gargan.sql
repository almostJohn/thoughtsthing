CREATE TABLE "thoughts" (
	"id" text PRIMARY KEY NOT NULL,
	"author" text NOT NULL,
	"content" text NOT NULL,
	"is_anonymous" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
