import { Thoughts } from "@/components/thoughts/thoughts";
import { getThoughts } from "@/data/queries/get-thoughts";
import { MessageCircle } from "lucide-react";
import { formatNumber } from "@/lib/format-number";
import { TotalThoughts } from "@/components/thoughts/total-thoughts";
import { CreateThought } from "@/components/thoughts/create-thought";

export default function HomePage() {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 pt-6 pb-20 md:pb-32 lg:pb-40">
			<div className="flex flex-col gap-6 md:gap-8">
				<TotalThoughts />
				<Thoughts />
			</div>
			<div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8">
				<CreateThought />
			</div>
		</div>
	);
}
