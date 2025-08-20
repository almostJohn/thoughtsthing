import { Suspense } from "react";
import { getThoughts } from "@/data/queries/get-thoughts";
import { ThoughtList } from "./thought-list";

export async function Thoughts() {
	const thoughts = await getThoughts();

	if (thoughts.length === 0) {
		return (
			<div className="flex items-center justify-center text-center py-24 md:py-32 lg:py-40">
				<p className="text-sm">no thoughts yet, be the first one to create!</p>
			</div>
		);
	}

	return (
		<Suspense fallback={<ThoughtListSkeleton />}>
			<ThoughtList thoughts={thoughts} />
		</Suspense>
	);
}

function ThoughtListSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
			{Array.from({ length: 20 }).map((_, index) => (
				<div
					key={index + 1}
					className="flex flex-col rounded-lg h-50 border p-4 border-rose-300 bg-rose-200 overflow-hidden relative"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[2s_linear_infinite_shimmer]" />
					<div className="space-y-3">
						<div className="h-3 bg-rose-300/70 rounded animate-pulse [animation-delay:0.4s]"></div>
						<div className="h-3 bg-rose-300/70 rounded w-5/6 animate-pulse [animation-delay:0.5s]"></div>
						<div className="h-3 bg-rose-300/70 rounded w-2/3 animate-pulse [animation-delay:0.6s]"></div>
					</div>
					<div className="mt-auto flex items-center justify-end">
						<div className="h-2 bg-rose-300/50 rounded w-16 animate-pulse [animation-delay:0.9s]"></div>
					</div>
				</div>
			))}
		</div>
	);
}
