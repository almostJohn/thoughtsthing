import { Tooltip } from "../tooltip";
import { formatDate, formatDateWithRelativeTime } from "@/lib/format-date";

export type Thought = {
	id: string;
	author: string;
	content: string;
	isAnonymous: boolean | null;
	createdAt: Date;
};

type ThoughtCardProps = {
	thought: Thought;
};

export function ThoughtCard({ thought }: ThoughtCardProps) {
	return (
		<Tooltip content={formatDateWithRelativeTime(thought.createdAt)}>
			<div className="flex min-h-[150px] flex-col rounded-lg shadow-sm border border-rose-300 bg-rose-200 md:min-h-[200px]">
				<div className="p-6 text-sm text-pretty text-left whitespace-pre-wrap">
					{thought.content.toLowerCase()}
				</div>
				<div className="mt-auto flex items-center justify-end p-6">
					<p className="text-sm">- {thought.author.toLowerCase()}</p>
				</div>
			</div>
		</Tooltip>
	);
}
