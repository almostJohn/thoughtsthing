import { Suspense } from "react";
import { getThoughts } from "@/data/queries/get-thoughts";
import { MessageCircle } from "lucide-react";
import { formatNumber } from "@/lib/format-number";

export async function TotalThoughts() {
	const thoughts = await getThoughts();

	return (
		<div className="mx-auto flex items-center justify-center gap-2 text-center">
			<Suspense fallback={<TotalThoughtsSkeleton />}>
				<MessageCircle className="size-5 shrink-0" />
				<p className="text-sm">
					{formatNumber(thoughts.length)}{" "}
					<span className="text-rose-500">
						{thoughts.length === 1 ? "thought" : "thoughts"}
					</span>{" "}
					submitted.
				</p>
			</Suspense>
		</div>
	);
}

function TotalThoughtsSkeleton() {
	return (
		<div className="block relative p-3 h-8 w-48 rounded-md border border-rose-300 bg-rose-200">
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[2s_linear_infinite_shimmer]" />
		</div>
	);
}
