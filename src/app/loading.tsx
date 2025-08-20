import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 py-24 md:py-32 lg:py-40">
			<div className="mx-auto flex items-center justify-center">
				<Loader className="size-6 shrink-0 animate-spin" />
			</div>
		</div>
	);
}
