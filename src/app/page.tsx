import { CreateThought } from "@/components/thoughts/create-thought";

export default function HomePage() {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 pt-6 pb-12 md:pb-24 lg:pb-28">
			<div className="flex flex-col gap-6">
				<CreateThought />
			</div>
		</div>
	);
}
