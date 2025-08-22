"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { ThoughtCard, type Thought } from "./thought-card";
import { CreateThought } from "./create-thought";

type ThoughtListProps = {
	thoughts: Thought[];
};

export function ThoughtList({ thoughts }: ThoughtListProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredThoughts = useMemo(() => {
		return thoughts.filter((thought) =>
			thought.author.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [searchQuery, thoughts]);

	return (
		<div className="flex flex-col gap-6 md:gap-8">
			<div className="flex items-center gap-4">
				<div className="relative w-full">
					<Search className="size-4 shrink-0 absolute left-3 top-1/2 transform -translate-y-1/2" />
					<Input
						type="text"
						placeholder="search author"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pl-10 w-full focus-visible:border-rose-500/60 focus-visible:ring-rose-500/30"
					/>
				</div>
				<CreateThought />
			</div>
			{filteredThoughts.length > 0 && (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
					{filteredThoughts.map((thought) => (
						<ThoughtCard key={thought.id} thought={thought} />
					))}
				</div>
			)}
			{filteredThoughts.length === 0 && (
				<div className="flex items-center justify-center text-center py-24 md:py-32">
					<p className="text-sm">
						no thoughts found, try adjusting your query.
					</p>
				</div>
			)}
		</div>
	);
}
