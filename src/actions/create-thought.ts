"use server";

import crypto from "node:crypto";
import { revalidatePath } from "next/cache";
import { serverActionCallback, type ActionResponse } from "@/lib/server-action";
import { db } from "@/data/db/client";
import { thoughts } from "@/data/db/schema";
import { getFormValue } from "@/lib/get-form-value";

export async function createThought(
	_prevState: ActionResponse,
	formData: FormData,
): Promise<ActionResponse> {
	return serverActionCallback(async (): Promise<ActionResponse> => {
		const author = getFormValue(formData, "author");
		const content = getFormValue(formData, "content");
		const isAnonymous = getFormValue(formData, "is_anonymous") === "on";

		const authorToSave = isAnonymous ? "Anonymous" : author || "";

		if (!content) {
			return {
				errorMessage: "Content is a required field.",
				errors: {
					content: "Content is a required field.",
				},
			};
		}

		if (content.length < 3) {
			return {
				errorMessage: "Content must be at least 3 characters.",
				errors: {
					content: "Content must be at least 3 characters.",
				},
			};
		}

		if (content.length > 300) {
			return {
				errorMessage: "Content must not exceed 300 characters.",
				errors: {
					content: "Content must not exceed 300 characters.",
				},
			};
		}

		if (!isAnonymous) {
			if (!author) {
				return {
					errorMessage: "Author is a required field.",
					errors: {
						author: "Author is a required field.",
					},
				};
			}

			if (author.length < 3) {
				return {
					errorMessage: "Author must be at least 3 characters.",
					errors: {
						author: "Author must be at least 3 characters.",
					},
				};
			}

			if (author.length > 32) {
				return {
					errorMessage: "Author must not exceed 32 characters.",
					errors: {
						author: "Author must not exceed 32 characters.",
					},
				};
			}
		}

		await db.insert(thoughts).values({
			id: crypto.randomUUID(),
			author: authorToSave,
			content,
			isAnonymous,
		});

		revalidatePath("/");

		return {
			successMessage: "Thought has been posted successfully.",
		};
	});
}
