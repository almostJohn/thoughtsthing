import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-0 py-24 md:py-32">
			<div className="flex flex-col gap-2 items-center justify-center">
				<div className="mx-auto flex justify-center">
					<Loader className="size-5 shrink-0 animate-spin" />
				</div>
				<p className="text-sm">loading thoughts...</p>
			</div>
		</div>
	);
}
