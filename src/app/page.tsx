import { Thoughts } from "@/components/thoughts/thoughts";
import { TotalThoughts } from "@/components/thoughts/total-thoughts";

export default function HomePage() {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 pt-6 pb-20 md:pb-32 lg:pb-40">
			<div className="flex flex-col gap-6 md:gap-8">
				<TotalThoughts />
				<Thoughts />
			</div>
		</div>
	);
}
