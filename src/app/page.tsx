import { Thoughts } from "@/components/thoughts/thoughts";
import { getThoughts } from "@/data/queries/get-thoughts";
import { MessageCircle } from "lucide-react";
import { formatNumber } from "@/lib/format-number";
import { CreateThought } from "@/components/thoughts/create-thought";

export default async function HomePage() {
	const thoughts = await getThoughts();

	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 pt-6 pb-12 md:pb-24 lg:pb-28">
			<div className="flex flex-col gap-6 md:gap-8">
				<div className="mx-auto flex gap-2 items-center justify-center text-center">
					<MessageCircle className="size-5 shrink-0" />
					<p className="text-sm">
						{formatNumber(thoughts.length)}{" "}
						<span className="text-rose-500">
							{thoughts.length === 1 ? "thought" : "thoughts"}
						</span>{" "}
						submitted.
					</p>
				</div>
				<Thoughts />
			</div>
			<div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8">
				<CreateThought />
			</div>
		</div>
	);
}
